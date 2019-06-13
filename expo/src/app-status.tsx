import * as React from 'react';
import { List, ListItem, Text, Input } from 'native-base';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { observer } from 'mobx-react';
import { AppModel } from '@skeleton-xn/models';

const InternalAppStatus = observer(({model}: {model: AppModel}) =>
    <List>
      <ListItem><Text>Tick:{model.ticker.value}</Text></ListItem>
      <ListItem><Text>What to Say:{model.whatToSay.get()}</Text></ListItem>
    </List>
);

export function AppStatus() {
  return <AppModelContext.Consumer>{(model) =>
    <InternalAppStatus model={model} />
  }</AppModelContext.Consumer>;
}
