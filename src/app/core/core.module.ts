import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {NavbarComponent} from "./components/navbar.component";
import {NavbarCartPanelComponent} from './components/navbar-cart-panel.component';
import {NotificationComponent} from './components/notification.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarCartPanelComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {
}
