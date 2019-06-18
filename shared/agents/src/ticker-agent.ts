import * as uuid from 'uuid';

import { action, observable, computed } from 'mobx';

export interface TickerAgentInit {
  readonly tickFreq?: number;
}

export class TickerAgent {
  public readonly objectId: string = uuid.v4();
  private readonly tickFreq: number;
  private timer: any;
  private nestCount: number = 0;

  @observable
  private tick: number = 0;

  constructor(props?: TickerAgentInit) {
    props = props || {};
    this.tickFreq = props.tickFreq || 1000;
    // console.log('TickerAgent:', this.tickFreq);
  }

  public start() {
    if (this.nestCount++ === 0) {
      console.log('Ticker:start', this.objectId);
      this.timer = setInterval(action(() => {
        // console.log('Tick', this.objectId);
        this.tick++;
      }), this.tickFreq);
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
