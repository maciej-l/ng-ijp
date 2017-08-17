import { StatusService } from './../service/status.service';
import { IjpData } from './../model/ijp-data-model';
import { IjpConnectionService } from './../service/ijp-connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chabry-ijp',
  templateUrl: './chabry.component.html',
  styleUrls: ['./chabry.component.scss'],
  providers: [
    IjpConnectionService,
    StatusService
   ]
})
export class ChabryComponent implements OnInit {
  data: any;
  lookoData = new IjpData(null, null, null, null);
  pm10Bcg: string;
  pm25Bcg: string;
  ijpBcg: string;
  locationName = 'Osiedle Chabry';

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
    this.service.getDataFromChabry()
      .subscribe((response) => {
        this.data = response.json();
        this.insertData();
      });
  }

  ngOnInit() {
    this.getData();
  }
}
