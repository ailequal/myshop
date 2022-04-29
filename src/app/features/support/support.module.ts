import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupportRoutingModule} from './support-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {SupportComponent} from './support.component';

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SupportModule {
}
