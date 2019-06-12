import { StateMobx, StateMobxProps } from '@skeleton-xn/state-mobx';

import styled from '@emotion/styled';

export const StateStyled: React.FunctionComponent = styled(StateMobx)<StateMobxProps>`
  background: red;
  ul {
    background: ${(props) => props.tickFreq % 2};
  }
`;
