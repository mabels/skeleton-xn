import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export interface FormStateFullProps {
  className?: string;
  title?: string;
}

@observer
export class FormStateMatrialUI extends React.Component<FormStateFullProps> {

  private timer: any;

  @observable
  private whatToSay: string;
  @observable
  private tick: number;

  public constructor(props: FormStateFullProps) {
    super(props);
    this.whatToSay = '';
    this.tick = 0;
  }

  public componentDidMount() {
    this.timer = setInterval(action(() => {
      this.tick++;
    }), 1000);
  }

  public componentWillUnmount() {
    clearInterval(this.timer);
  }

  @action
  public inputWhatToSay = (e: React.FormEvent<HTMLInputElement>) => {
    this.whatToSay = e.currentTarget.value;
  }

  public render() {
    return <Card>
      <form>
        <fieldset>
          <label>What to say</label>
          <input type="text" value={this.whatToSay} onChange={this.inputWhatToSay} />
        </fieldset>
      </form>
      <ul>
        <li>{this.tick}</li>
        <li>{this.whatToSay}</li>
      </ul>
    </Card>;
  }
}
