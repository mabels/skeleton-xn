import * as React from 'react';

import { AppModelProvider } from '@skeleton-xn/app-model-context';
import { FormStateExpo } from './form-state-expo';

import { KeepAwake, registerRootComponent } from 'expo';
import { InitialProps } from 'expo/build/launch/withExpoRoot.types';

if (__DEV__) {
  KeepAwake.activate();
}

class App extends React.Component<InitialProps> {
  render(): JSX.Element {
    return (
      <AppModelProvider>
        <FormStateExpo />
      </AppModelProvider>
    );
  }
}

registerRootComponent(App);
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/
