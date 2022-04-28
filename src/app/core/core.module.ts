import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {NavbarComponent} from "./components/navbar.component";
import { NotificationComponent } from './components/notification.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
}
