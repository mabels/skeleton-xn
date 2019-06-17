import * as React from 'react';
import { LifeCycleAppModel } from '@skeleton-xn/app-model-context';
import { AppStatus } from './app-status';
import { InputWhatToSay } from './input-what-to-say';
import { Text } from 'react-native';

export interface FormStateExpo {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function FormStateExpo(props: FormStateExpo): JSX.Element {
  return (
    <>
      <LifeCycleAppModel />
      <>
          <Text>FormStateExpo</Text>
          <InputWhatToSay />
          <AppStatus />
      </>
    </>
  );
}
