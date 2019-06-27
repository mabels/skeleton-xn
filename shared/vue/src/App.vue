<template>
  <div id="app">
    <VueState msg="VueState" v-bind:appState="state.get()"/>
    <VueState msg="VueState" v-bind:appState="state.get()"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueState from './components/VueState.vue';
import { AppModel } from '@skeleton-xn/models';
import { reaction, IObservableValue } from 'mobx';

Vue.config.productionTip = false;

@Component({
  components: {
    VueState,
  },
})
export default class App extends Vue {
  public state: IObservableValue<AppModel> = (window as any).observableAppModel;
      // new AppModelImpl();
  public created() {
    reaction(() => this.state.get(), (state) => {
      console.log('AppStarted', state.objectId);
      state.start();
      reaction(() => state.whatToSay.get(), v => {
        console.log('xxx', v)
      });
    }, { fireImmediately: true });

  }
  public destroy() {
    console.log('AppDestroy');
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
