import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { observer } from 'mobx-react';
import { AppModelProvider } from '../ui/app-model-context';
import { FormStateExpo } from './form-state-expo';

import { KeepAwake, registerRootComponent } from 'expo';

if (__DEV__) {
  KeepAwake.activate();
}

function App() {
  return <AppModelProvider>
    <FormStateExpo />
  </AppModelProvider>;
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
