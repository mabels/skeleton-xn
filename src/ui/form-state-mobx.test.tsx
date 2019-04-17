import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { expectInput } from './expect-input';
import { FormStateMobx, InputString, LiWhatToSay, LiTick } from './form-state-mobx';
import { expectTicker } from './expect-ticker';

describe('FormStateMobx', () => {
  test('simple', () => {
    const base = create(<FormStateMobx />).toJSON();
    expect(base.type).toBe('div');
    const toTest = base.children;
    expect(toTest[0].type).toBe('form');
    expect(toTest[0].children[0].type).toBe('fieldset');
    expect(toTest[0].children[0].children[0].type).toBe('label');
    expect(toTest[0].children[0].children[1].type).toBe('input');
    expect(toTest[0].children[0].children[1].props.value).toBe('');
    expect(toTest[1].type).toBe('ul');
    expect(toTest[1].children[0].type).toBe('li');
    expect(toTest[1].children[0].children[0]).toBe('0');
    expect(toTest[1].children[1].type).toBe('li');
    expect(toTest[1].children[1].children[0]).toBe('');
    // expect(toTest.root.children[1].children[0]).toBe('li');
    // expect(toTest.root.children[1].children[1]).toBe('li');
  });

  test('input', async () => {
    const base = mount(<FormStateMobx />);
    const input = base.find(InputString);
    const text = base.find(LiWhatToSay);
    await expectInput(input, text);
  });

  test('ticker', async () => {
    const base = mount(<FormStateMobx tickFreq={50} />);
    await expectTicker(base.find(LiTick));
  });

});
