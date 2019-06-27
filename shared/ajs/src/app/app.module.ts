import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const appComponent = createCustomElement(AppComponent, {
      injector
    });
    customElements.define('app-root', appComponent);
  }

  ngDoBootstrap() {

  }
}
