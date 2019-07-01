import { render } from 'react-dom';
import { AppBase } from './app-base';
import { startVueState } from '@skeleton-xn/vue';
import { AppModelImpl } from '@skeleton-xn/models';

// import { startAjsState } from '@skeleton-xn/ajs';

const appModel = new AppModelImpl();

render(AppBase({ appModel }), document.getElementById('root'));

// startAjsState('#ajs-app');
