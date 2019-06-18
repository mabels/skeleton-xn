import { IObservableValue } from 'mobx';
import { Card, FormControl, TextField } from '@material-ui/core';
import * as React from 'react';
import { observer } from 'mobx-react';
import { AppModel } from '@skeleton-xn/models';
import { AppModelContext } from '@skeleton-xn/app-model-context';

export interface InputWhatToSayProps {}

export const InputObservableString = observer(
  (props: { value: IObservableValue<string> }): JSX.Element => {
    return (
      <Card>
        <FormControl>
          <TextField
            label="What to say"
            value={props.value.get()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.value.set(e.currentTarget.value);
            }}
            margin="normal"
            variant="outlined"
          />
        </FormControl>
      </Card>
    );
  }
);

export function InputWhatToSay(props: InputWhatToSayProps): JSX.Element {
  return (
    <AppModelContext.Consumer>
      {(app: AppModel) => <InputObservableString value={app.whatToSay} />}
    </AppModelContext.Consumer>
  );
}
