import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChabryComponent } from './chabry/chabry.component';
import { PulawComponent } from './pulaw/pulaw.component';
import { SoliComponent } from './soli/soli.component';
import { GroszComponent } from './grosz/grosz.component';
import { NwkComponent } from './nwk/nwk.component';
import { PasiekaComponent } from './pasieka/pasieka.component';
import { GrudzComponent } from './grudz/grudz.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChabryComponent,
    PulawComponent,
    SoliComponent,
    GroszComponent,
    NwkComponent,
    PasiekaComponent,
    GrudzComponent
  ],
  exports: [
    ChabryComponent,
    PulawComponent,
    SoliComponent,
    GroszComponent,
    NwkComponent,
    PasiekaComponent,
    GrudzComponent
  ]
})
export class IjpModule { }
