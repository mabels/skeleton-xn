import * as React from 'react';
import { AppModel, AppModelImpl } from '../model/app-model';

const appModel = new AppModelImpl();

export const AppModelContext: React.Context<React.PropsWithChildren<AppModel>> = React.createContext(appModel);

export function AppModelProvider(props: React.PropsWithChildren<{}>): JSX.Element {
  return <AppModelContext.Provider value={appModel}>{props.children}</AppModelContext.Provider>;
}
