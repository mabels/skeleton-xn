import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppModel } from '../../../models/dist/app-model';
import { reaction } from 'mobx';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-state-ajs',
  templateUrl: './state-ajs.component.html',
  styleUrls: ['./state-ajs.component.sass']
})
export class StateAjsComponent implements OnInit {
  @Input() title: string;
  @Input() appModel: AppModel;

  ngOnInit() {
    // reaction(() => this.appModel.whatToSay.get(), console.log);
  }

  public reactionTickerFn = () => this.appModel.ticker.value;
  public reactionWhatToSay = () => this.appModel.whatToSay.get();
}
