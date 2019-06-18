import * as React from 'react';
import { create } from 'react-test-renderer';

import { AppModelContext, AppModelProvider } from './app-model-context';
import { LifeCycleAppModel } from './life-cycle-app-model';

test('LifeCycleAppModel', () => {
  const fnStart = jest.fn();
  const fnStop = jest.fn();
  const m = create(<>
    <AppModelProvider>
      <AppModelContext.Consumer>{(app) => {
        app.start = fnStart;
        app.stop = fnStop;
        return <></>;
      }}</AppModelContext.Consumer>
    </AppModelProvider>
    <AppModelProvider>
      <LifeCycleAppModel />
      <LifeCycleAppModel />
    </AppModelProvider>
    </>
    );
  expect(fnStart).toBeCalledTimes(2);
  expect(fnStop).toBeCalledTimes(0);
  m.unmount();
  expect(fnStart).toBeCalledTimes(2);
  expect(fnStop).toBeCalledTimes(2);
});

