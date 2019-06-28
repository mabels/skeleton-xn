import * as React from 'react';
import { create, ReactTestInstance } from 'react-test-renderer';
import { AppBase } from './app-base';
import { AppModelProvider } from '@skeleton-xn/app-model-context';
import { AppModelImpl } from '@skeleton-xn/models';
import { Header } from '@skeleton-xn/header';

describe('App', () => {
  const appModel = new AppModelImpl();

  test('top level app model provider', () => {
    const toTest = create(<AppBase appModel={appModel} />);
    expect((toTest.root.children[0] as ReactTestInstance).type).toBe(AppModelProvider);
  });

  test('nested header function-app', () => {
    const toTest = create(<AppBase appModel={appModel} />);
    const tail = toTest.root.children[0] as ReactTestInstance;
    expect(toTest.root.findByType(Header).findAllByType('h1').length).toBe(1);
    toTest.root.findByType(Header).children.slice(1).forEach((div: ReactTestInstance) => {
      expect(div.type).toBe('div');
      expect(div.findAllByType('h2').length).toBe(1);
    });
  });
});
