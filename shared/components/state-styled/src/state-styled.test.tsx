import * as React from 'react';
import { mount } from 'enzyme';
// import { create } from 'react-test-renderer';
import { matchers } from 'jest-emotion';

import { StateStyled } from './state-styled';
import { AppModelProvider, getAppModel, AppModelContext } from '@skeleton-xn/app-model-context';
import { AppModel } from '@skeleton-xn/models';
import { LifeCycleAppModel } from '@skeleton-xn/app-model-context/src/life-cycle-app-model';

expect.extend(matchers);

describe('form-state-style-component', () => {
  test('css', async () => {
    const toTest = await mount(
      <AppModelProvider tickFreq={10}>
        <LifeCycleAppModel />
        <StateStyled />
      </AppModelProvider>,
    );
    expect(toTest.find('li').length).toBe(2);
    expect(toTest.find('li').get(0)).toHaveStyleRule('background', 'blue');
    expect(toTest.find('li').get(1)).toHaveStyleRule('background', 'orange');
    toTest.find('input').simulate('change', { target: { value: 'odd' } });
    return new Promise((rs, rj) => {
      setTimeout(() => {
        try {
          expect(toTest.find('li').get(0)).toHaveStyleRule('background', 'okk');
          expect(toTest.find('li').get(1)).toHaveStyleRule('background', 'green');
          rs();
        } catch (e) {
          rj(e);
        }
      }, 15);
    });
    // .toHaveStyleRule('background', 'red');
    // expect(toTest).toHaveStyleRule('background', 'blue', { target: 'ul' });
  });
});
