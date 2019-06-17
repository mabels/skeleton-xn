import * as React from 'react';
// import { List, ListItem, Text, Input } from 'native-base';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { observer } from 'mobx-react';
import { AppModel } from '@skeleton-xn/models';
import { Text, ListView } from 'react-native';

const InternalAppStatus = observer(({model}: {model: AppModel}) =>
    <>
      <Text>Tick:{model.ticker.value}</Text>
      <Text>What to Say:{model.whatToSay.get()}</Text>
    </>
);

export function AppStatus() {
  return <AppModelContext.Consumer>{(model) =>
    <InternalAppStatus model={model} />
  }</AppModelContext.Consumer>;
}
