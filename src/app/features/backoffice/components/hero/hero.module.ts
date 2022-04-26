import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroRoutingModule} from './hero-routing.module';
import {FormsModule} from "@angular/forms";

import {HeroComponent} from './hero.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ]
})
export class HeroModule {
}
