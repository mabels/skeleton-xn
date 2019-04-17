import * as React from 'react';
import { observer } from 'mobx-react';
import { CssBaseline } from '@material-ui/core';
import { InputWhatToSay } from './material-ui/input-what-to-say';
import { AppStatus } from './material-ui/app-status';
import { AppModelContext } from './app-model-context';
import { AppModel } from '../model/app-model';

export interface LifeCycleAppModelProps {
  readonly app: AppModel;
}

export class LifeCycleAppModel extends React.Component<LifeCycleAppModelProps> {

  public componentDidMount() {
    this.props.app.start();
  }

  public componentWillUnmount() {
    this.props.app.stop();
  }

  public render() {
    return <></>;
  }
}

export interface FormStateMaterialUIProps {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function FormStateMaterialUI(props: FormStateMaterialUIProps): JSX.Element {
  return <>
    <AppModelContext.Consumer>{(app: AppModel) => <LifeCycleAppModel app={app} />}</AppModelContext.Consumer>
    {CssBaseline}
    <InputWhatToSay />
    <AppStatus />
  </>;
}
