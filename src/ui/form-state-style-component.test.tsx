import * as React from 'react';
import { create } from 'react-test-renderer';
import { matchers } from 'jest-emotion';

import { FormStateStyleComponent } from './form-state-style-component';

expect.extend(matchers);

describe('form-state-style-component', () => {
  test('css', () => {
    const toTest = create(<FormStateStyleComponent/>).toJSON();
    expect(toTest).toHaveStyleRule('background', 'red');
    expect(toTest).toHaveStyleRule('background', 'blue', { target: 'ul' });
  });
});
