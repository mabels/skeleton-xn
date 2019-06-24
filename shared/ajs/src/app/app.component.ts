import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AppModelImpl } from '../../../models';
import { reaction } from 'mobx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  private appModel = new AppModelImpl();
  ngOnInit() {
    console.log('AppComponent:', this.appModel.objectId);
    this.appModel.start();
  }
  ngOnDestroy() {
    console.log('AppComponent:', this.appModel.objectId);
    this.appModel.stop();
  }
}
