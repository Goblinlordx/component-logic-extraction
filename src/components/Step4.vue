<template>
  <div>
    <h1>Step 4</h1>
    <h3>Extension</h3>
    <div class="data">
      <pre>{{ JSON.stringify(model.visible.data, null, 2) }}</pre>
      <div>Can Access Something: {{ ACCESS("something") }}</div>
      <template v-if="model.fieldVisible('a')">
        <label for="a">a: </label>
        <input id="a" name="a" :value="model.data.a" @input="input('a', $event)" />
      </template>
      <template v-if="model.fieldVisible('b')">
        <label for="b">b: </label>
        <input id="b" name="b" :value="model.data.b" @input="input('b', $event)" />
      </template>
      <template v-if="model.fieldVisible('c')">
        <label for="c">c: </label>
        <input id="c" name="c" :value="model.data.c" @input="input('c', $event)" />
      </template>
    </div>
  </div>
</template>

<script>
import Exmaple4 from "../models/Example4";

export default {
  name: "Step4",
  data() {
    return {
      model: new Exmaple4(),
    };
  },
  methods: {
    ACCESS() {
      return true;
    },
    input(k, e) {
      this.model.update({ [k]: e?.target?.value });
    },
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
