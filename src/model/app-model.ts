import * as uuid from 'uuid';

import { observable, IObservableValue, action } from 'mobx';
import { TickerAgent } from '../agents/ticker';

export interface InternalAppModel {
  readonly objectId: string;
  readonly whatToSay: IObservableValue<string>;

  readonly ticker: TickerAgent;
  start(): void;
  stop(): void;
}

export type AppModel = React.PropsWithChildren<InternalAppModel>;

export class AppModelImpl implements AppModel {
  public readonly objectId: string;
  public readonly whatToSay: IObservableValue<string> = observable.box('');
  public readonly ticker: TickerAgent = new TickerAgent();

  constructor() {
    this.objectId = uuid.v4();
    console.log('AppModelImpl', this.objectId);
  }

  public start() {
    console.log('AppModelImpl:start', this.objectId);
    this.ticker.start();
  }

  public stop() {
    console.log('AppModelImpl:stop', this.objectId);
    this.ticker.stop();
  }
}
