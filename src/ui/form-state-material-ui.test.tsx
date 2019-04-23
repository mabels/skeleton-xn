import * as React from 'react';
import { reaction } from 'mobx';
import { mount } from 'enzyme';

import { FormStateMaterialUI } from './form-state-material-ui';
import {
  observableAppModel,
  AppModelProvider,
  AppModelProps
} from './app-model-context';
import { expectInput } from './expect-input';
import { expectTicker } from './expect-ticker';
import { TextField } from '@material-ui/core';
import {
  ListItemTextWhatToSay,
  ListItemTextTicker
} from './material-ui/app-status';

function TestApp(props: AppModelProps): JSX.Element {
  return (
    <AppModelProvider tickFreq={props.tickFreq}>
      <FormStateMaterialUI />
    </AppModelProvider>
  );
}

describe('material-ui', () => {
  test('lifeCycle', done => {
    reaction(
      () => observableAppModel.get(),
      appModel => {
        if (!appModel) {
          return;
        }
        reaction(
          () => appModel.ticker.value,
          value => {
            try {
              expect(value).toBeGreaterThanOrEqual(1);
              done();
            } catch (e) {
              done(e);
            }
          }
        );
      }
    );
    const toTest = mount(<TestApp tickFreq={50} />);
  });

  test('input', async () => {
    const base = mount(<TestApp tickFreq={50} />);
    const input = base.find(TextField).find('input');
    const text = base.find(ListItemTextWhatToSay);
    await expectInput(input, text);
  });

  test('ticker', async () => {
    const base = mount(<TestApp tickFreq={50} />);
    await expectTicker(base.find(ListItemTextTicker).find('span'));
  });
});