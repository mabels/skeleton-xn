<template>
  <div class="VueState">
    <h1>{{ title }}</h1>
    <input type="text"
      :value="appState.whatToSay.get()"
      @input="onChangeWhatToSay"
    />
    <ul>
      <li>InputValue: {{appState.whatToSay.get()}}</li>
      <li>Ticker: {{appState.ticker.value}}</li>
    </ul>
  </div>
</template>
/*
*/

<script lang="ts">
import { action, computed } from 'mobx';
import { Observer } from 'mobx-vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppModel } from '@skeleton-xn/models';

@Observer
@Component
export default class VueState extends Vue {
  @Prop() private title!: string;
  @Prop() private appState!: AppModel;
  public created() {
    console.log('State', this);
  }
  @action.bound
  public onChangeWhatToSay(e: any) {
    this.appState.whatToSay.set(e.target.value);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
