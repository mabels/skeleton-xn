import { observable, IObservableValue, action } from 'mobx';
import { TickerAgent } from '../agents/ticker';

export class AppModel {
  public whatToSay: IObservableValue<string> = observable.box('');

  public ticker: TickerAgent = new TickerAgent();

  public start() {
    this.ticker.start();
  }

  public stop() {
    this.ticker.stop();
  }

}
