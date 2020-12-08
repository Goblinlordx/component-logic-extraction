<template>
  <div class="hello">
    <h1>Step 5</h1>
    <div class="data">
      <pre>{{ JSON.stringify(model.visible.data, null, 2) }}</pre>
      <div>
        Can Access Something:
        <button @click="toggleAccess">{{ access.ACCESS("something") }}</button>
      </div>
      <template v-if="model.fieldVisible('a')">
        <label for="a">a: </label>
        <input
          id="a"
          name="a"
          :value="model.data.a"
          @input="input('a', $event)"
        />
      </template>
      <template v-if="model.fieldVisible('b')">
        <label for="b">b: </label>
        <input
          id="b"
          name="b"
          :value="model.data.b"
          @input="input('b', $event)"
        />
      </template>
      <template v-if="model.fieldVisible('c')">
        <label for="c">c: </label>
        <input
          id="c"
          name="c"
          :value="model.data.c"
          @input="input('c', $event)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Exmaple5 from "../models/Example5";
import Example5Access from "../models/Example5Access";

export default {
  name: "Step5",
  data() {
    const access = new Example5Access();
    return {
      access,
      model: new Exmaple5({}, { ACCESS: access.ACCESS.bind(access) }),
    };
  },
  methods: {
    toggleAccess() {
      this.access.toggle();
      this.model.update();
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
