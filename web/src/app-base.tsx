import * as React from 'react';
// import { render } from 'react-dom';
import { Header } from '@skeleton-xn/header';
import { StateFull } from '@skeleton-xn/state-full';
import { StateMobx } from '@skeleton-xn/state-mobx';
import { StateStyled } from '@skeleton-xn/state-styled';
import { StateMaterialUI } from '@skeleton-xn/state-material-ui';
import { AppModelProvider } from '@skeleton-xn/app-model-context';

export function AppBase() {
  return (
    <AppModelProvider>
      <Header level={1} title="Hello">
        <Header level={2} title="ReactState">
          <StateFull />
        </Header>
        <Header level={2} title="ReactState">
          <StateMobx />
        </Header>
        <Header level={2} title="Component">
          <StateStyled />
        </Header>
        <Header level={2} title="Component">
          <StateMaterialUI />
        </Header>
      </Header>
    </AppModelProvider>
  );
}
