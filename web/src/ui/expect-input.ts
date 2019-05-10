import { ReactWrapper } from 'enzyme';

export async function expectInput(
  input: ReactWrapper<unknown, unknown, React.Component<unknown, unknown, any>>,
  text: ReactWrapper<unknown, unknown, React.Component<unknown, unknown, any>>): Promise<void> {
  return new Promise((rs, rj) => {
    expect(input.getDOMNode().getAttribute('value')).toBe('');
    input.getDOMNode().setAttribute('value', 'Hello');
    input.simulate('change');
    setTimeout(() => {
      try {
        expect(text.getDOMNode().textContent).toBe('Hello');
        // expect(name.)
        rs();
      } catch (e) {
        rj(e);
      }
    }, 60);
  });
}
