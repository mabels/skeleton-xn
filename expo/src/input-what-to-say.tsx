import * as React from 'react';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { observer } from 'mobx-react';
import { AppModel } from '@skeleton-xn/models';
import { Text, TextInput } from 'react-native';

const InternalInputWhatToSay = observer(({model}: {model: AppModel}) =>
  <>
      <Text>Jojo:</Text>
      {/* <Textarea
        value={model.whatToSay.get()}
        onChangeText={e => model.whatToSay.set(e)}
        rowSpan={1}
        placeholder="Textarea" /> */}
      <TextInput
        style={{height: 20, width: 100, borderColor: 'black', borderWidth: 2}}
        value={model.whatToSay.get()}
        onChangeText={(e) => model.whatToSay.set(e)}
      />
    </>
);

export function InputWhatToSay() {
  return <AppModelContext.Consumer>
      {model => <InternalInputWhatToSay model={model} />}
  </AppModelContext.Consumer>;
}
