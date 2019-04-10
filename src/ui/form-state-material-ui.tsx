import * as React from 'react';
import { observer } from 'mobx-react';
import { CssBaseline } from '@material-ui/core';
import { InputWhatToSay } from './material-ui/input-what-to-say';
import { AppModelProp } from './app-model-prop';
import { AppStatus } from './material-ui/app-status';

export interface FormStateMaterialUIProps extends AppModelProp {
  readonly title?: string;
}

export class FormStateMaterialUI extends React.Component<FormStateMaterialUIProps> {

  public constructor(props: FormStateMaterialUIProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.app.start();
  }

  public componentWillUnmount() {
    this.props.app.stop();
  }

  public render() {
    return <>
      {CssBaseline}
      <InputWhatToSay app={this.props.app}/>
      <AppStatus app={this.props.app}/>
    </>;
  }
}
