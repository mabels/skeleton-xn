import { reaction } from 'mobx';

import { AppModelImpl } from './app-model';
import { TickerAgent } from '../agents/ticker-agent';

describe('AppModel', () => {
  test('objectId', () => {
    expect(new AppModelImpl().objectId).toBeTruthy();
  });

  test('ticker', () => {
    expect(new AppModelImpl().ticker).toBeInstanceOf(TickerAgent);
  });

  test('whatToSay', (done) => {
    const am = new AppModelImpl();
    const fn = jest.fn();
    reaction(() => am.whatToSay.get(), fn);
    expect(am.whatToSay.get()).toBe('');
    am.whatToSay.set('hallo');
    setImmediate(() => {
      try {
        expect(fn).toBeCalledTimes(1);
        expect(am.whatToSay.get()).toBe('hallo');
        done();
      } catch (e) {
        done(e);
      }
    });
  });

});
