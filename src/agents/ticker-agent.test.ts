import { reaction } from 'mobx';

import { TickerAgent } from './ticker-agent';

describe('ticker', () => {
  test('uuid', () => {
    expect((new TickerAgent()).objectId).toBeTruthy();
  });

  test('start-stop', (done) => {
    const ta = new TickerAgent({ tickFreq: 10 });
    const fn = jest.fn();
    reaction(() => ta.value, fn);
    setTimeout(() => {
      try {
        expect(fn).toBeCalledTimes(0);
        // nesting support
        ta.start();
        ta.start();
        ta.start();
      } catch (e) {
        done(e);
      }
      setTimeout(() => {
        try {
          expect(fn.mock.calls.length).toBeGreaterThanOrEqual(2);
          // nesting support
          ta.stop();
          ta.stop();
          ta.stop();
        } catch (e) {
          done(e);
        }
        setTimeout(() => {
          try {
            expect(fn).toBeCalledTimes(2);
            done();
          } catch (e) {
            done(e);
          }
        }, 35);
      }, 35);
    }, 15);
  });

});
