<template>
  <div>
    <h1>Step 2</h1>
    <h3>Class based</h3>
    <div class="data">
      <pre>{{ JSON.stringify(model.data, null, 2) }}</pre>
      <div>Can Access Something: {{ ACCESS("something") }}</div>
      <label for="a">a: </label>
      <input id="a" name="a" :value="model.data.a" @input="input('a', $event)" />
    </div>
  </div>
</template>

<script>
import Exmaple2 from "../models/Example2";

export default {
  name: "Step2",
  data() {
    return {
      model: new Exmaple2(),
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
