import * as uuid from 'uuid';

import { observable, IObservableValue } from 'mobx';
import { TickerAgent, TickerAgentInit } from '@skeleton-xn/agents';

export interface AppModel {
  readonly objectId: string;
  readonly whatToSay: IObservableValue<string>;

  readonly ticker: TickerAgent;
  start(): void;
  stop(): void;
}

export interface AppModelProps extends TickerAgentInit {
}

// export type AppModel = React.PropsWithChildren<InternalAppModel>;

export class AppModelImpl implements AppModel {
  public readonly objectId: string;
  public readonly ticker: TickerAgent;
  public readonly whatToSay: IObservableValue<string> = observable.box('');

  constructor(props?: AppModelProps) {
    this.objectId = uuid.v4();
    this.ticker = new TickerAgent(props);
    // console.log('AppModelImpl', this.objectId);
  }

  public start() {
    // console.log('AppModelImpl:start', this.objectId);
    this.ticker.start();
  }

  public stop() {
    // console.log('AppModelImpl:stop', this.objectId);
    this.ticker.stop();
  }
}
