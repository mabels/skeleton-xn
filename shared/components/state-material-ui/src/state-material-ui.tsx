import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { InputWhatToSay } from './loc/input-what-to-say';
import { AppStatus } from './loc/app-status';
import { LifeCycleAppModel } from '@skeleton-xn/app-model-context';

export interface StateMaterialUIProps {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function StateMaterialUI(props: StateMaterialUIProps): JSX.Element {
  return <>
    <CssBaseline />
    <InputWhatToSay />
    <AppStatus />
  </>;
}
