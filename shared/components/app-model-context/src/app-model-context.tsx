import * as React from 'react';
import { observable, IObservableValue } from 'mobx';
import { AppModel, AppModelImpl } from '@skeleton-xn/models';
import { TickerAgentInit } from '@skeleton-xn/agents';

export type ObservableAppModel = IObservableValue<AppModel>;
export const observableAppModel: ObservableAppModel = observable.box();

export const AppModelContext: React.Context<React.PropsWithChildren<AppModel>> =
  React.createContext(undefined as unknown as AppModel);

export interface AppModelProps extends TickerAgentInit {
}

export function getAppModel(): AppModel {
  return observableAppModel.get();
}

export function AppModelProvider(props: React.PropsWithChildren<AppModelProps>): JSX.Element {
  if (!observableAppModel.get()) {
    // console.log('AppModelProvider:Create', props);
    observableAppModel.set(new AppModelImpl(props));
  }
  // console.log('AppModelProvider:Get:', observableAppModel.get(), props.children);
  return <AppModelContext.Provider value={observableAppModel.get()}>{props.children}</AppModelContext.Provider>;
}
