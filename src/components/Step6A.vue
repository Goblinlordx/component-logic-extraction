<template>
  <div class="data">
    <pre>{{ JSON.stringify(model.visible.data, null, 2) }}</pre>
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
        type="number"
        :value="model.data.c"
        @input="input('c', $event)"
      />
    </template>
  </div>
</template>

<script>
import Exmaple6A from "../models/Example6A";

export default {
  name: "Step6",
  props: {
    value: {},
  },
  computed: {
    model() {
      return new Exmaple6A(this.value);
    },
  },
  methods: {
    input(k, e) {
      this.model.update({ [k]: e?.target?.value });
      this.$emit('input', this.model.data);
    },
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
