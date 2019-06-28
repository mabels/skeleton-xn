import * as React from 'react';
import { create } from 'react-test-renderer';

import { AppModelContext, AppModelProvider } from './app-model-context';
import { LifeCycleAppModel } from './life-cycle-app-model';
import { AppModelImpl, AppModel } from '@skeleton-xn/models';

test('LifeCycleAppModel', () => {
  const fnStart = jest.fn();
  const fnStop = jest.fn();
  const appModel = new AppModelImpl();
  const m = create(<>
    <AppModelProvider appModel={appModel}>
      <AppModelContext.Consumer>{(app: AppModel) => {
        app.start = fnStart;
        app.stop = fnStop;
        return <></>;
      }}</AppModelContext.Consumer>
    </AppModelProvider>
    <AppModelProvider appModel={appModel}>
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
