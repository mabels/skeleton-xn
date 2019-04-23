import { create, ReactTestRendererJSON } from 'react-test-renderer';
import { AppBase } from './app-base';
import { AppModelProvider } from './app-model-context';

describe('App', () => {
  test('top level app model provider', () => {
    const toTest = create(AppBase());
    expect(toTest.root.type).toBe(AppModelProvider);
  });

  test('nested header function-app', () => {
    const toTest = create(AppBase()).toJSON() as any as ReactTestRendererJSON[];
    expect(toTest[0].type).toBe('h1');
    const tail = toTest.slice(1);
    tail.forEach(div => {
      expect(div.type).toBe('div');
      expect(div.children[0].type).toBe('h2');
    });
  });

  test('test h2 header', () => {
    const toTest = create(AppBase()).toJSON() as any as ReactTestRendererJSON[];
    expect(toTest[0].type).toBe('h1');
    const tail = toTest.slice(1);
    tail.forEach(div => {
      expect(div.type).toBe('div');
      expect(div.children[0].type).toBe('h2');
    });
  });

});
