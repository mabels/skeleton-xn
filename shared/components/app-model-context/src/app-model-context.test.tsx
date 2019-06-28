import * as React from 'react';
import { create } from 'react-test-renderer';

import { AppModelProvider, AppModelContext } from './app-model-context';
import { AppModelImpl, AppModel } from '@skeleton-xn/models';

test('AppModel', () => {
  const fn = jest.fn();
  const appModel = new AppModelImpl();
  const m = create(<>
    <AppModelProvider appModel={appModel}>
      <AppModelContext.Consumer>{(app: AppModel) => { fn(app); return <></>; }}</AppModelContext.Consumer>
    </AppModelProvider>
    <AppModelProvider appModel={appModel}>
      <AppModelContext.Consumer>{(app: AppModel) => { fn(app); return <></>; }}</AppModelContext.Consumer>
    </AppModelProvider>
    </>
    );
  expect(fn.mock.calls.length).toBe(2);
  expect(fn.mock.calls[0][0].objectId).toBeTruthy();
  expect(fn.mock.calls[0][0].ticker).toBeTruthy();
  expect(fn.mock.calls[0][0].whatToSay).toBeTruthy();
  expect(fn.mock.calls[0]).toEqual(fn.mock.calls[1]);
});
