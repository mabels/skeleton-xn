import * as React from 'react';
import { render } from 'react-dom';
import { FunctionApp } from './function-app';
import { FormStateFull } from './form-state-full';
import { FormStateMobx } from './form-state-mobx';
import { FormStateStyleComponent } from './form-state-style-component';

render(<>
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
  </FunctionApp>
</>, document.getElementById('root'));
