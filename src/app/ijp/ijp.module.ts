import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulawComponent } from './pulaw/pulaw.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChabryComponent,
    PulawComponent
  ],
  exports: [
    ChabryComponent,
    PulawComponent
  ]
})
export class IjpModule { }
