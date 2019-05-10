import * as React from 'react';
import { render } from 'react-dom';
import { FunctionApp } from './function-app';
import { FormStateFull } from './form-state-full';
import { FormStateMobx } from './form-state-mobx';
import { FormStateStyleComponent } from './form-state-style-component';
import { FormStateMaterialUI } from './form-state-material-ui';
import { AppModelProvider } from './app-model-context';

export function AppBase() {
  return (
    <AppModelProvider>
      <FunctionApp level={1} title="Hello">
        <FunctionApp level={2} title="ReactState">
          <FormStateFull />
        </FunctionApp>
        <FunctionApp level={2} title="ReactState">
          <FormStateMobx />
        </FunctionApp>
        <FunctionApp level={2} title="Component">
          <FormStateStyleComponent />
        </FunctionApp>
        <FunctionApp level={2} title="Component">
          <FormStateMaterialUI />
        </FunctionApp>
      </FunctionApp>
    </AppModelProvider>
  );
}
