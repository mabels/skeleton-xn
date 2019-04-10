import { IObservableValue } from 'mobx';
import { Card, FormControl, TextField } from '@material-ui/core';
import React = require('react');
import { observer } from 'mobx-react';
import { AppModelProp } from '../app-model-prop';

export interface InputWhatToSayProps extends AppModelProp {
}

export const InputObserableString = observer((props: {
  value: IObservableValue<string>
}): JSX.Element => {
  return <Card>
    <FormControl>
      <TextField
        label="What to say"
        value={props.value.get()}
        onChange={(e) => props.value.set(e.target.value)}
        margin="normal"
        variant="outlined"
      />
    </FormControl>
  </Card>;
});

export const InputWhatToSay = observer((props: InputWhatToSayProps): JSX.Element => {
  return <InputObserableString value={props.app.whatToSay} />;
});
