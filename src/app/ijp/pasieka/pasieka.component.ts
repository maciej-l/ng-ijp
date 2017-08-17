import { IjpData } from './../model/ijp-data-model';
import { StatusService } from './../service/status.service';
import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pasieka-ijp',
  templateUrl: './pasieka.component.html',
  styleUrls: ['./pasieka.component.scss'],
  providers: [
    IjpConnectionService,
    StatusService
  ]
})
export class PasiekaComponent implements OnInit {

  data: any;
  lookoData = new IjpData(null, null, null, null);
  pm10Bcg: string;
  pm25Bcg: string;
  ijpBcg: string;
  locationName = 'Pasieka';

  constructor(
    private service: IjpConnectionService,
    private status: StatusService
  ) { }

// Insert data to DOM
insertData() {
  this.lookoData.ijp = this.data.IJP;
  this.lookoData.ijpString = this.data.IJPString;
  this.lookoData.pm25 = this. data.PM25;
  this.lookoData.pm10 = this.data.PM10;
  this.ijpBcg = this.status.checkValueOfIjp(this.data.IJP);
  this.pm25Bcg = this.status.checkValueOfPm25(this.data.PM25);
  this.pm10Bcg = this.status.checkValueOfPm10(this.data.PM10);
}

// refreshing data on click
refreshOnClick() {
  this.lookoData = new IjpData(null, null, null, null);
  this.getData();
}

// get data from looko chabry by connection service
getData() {
  this.service.getDataFromPas()
    .subscribe((response) => {
      this.data = response.json();
      this.insertData();
    });
}

ngOnInit() {
  this.getData();
}

}
