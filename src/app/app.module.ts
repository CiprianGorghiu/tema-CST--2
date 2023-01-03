import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Mod1Module} from './mod1/mod1.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Modal1Component } from './modal1/modal1.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ModalDisplayComponent } from './modal-display/modal-display.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    Modal1Component,
    ModalDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Mod1Module,
    NzModalModule,
    NzButtonModule
    

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
