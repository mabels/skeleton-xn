import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { expectInput, expectTicker } from '@skeleton-xn/test-utils';
import { StateMobx, InputString, LiWhatToSay, LiTick } from './state-mobx';

describe('StateMobx', () => {
  test('simple', () => {
    const base = create(<StateMobx />).toJSON() as any;
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
    const base = mount(<StateMobx />);
    const input = base.find(InputString);
    const text = base.find(LiWhatToSay);
    await expectInput(input, text);
  });

  test('ticker', async () => {
    const base = mount(<StateMobx tickFreq={50} />);
    await expectTicker(base.find(LiTick));
  });

});
