import { ReactWrapper } from 'enzyme';

export async function expectTicker(
  ticked: ReactWrapper<unknown, unknown, React.Component<{}, {}, any>>
): Promise<void> {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      try {
        expect(ticked.getDOMNode().textContent).toBe('3');
        rs();
      } catch (e) {
        rj(e);
      }
    }, 175);
  });
}
