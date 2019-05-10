import * as React from 'react';
import { AppModelContext } from './app-model-context';
import { AppModel } from '../model/app-model';

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
      (app: AppModel) =>
        <LifeCycleAppModelIntern app={app} />
    }
  </AppModelContext.Consumer>;
}
