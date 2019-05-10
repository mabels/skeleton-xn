import * as React from 'react';
import { observer } from 'mobx-react';
import { CssBaseline } from '@material-ui/core';
import { InputWhatToSay } from './material-ui/input-what-to-say';
import { AppStatus } from './material-ui/app-status';
import { LifeCycleAppModel } from './life-cycle-app-model';

export interface FormStateMaterialUIProps {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function FormStateMaterialUI(props: FormStateMaterialUIProps): JSX.Element {
  return <>
    {CssBaseline}
    <LifeCycleAppModel />
    <InputWhatToSay />
    <AppStatus />
  </>;
}
