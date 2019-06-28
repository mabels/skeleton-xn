import * as React from 'react';
import { observable, IObservableValue, reaction, IReactionDisposer } from 'mobx';
import { observer } from 'mobx-react';
import { AppModel, AppModelImpl } from '@skeleton-xn/models';
import { TickerAgentInit } from '@skeleton-xn/agents';
import { jsxAttribute } from '@babel/types';

export type ObservableAppModel = IObservableValue<AppModel>;
// (globalThis as any).observableAppModel = observable.box();
// const observableAppModel = (globalThis as any).observableAppModel;
const observableAppModel = observable.box();

/*
export const AppModelContext: React.Context<React.PropsWithChildren<AppModel>> =
  React.createContext(undefined as unknown as AppModel);
*/

type AppProviderProps = React.PropsWithChildren<{ readonly value?: AppModel }>;

class AppProvider extends React.Component<AppProviderProps> {
  public render() {
    return this.props.children;
  }
}

type AppModelFn = (app: AppModel) => JSX.Element;

const appConsumer = observer((props: React.PropsWithChildren<{}>) => {
  const model = observableAppModel.get();
  // console.log('appComsumer:', model);
  if (model) {
    return (props.children as AppModelFn)(model);
  } else {
    return null;
  }
});

export const AppModelContext = {
  Provider: (props: AppProviderProps) => (
    <AppProvider value={props.value}>{props.children}</AppProvider>
  ),
  Consumer: appConsumer
};

export interface AppModelProps extends TickerAgentInit {
  readonly appModel: AppModel;
}

export function getAppModel(props: AppModelProps): AppModel {
  if (!observableAppModel.get()) {
    // console.log('AppModelProvider:Create:', props);
    observableAppModel.set(props.appModel);
  }
  return observableAppModel.get();
}

export function AppModelProvider(props: React.PropsWithChildren<AppModelProps>): JSX.Element {
  // console.log('AppModelProvider:', props);
  return (
    <AppModelContext.Provider value={getAppModel(props)}>{props.children}</AppModelContext.Provider>
  );
}
