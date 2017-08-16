import { WeatherData } from '../model/data-model';
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
  weather = new WeatherData(null, null, null, null, null, null, null, null, null, null, null);

  constructor(private servise: WeatherService) {}
  
  // check the status of current weather
  checkStatus(data): string {
    if (this.data.current.is_day === 1) {
      if (this.data.current.condition.code === 1000) {
          this.weather.currCond = `wi-day-sunny`;
      } else if (this.data.current.condition.code === 1003) {
          this.weather.currCond = `wi-day-cloudy`;
      } else if (this.data.current.condition.code === 1030) { 
        this.weather.currCond = `wi-day-cloudy-windy`;
      } else if (this.data.current.condition.code === 1135) {
          this.weather.currCond = `wi-day-fog`;
      } else if (this.data.current.condition.code === 1183) {
          this.weather.currCond = `wi-day-showers`;
      }
    } else {
      if (this.data.current.condition.code === 1000) {
          this.weather.currCond = `wi-night-alt-clear`;
      } else if(this.data.current.condition.code === 1003) {
          this.weather.currCond = `wi-night-alt-cloudy`;
      } else if (this.data.current.condition.code === 1030) { 
        this.weather.currCond = `wi-night-alt-cloudy-windy`;
      } else if (this.data.current.condition.code === 1135) {
          this.weather.currCond = `wi-night-fog`;
      } else if (this.data.current.code === 1183) {
          this.weather.currCond = `wi-night-alt-showers`;
      }
    }
    return this.weather.currCond;
  }
  
  // check the wind direction
  checkWindDirection(data): string {
    if (this.data.current.wind_dir === 'N') {
      this.weather.currWindDirIcon = `wi-from-n`;
    } else if (this.data.current.wind_dir === 'NNE') {
      this.weather.currWindDirIcon = `wi-from-nne`;
    } else if (this.data.current.wind_dir === 'NE') {
      this.weather.currWindDirIcon = `wi-from-ne`;
    } else if (this.data.current.wind_dir === 'ENE') {
      this.weather.currWindDirIcon = `wi-from-ene`;
    } else if (this.data.current.wind_dir === 'E') {
      this.weather.currWindDirIcon = `wi-from-e`;
    } else if (this.data.current.wind_dir === 'ESE') {
      this.weather.currWindDirIcon = `wi-from-ese`;
    } else if (this.data.current.wind_dir === 'SE') {
      this.weather.currWindDirIcon = `wi-from-se`;
    } else if (this.data.current.wind_dir === 'SSE') {
      this.weather.currWindDirIcon = `wi-from-sse`;
    } else if (this.data.current.wind_dir === 'S') {
      this.weather.currWindDirIcon = `wi-from-s`;
    } else if (this.data.current.wind_dir === 'SSW') {
      this.weather.currWindDirIcon = `wi-from-ssw`;
    } else if (this.data.current.wind_dir === 'SW') {
      this.weather.currWindDirIcon = `wi-from-sw`;
    } else if (this.data.current.wind_dir === 'WSW') {
      this.weather.currWindDirIcon = `wi-from-wsw`;
    } else if (this.data.current.wind_dir === 'W') {
      this.weather.currWindDirIcon = `wi-from-w`;
    } else if (this.data.current.wind_dir === 'WNW') {
      this.weather.currWindDirIcon = `wi-from-wnw`;
    } else if (this.data.current.wind_dir === 'NW') {
      this.weather.currWindDirIcon = `wi-from-nw`;
    } else if (this.data.current.wind_dir === 'NNW') {
      this.weather.currWindDirIcon = `wi-from-NNW`;
    }
    return this.weather.currWindDirIcon;
  }
  // inser data to DOM
  insertData(data): void {
    this.checkStatus(this.data);
    this.checkWindDirection(this.data);
    this.weather.location = this.data.location.name;
    this.weather.lastUpdate = this.data.current.last_updated;
    this.weather.currTemp = this.data.current.temp_c;
    this.weather.currFeelsTemp = this.data.current.feelslike_c;
    this.weather.currWindString = this.data.current.wind_dir;
    this.weather.currWindSpeed = this.data.current.wind_kph;
    this.weather.currPres = this.data.current.pressure_mb;
    this.weather.currPrec = this.data.current.precip_mm;
    this.weather.currHum = this.data.current.humidity;
  }

  // clear all data before refresh
  clearData() {
    this.weather = new WeatherData(null, null, null, null, null, null, null, null, null, null, null);
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
