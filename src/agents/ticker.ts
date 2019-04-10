import { action, IObservableValue, observable, computed } from 'mobx';

export class TickerAgent {
  private timer: any;
  private nestCount: number = 0;

  @observable
  private tick: number = 0;

  public start() {
    if (this.nestCount++ === 0) {
      this.timer = setInterval(action(() => {
        this.tick++;
      }), 1000);
    }
  }

  public stop() {
    if (--this.nestCount == 0) {
      clearInterval(this.timer);
    }
  }

  @computed
  public get value() {
    return this.tick;
  }
}
