import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductRoutingModule} from "./product-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";

import {ProductComponent} from "./product.component";

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductModule {
}
