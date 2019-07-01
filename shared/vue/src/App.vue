<template>
  <VueState msg="VueState" v-bind:appState="appModel"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueState from './components/VueState.vue';
import { AppModel } from '@skeleton-xn/models';
import { reaction, IObservableValue, observable } from 'mobx';

Vue.config.productionTip = false;

@Component({
  components: {
    VueState,
  },
})
export default class App extends Vue {
  private wrappedAppModel!: { appModel: AppModel };
  // public state: IObservableValue<AppModel> = observable.box(undefined); // (globalThis.window as any).observableAppModel;
      // new AppModelImpl();

  public get appModel() {
    return this.wrappedAppModel.appModel;
  }

  public created() {
    // console.log('AppStarted', this); //.appState.objectId);
    // this.appState.start();
    // reaction(() => this.appState.whatToSay.get(), v => {
    //     console.log('xxx', v)
    // }, { fireImmediately: true });

  }
  public destroy() {
    // console.log('AppDestroy');
    // this.state.stop();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
