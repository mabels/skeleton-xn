import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppModel } from '../../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  private appModel: AppModel = globalThis.observableAppModel.get();
  // new AppModelImpl();
  // private appModel = new AppModelImpl();
  ngOnInit() {
    console.log('AppComponent:', this.appModel.objectId);
    this.appModel.start();
  }
  ngOnDestroy() {
    console.log('AppComponent:', this.appModel.objectId);
    this.appModel.stop();
  }
}
