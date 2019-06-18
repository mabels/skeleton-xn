import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { create } from 'react-test-renderer';
import { matchers } from 'jest-emotion';

import { StateStyled } from './state-styled';
import { AppModelProvider, getAppModel } from '@skeleton-xn/app-model-context/src/app-model-context';
import { AppModelContext } from '@skeleton-xn/app-model-context';

expect.extend(matchers);

describe('form-state-style-component', () => {
  test('css', () => {
    const toTest = create(<>
        {/* <AppModelProvider><StateStyled /></AppModelProvider> */}
        <AppModelProvider>
            <AppModelContext.Consumer>{(app) => {
              console.log('XXXXX', app, getAppModel());
              return <></>;
            }}</AppModelContext.Consumer>
        </AppModelProvider>
      </>);
    console.log(toTest);
    // expect(toTest.find('li')).toHaveStyleRule('background', 'red');
    // expect(toTest).toHaveStyleRule('background', 'blue', { target: 'ul' });
  });
});
