import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateAjsComponent } from './state-ajs.component';

import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    StateAjsComponent,
  ],
  imports: [
    BrowserModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
