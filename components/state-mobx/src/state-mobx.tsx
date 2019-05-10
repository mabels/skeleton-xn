import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export interface StateMobxProps {
  readonly className?: string;
  readonly title?: string;
  readonly tickFreq?: number;
}

interface InputStringProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputString(props: InputStringProps): JSX.Element {
  return <input type="text" value={props.value} onChange={props.onChange} />;
}

export function LiWhatToSay({ value }: {value: string}): JSX.Element {
  return <li>{value}</li>;
}

export function LiTick({ value }: {value: number}): JSX.Element {
  return <li>{value}</li>;
}

@observer
export class StateMobx extends React.Component<StateMobxProps> {

  private timer: any;

  @observable
  private whatToSay: string;
  @observable
  private tick: number;

  public constructor(props: StateMobxProps) {
    super(props);
    this.whatToSay = '';
    this.tick = 0;
  }

  public componentDidMount() {
    this.timer = setInterval(action(() => {
      this.tick++;
    }), this.props.tickFreq || 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  @action
  public onChangeWhatToSay = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('onChangeWhatToSay:', e.currentTarget.value);
    this.whatToSay = e.currentTarget.value;
  }

  public render() {
    return <div className={this.props.className}>
      <form>
        <fieldset>
          <label>What to say</label>
          <InputString value={this.whatToSay} onChange={this.onChangeWhatToSay} />
        </fieldset>
      </form>
      <ul>
        <LiTick value={this.tick} />
        <LiWhatToSay value={this.whatToSay} />
      </ul>
    </div>;
  }
}
