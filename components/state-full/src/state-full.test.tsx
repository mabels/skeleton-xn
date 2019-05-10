import * as React from 'react';
import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { StateFull } from './state-full';

describe('StateFull', () => {
  test('simple', () => {
    const toTest = create(<StateFull />).toJSON() as any as ReactTestRendererJSON[];
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

});
