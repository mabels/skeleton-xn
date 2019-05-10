import * as React from 'react';
import { create } from 'react-test-renderer';
import { matchers } from 'jest-emotion';

import { StateStyled } from './state-styled';

expect.extend(matchers);

describe('form-state-style-component', () => {
  test('css', () => {
    const toTest = create(<StateStyled />).toJSON();
    expect(toTest).toHaveStyleRule('background', 'red');
    expect(toTest).toHaveStyleRule('background', 'blue', { target: 'ul' });
  });
});
