import * as React from 'react';
import * as uuid from 'uuid';
// import { render } from 'react-dom';
import { Header } from '@skeleton-xn/header';
import { StateFull } from '@skeleton-xn/state-full';
import { StateMobx } from '@skeleton-xn/state-mobx';
import { StateStyled } from '@skeleton-xn/state-styled';
import { StateMaterialUI } from '@skeleton-xn/state-material-ui';
import { AppModelProvider, LifeCycleAppModel, AppModelContext } from '@skeleton-xn/app-model-context';
import { AppModel } from '../dist/models/src/app-model';
import { startVueState } from '@skeleton-xn/vue';

import { Vue } from 'vue-property-decorator';

interface MountVueAppProps {
  readonly appModel: AppModel;
}
class MountVueApp extends React.Component<MountVueAppProps> {
  private readonly appId: string = `S${uuid.v4()}`;
  private vueApp: Vue;

  public componentDidMount() {
    console.log('MountVueApp', this.appId, this.props.appModel);
    this.vueApp = startVueState(this.props.appModel, `#${this.appId}`);
  }

  public componentWillUnmount() {
    this.vueApp.$destroy();
  }

  public render() {
    return <div id={this.appId}></div>;
  }
}

function StateVueApp(): JSX.Element {
  return <AppModelContext.Consumer>{(appModel: AppModel) => {
    // debugger;
    return <MountVueApp appModel={appModel} />;
  }}</AppModelContext.Consumer>;
}

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
        <Header level={2} title="StateVueApp">
          <StateVueApp />
        </Header>
      </Header>
    </AppModelProvider>
  );
}
