import * as React from 'react';
import { create } from 'react-test-renderer';

import { AppModelProvider, AppModelContext } from './app-model-context';

test('AppModel', () => {
  const fn = jest.fn();
  const m = create(<>
    <AppModelProvider>
      <AppModelContext.Consumer>{(app) => { fn(app); return <></>; }}</AppModelContext.Consumer>
    </AppModelProvider>
    <AppModelProvider>
      <AppModelContext.Consumer>{(app) => { fn(app); return <></>; }}</AppModelContext.Consumer>
    </AppModelProvider>
    </>
    );
  expect(fn.mock.calls.length).toBe(2);
  expect(fn.mock.calls[0][0].objectId).toBeTruthy();
  expect(fn.mock.calls[0][0].ticker).toBeTruthy();
  expect(fn.mock.calls[0][0].whatToSay).toBeTruthy();
  expect(fn.mock.calls[0]).toEqual(fn.mock.calls[1]);
});
