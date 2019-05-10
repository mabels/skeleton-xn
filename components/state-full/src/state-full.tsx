import * as React from 'react';

export interface StateFullProps {
  readonly title?: string;
}

export interface StateFullState {
  whatToSay: string;
  tick: number;
}

export class StateFull extends React.Component<StateFullProps, StateFullState> {

  private timer: any;

  public constructor(props: StateFullProps) {
    super(props);
    this.state = {
      whatToSay: '',
      tick: 0
    };
  }

  public componentDidMount() {
    this.timer = setInterval(() => {
      // this.state.tick++;
    }, 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  public render() {
    return <>
      <form>
        <fieldset>
          <label>What to say</label>
          <input type="text" value={this.state.whatToSay} />
        </fieldset>
      </form>
      <ul>
        <li>{this.state.tick}</li>
        <li>{this.state.whatToSay}</li>
      </ul>
    </>;
  }
}
