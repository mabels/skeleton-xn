import * as React from 'react';
import { AppModelContext, getAppModel } from './app-model-context';
import { AppModel } from '@skeleton-xn/models';

export interface LifeCycleAppModelProps {
  readonly app: AppModel;
}

class LifeCycleAppModelIntern extends React.Component<LifeCycleAppModelProps> {

  public componentDidMount() {
    this.props.app.start();
  }

  public componentWillUnmount() {
    this.props.app.stop();
  }

  public render() {
    return <></>;
  }
}

export function LifeCycleAppModel(): JSX.Element {
  return <AppModelContext.Consumer>{
      (app: AppModel) => {
        if (!app) {
          console.log('OOOOOOO', app);
          app = getAppModel(); // enzym macht komische dinge
        }
        console.log('ZZZZZZZZZZ', app);
        return <LifeCycleAppModelIntern app={app} />;
      }
    }
  </AppModelContext.Consumer>;
}
