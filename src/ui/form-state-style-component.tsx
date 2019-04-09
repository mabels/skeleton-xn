import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { FormStateMobx } from './form-state-mobx';

import styled from '@emotion/styled';

export const FormStateStyleComponent = styled(FormStateMobx)`
  background: red;
  ul {
    background: blue;
  }
`;
