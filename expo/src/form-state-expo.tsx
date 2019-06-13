import * as React from 'react';
import { LifeCycleAppModel } from '@skeleton-xn/app-model-context';
import { AppStatus } from './app-status';
import { InputWhatToSay } from './input-what-to-say';
import { Card, Text, Header, Container } from 'native-base';

export interface FormStateExpo {
  readonly title?: string;
  readonly tickFreq?: number;
}

export function FormStateExpo(props: FormStateExpo): JSX.Element {
  return (
    <>
      <LifeCycleAppModel />
      <Container>
        <Header>
          <Text>FormStateExpo</Text>
        </Header>
        <Card>
          <InputWhatToSay />
        </Card>
        <Card>
          <AppStatus />
        </Card>
      </Container>
    </>
  );
}
