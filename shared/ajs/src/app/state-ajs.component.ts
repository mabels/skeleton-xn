import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppModel } from '@skeleton-xn/models';

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
  public get styleWhatToSay() {
    return {
      background: this.appModel.whatToSay.get().length % 2 ? 'orange' : 'pink'
    };
  }

}
