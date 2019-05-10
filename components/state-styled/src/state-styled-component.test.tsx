import * as React from 'react';
import { create } from 'react-test-renderer';
import { matchers } from 'jest-emotion';

import { StateStyledComponent } from './state-styled-component';

expect.extend(matchers);

describe('form-state-style-component', () => {
  test('css', () => {
    const toTest = create(<StateStyledComponent/>).toJSON();
    expect(toTest).toHaveStyleRule('background', 'red');
    expect(toTest).toHaveStyleRule('background', 'blue', { target: 'ul' });
  });
});
