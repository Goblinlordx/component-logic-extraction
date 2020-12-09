<template>
  <div class="data">
    <pre>{{ JSON.stringify(value, null, 2) }}</pre>
    <template v-if="visibleFields.has('a')">
      <label for="a">a: </label>
      <input id="a" name="a" :value="value.a" @input="input('a', $event)" />
    </template>
    <template v-if="visibleFields.has('b')">
      <label for="b">b: </label>
      <input id="b" name="b" :value="value.b" @input="input('b', $event)" />
    </template>
    <template v-if="visibleFields.has('c')">
      <label for="c">c: </label>
      <input
        id="c"
        name="c"
        type="number"
        :value="value.c"
        @input="inputNumeric('c', $event)"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "Step7A",
  props: {
    value: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  computed: {
    visibleFields() {
      return new Set(Object.keys(this.value));
    },
  },
  methods: {
    input(k, e) {
      this.$emit("input", { [k]: e?.target?.value });
    },
    inputNumeric(k, e) {
      const int = parseInt(e?.target?.value);
      const v = Number.isNaN(int) ? null : int;
      this.$emit("input", { [k]: v });
    },
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
