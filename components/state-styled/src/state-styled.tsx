import { StateMobx } from '@skeleton-xn/state-mobx';

import styled from '@emotion/styled';

export const StateStyled: React.FunctionComponent = styled(StateMobx)`
  background: red;
  ul {
    background: blue;
  }
`;
