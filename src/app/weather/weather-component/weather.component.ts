import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit {
  
  data: any;
  weatherDataLocation: string;
  weatherLastUpdate: string;
  weatherDataCurrCond: string;
  weatherDataCurrTemp: number;
  weatherDataCurrFeelsTemp: number;
  weatherDataCurrWindDirIcon: string;
  weatherDataCurrWindString: string;
  weatherDataCurrWindSpeed: number;
  weatherDataCurrPres: number;
  weatherDataCurrPrec: number;
  weatherDataCurrHum: number;

  constructor(private servise: WeatherService) {}
  
  // check the status of current weather
  checkStatus(data): string {
    if (this.data.current.is_day === 1) {
      if (this.data.current.condition.code === 1003) {
        this.weatherDataCurrCond = `wi-day-cloudy`;
      } else if (this.data.current.condition.code === 1183) {
         this.weatherDataCurrCond = `wi-day-showers`;
      }
    } else {
      if (this.data.current.condition.code === 1003) {
        this.weatherDataCurrCond = `wi-night-alt-cloudy`;
      } else if (this.data.current.code === 1183) {
       this.weatherDataCurrCond = `wi-night-alt-showers`;
      }
    }
    return this.weatherDataCurrCond;
  }
  
  // check the wind direction
  checkWindDirection(data): string {
    if (this.data.current.wind_dir === 'N') {
      this.weatherDataCurrWindDirIcon = `wi-from-n`;
    }
    return this.weatherDataCurrWindDirIcon;
  }
  // inser data to DOM
  insertData(data): void {
    this.checkStatus(this.data);
    this.checkWindDirection(this.data);
    this.weatherDataLocation = this.data.location.name;
    this.weatherLastUpdate = this.data.current.last_updated;
    this.weatherDataCurrTemp = this.data.current.temp_c;
    this.weatherDataCurrFeelsTemp = this.data.current.feelslike_c;
    this.weatherDataCurrWindString = this.data.current.wind_dir;
    this.weatherDataCurrWindSpeed = this.data.current.wind_kph;
    this.weatherDataCurrPres = this.data.current.pressure_mb;
    this.weatherDataCurrPrec = this.data.current.precip_mm;
    this.weatherDataCurrHum = this.data.current.humidity;
  }

  // clear all data before refresh
  clearData() {
    this.weatherDataCurrCond = null;
    this.weatherDataCurrWindDirIcon = null;
    this.weatherDataLocation = null;
    this.weatherLastUpdate = null;
    this.weatherDataCurrTemp = null;
    this.weatherDataCurrFeelsTemp = null;
    this.weatherDataCurrWindString = null;
    this.weatherDataCurrWindSpeed = null;
    this.weatherDataCurrPres = null;
    this.weatherDataCurrPrec = null;
    this.weatherDataCurrHum = null;
  }
  // refresh request
  onRefresh() {
    this.clearData();
    this.servise.getDataFromAPIXU()
    .subscribe((response) => {
      this.data = response.json();
      this.insertData(this.data);
    });
  }
  ngOnInit() {
    this.servise.getDataFromAPIXU()
    .subscribe((response) => {
      this.data = response.json();
      this.insertData(this.data);
    });
  }
}
