// Import vue component
import { Vue } from 'vue-property-decorator';
import component from './App.vue';
// const component = require('App.vue');

// Declare install function executed by Vue.use()
export function startVueState(selector: string) {
  Vue.component('vue-state', component);
  (new component()).$mount(selector);
}
// export default startVueState;
