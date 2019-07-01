// Import vue component
import { Vue } from "vue-property-decorator";
import App from "./App.vue";
import { AppModel } from "@skeleton-xn/models";

export function startVueState(appModel: AppModel, selector: string): Vue {
  const my = { appModel };
  Object.freeze(my);
  Vue.component('vue-app', App);
  const component = new App({
    data() {
      return {
        wrappedAppModel: my
      };
    },
  });
  component.$mount(selector);
  return component;
}
// export default startVueState;
