<template>
  <div id="app">
    <VueState msg="VueState" v-bind:appState="state"/>
    <VueState msg="VueState" v-bind:appState="state"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueState from './components/VueState.vue';
import { AppModelImpl } from '../../models/dist/app-model';

@Component({
  components: {
    VueState,
  },
})
export default class App extends Vue {
  public state = new AppModelImpl();
  public created() {
    console.log('AppStarted');
    this.state.start();
  }
  public destroy() {
    console.log('AppDestroy');
    this.state.stop();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
