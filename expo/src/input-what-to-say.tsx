import * as React from 'react';
import { Input, Content, Form, Textarea, Text, Container, ListItem, List } from 'native-base';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { observer } from 'mobx-react';
import { AppModel } from '@skeleton-xn/models';

const InternalInputWhatToSay = observer(({model}: {model: AppModel}) =>
    <List>
      <ListItem>
      <Text>Jojo:</Text>
      {/* <Textarea
        value={model.whatToSay.get()}
        onChangeText={e => model.whatToSay.set(e)}
        rowSpan={1}
        placeholder="Textarea" /> */}
      <Input
        value={model.whatToSay.get()}
        onChangeText={e => model.whatToSay.set(e)}
      />
      </ListItem>
    </List>
);

export function InputWhatToSay() {
  return <AppModelContext.Consumer>
      {model => <InternalInputWhatToSay model={model} />}
  </AppModelContext.Consumer>;
}
