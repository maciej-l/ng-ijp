import { Component, OnInit } from '@angular/core';
import { IjpData } from './../model/ijp-data-model';
import { IjpConnectionService } from './../service/ijp-connection.service';

@Component({
  selector: 'pulaw-ijp',
  templateUrl: './pulaw.component.html',
  styleUrls: ['./pulaw.component.scss'],
  providers: [IjpConnectionService]
})
export class PulawComponent implements OnInit {
  data: any;
  lookoData = new IjpData(null, null, null, null);
  pm10Bcg: string;
  pm25Bcg: string;
  ijpBcg: string;

  constructor(private service: IjpConnectionService) { }

  insertData() {
    this.lookoData.ijp = this.data.IJP;
    this.lookoData.ijpString = this.data.IJPString;
    this.lookoData.pm25 = this.data.PM25;
    this.lookoData.pm10 = this.data.PM10;
    this.checkValueOfIjp();
    this.checkValueOfPm25();
    this.checkValueOfPm10();
  }
  
  checkValueOfIjp(): string {
    if (this.data.IJP >= 0 && this.data.IJP <= 1) {
      this.ijpBcg = 'data__bcg-dgreen';
    } else if (this.data.IJP >= 2 && this.data.IJP <= 3) {
      this.ijpBcg = 'data__bcg-green';
    } else if (this.data.IJP >= 4 && this.data.IJP <= 5) {
      this.ijpBcg = 'data__bcg-yellow';
    } else if (this.data.IJP >= 6 && this.data.IJP <= 7) {
      this.ijpBcg = 'data__bcg-orange';
    } else if (this.data.IJP >= 8 && this.data.IJP <= 9) {
      this.ijpBcg = 'data__bcg-red';
    } else if (this.data.IJP >= 10) {
      this.ijpBcg = 'data__bcg-black';
    }
    return this.ijpBcg;
  }

  checkValueOfPm25(): string {
    if (this.data.PM25 >= 0 && this.data.PM25 <= 12) {
      this.pm25Bcg = 'data__bcg-dgreen';
    } else if (this.data.PM25 >= 13 && this.data.PM25 <= 36) {
      this.pm25Bcg = 'data__bcg-green';
    } else if (this.data.PM25 >= 37 && this.data.PM25 <= 60) {
      this.pm25Bcg = 'data__bcg-yellow';
    } else if (this.data.PM25 >= 61 && this.data.PM25 <= 84) {
      this.pm25Bcg = 'data__bcg-orange';
    } else if (this.data.PM25 >= 85 && this.data.PM25 <= 120) {
      this.pm25Bcg = 'data__bcg-red';
    } else if (this.data.PM25 > 121) {
      this.pm25Bcg = 'data__bcg-black';
    }
    return this.pm25Bcg;
  }

  checkValueOfPm10(): string {
    if (this.data.PM10 >= 0 && this.data.PM10 <= 20) {
      this.pm10Bcg = 'data__bcg-dgreen';
    } else if (this.data.PM10 >= 21 && this.data.PM10 <= 60) {
      this.pm10Bcg = 'data__bcg-green';
    } else if (this.data.PM10 >= 61 && this.data.PM10 <= 100) {
      this.pm10Bcg = 'data__bcg-yellow';
    } else if (this.data.PM10 >= 101 && this.data.PM10 <= 140) {
      this.pm10Bcg = 'data__bcg-orange';
    } else if (this.data.PM10 >= 141 && this.data.PM10 <= 200) {
      this.pm10Bcg = 'data__bcg-red';
    } else if (this.data.PM10 > 201) {
      this.pm10Bcg = 'data__bcg-black';
    }
    return this.pm10Bcg;
  }

  refreshOnClick() {
    this.lookoData = new IjpData(null, null, null, null);
    this.getData();
  }

  getData() {
    this.service.getDataFromPulaw()
      .subscribe((response) => {
        this.data = response.json();
        this.insertData();
      });
  }

  ngOnInit() {
    this.getData();
  }
}
