import { WeatherComponent } from './weather-component/weather.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherComponent
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
