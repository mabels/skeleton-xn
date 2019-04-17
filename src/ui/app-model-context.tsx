import * as React from 'react';
import { AppModel, AppModelImpl } from '../model/app-model';
import { TickerAgentInit } from '../agents/ticker-agent';

export let appModel: AppModel;

export const AppModelContext: React.Context<React.PropsWithChildren<AppModel>> = React.createContext(appModel);

export interface AppModelProps extends TickerAgentInit {
}

export function AppModelProvider(props: React.PropsWithChildren<AppModelProps>): JSX.Element {
  if (!appModel) {
    appModel = new AppModelImpl(props);
  }
  return <AppModelContext.Provider value={appModel}>{props.children}</AppModelContext.Provider>;
}
