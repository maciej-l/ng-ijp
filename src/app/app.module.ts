import { IjpModule } from './ijp/ijp.module';
import { WeatherModule } from './weather/weather.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    WeatherModule,
    IjpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
