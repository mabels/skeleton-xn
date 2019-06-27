import { render } from 'react-dom';
import { AppBase } from './app-base';
import { startVueState } from '@skeleton-xn/vue';

render(AppBase(), document.getElementById('root'));

startVueState('#vue-app');
