import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import it from "@angular/common/locales/it";
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from "./core/core.module";

import {AppComponent} from './app.component';

registerLocaleData(it)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'it'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
