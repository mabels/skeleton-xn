import * as React from 'react';
// import { render } from 'react-dom';
import { Header } from '@skeleton-xn/header';
import { StateFull } from '@skeleton-xn/state-full';
import { StateMobx } from '@skeleton-xn/state-mobx';
import { StateStyled } from '@skeleton-xn/state-styled';
import { StateMaterialUI } from '@skeleton-xn/state-material-ui';
import { AppModelProvider, LifeCycleAppModel } from '@skeleton-xn/app-model-context';
import { AppModel } from '../dist/models/src/app-model';

export function AppBase({appModel}: {appModel: AppModel}) {
  return (
    <AppModelProvider appModel={appModel}>
      <LifeCycleAppModel />
      <Header level={1} title="Hello">
        <Header level={2} title="StateFull">
          <StateFull />
        </Header>
        <Header level={2} title="StateMobx">
          <StateMobx />
        </Header>
        <Header level={2} title="StateStyled">
          <StateStyled />
        </Header>
        <Header level={2} title="StateMaterialUI">
          <StateMaterialUI />
        </Header>
      </Header>
    </AppModelProvider>
  );
}
