import * as uuid from 'uuid';

import { action, IObservableValue, observable, computed } from 'mobx';

export class TickerAgent {
  public readonly objectId: string = uuid.v4();
  private timer: any;
  private nestCount: number = 0;

  @observable
  private tick: number = 0;

  public start() {
    if (this.nestCount++ === 0) {
      console.log('Ticker:start', this.objectId);
      this.timer = setInterval(action(() => {
        console.log('Tick', this.objectId);
        this.tick++;
      }), 1000);
    }
  }

  public stop() {
    console.log('Ticker:stop', this.objectId);
    if (--this.nestCount == 0) {
      clearInterval(this.timer);
    }
  }

  @computed
  public get value() {
    return this.tick;
  }
}
