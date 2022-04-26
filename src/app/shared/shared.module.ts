import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ColorPickerComponent} from './components/color-picker.component';
import {NavbarMainComponent, NavbarSubComponent} from './components/navbar.component';

@NgModule({
  declarations: [
    NavbarMainComponent,
    NavbarSubComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarMainComponent,
    NavbarSubComponent,
    ColorPickerComponent
  ]
})
export class SharedModule {
}
