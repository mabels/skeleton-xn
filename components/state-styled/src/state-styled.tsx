import * as React from 'react';
import { jsx } from '@emotion/core';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';

import { AppModel } from '@skeleton-xn/models';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { action } from 'mobx';

// export const StateStyled: React.FunctionComponent = styled(StateMobx)<StateMobxProps>`
//   background: red;
//   ul {
//     background: 'blue';
//   }
// `;

const InputWhatToSay = observer(({app}: { app: AppModel }) => {
  return <input value={app.whatToSay.get()}
    onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
      app.whatToSay.set(e.target.value))} />;
});

const LiTick = observer(({app}: { app: AppModel }) => {
  const StyledLi = styled.li`
    background: ${app.ticker.value % 2 ? 'red' : 'blue'}
  `;
  return <StyledLi>{app.ticker.value}</StyledLi>;
});

const LiWhatToSay = observer(({app}: { app: AppModel }): JSX.Element => {
  const My: React.FunctionComponent =
    ({className}: {className?: string, children?: React.ReactNode}) =>
      <li className={className} key={4711}>{app.whatToSay.get()}</li>;
  const X = styled(My)`
    background: ${app.whatToSay.get().length % 2 ? 'green' : 'orange'}
  `;
  return <X />;
});

export function StateStyled(props: {}): JSX.Element {
  return <AppModelContext.Consumer>
      {(app: AppModel) => <div>
        <form>
          <fieldset>
            <label>What to say</label>
            <InputWhatToSay app={app} />
          </fieldset>
        </form>
        <ul>
          <LiTick app={app} />
          <LiWhatToSay app={app} />
        </ul>
      </div>}
    </AppModelContext.Consumer>;

}

// extends React.Component<StateMobxProps> {

//   private timer: any;

//   @observable
//   private whatToSay: string;
//   @observable
//   private tick: number;

//   public constructor(props: StateMobxProps) {
//     super(props);
//     this.whatToSay = '';
//     this.tick = 0;
//   }

//   public componentDidMount() {
//     this.timer = setInterval(action(() => {
//       this.tick++;
//     }), this.props.tickFreq || 1000);
//   }

//   public componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   @action
//   public onChangeWhatToSay = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // console.log('onChangeWhatToSay:', e.currentTarget.value);
//     this.whatToSay = e.currentTarget.value;
//   }

//   public render() {
//     return <div className={this.props.className}>
//       <form>
//         <fieldset>
//           <label>What to say</label>
//           <InputString value={this.whatToSay} onChange={this.onChangeWhatToSay} />
//         </fieldset>
//       </form>
//       <ul>
//         <LiTick value={this.tick} />
//         <LiWhatToSay value={this.whatToSay} />
//       </ul>
//     </div>;
//   }
// }
