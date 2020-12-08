<template>
  <div class="hello">
    <h1>Step 3</h1>
    <div class="data">
      <pre>{{ JSON.stringify(model.data, null, 2) }}</pre>
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
import Exmaple3 from "../models/Example3";

export default {
  name: "Step3",
  data() {
    return {
      model: new Exmaple3(),
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
