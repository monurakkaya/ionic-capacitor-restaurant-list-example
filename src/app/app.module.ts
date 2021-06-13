import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptor} from './core/interceptors/http.interceptor';
import localeTr from '@angular/common/locales/tr';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeTr);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
  }), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'endpoint', useValue: environment.endpoint},
    { provide: 'apiKey', useValue: environment.apiKey},
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
