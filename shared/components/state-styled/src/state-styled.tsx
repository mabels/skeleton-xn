/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { observer } from 'mobx-react';

import { AppModel } from '@skeleton-xn/models';
import { AppModelContext } from '@skeleton-xn/app-model-context';
import { action } from 'mobx';

const InputWhatToSay = observer(({app}: { app: AppModel }) => {
  return <input value={app.whatToSay.get()}
    onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
      app.whatToSay.set(e.target.value))} />;
});

const LiTick = observer(({app}: { app: AppModel }) => {
  return <li key={4612} css={{
    background: app.ticker.value % 2 ? 'red' : 'blue'
  }}>{app.ticker.value}</li>;
});

const LiWhatToSay = observer(({app}: { app: AppModel }): JSX.Element => {
  return <li css={{
    background: app.whatToSay.get().length % 2 ? 'green' : 'orange'
  }} key={4711}>{app.whatToSay.get()}</li>;
});

export function StateStyled(props: {}): JSX.Element {
  return <AppModelContext.Consumer>{(app: AppModel) => {
      // console.log('WWWWWW', app);
      return <div>
        <form>
          <fieldset>
            <label>What to say</label>
            <InputWhatToSay app={app} />
          </fieldset>
        </form>
        <ul>
          <LiTick app={app} />
          <LiWhatToSay app={app} />
        </ul>
      </div>;
    }}
    </AppModelContext.Consumer>;

}
