<template>
  <div class="hello">
    <h1>Step 1</h1>
    <div class="data">
      <pre>{{ JSON.stringify(model, null, 2) }}</pre>
      <div>Can Access Something: {{ ACCESS("something") }}</div>
      <label for="a">a: </label><input id="a" name="a" v-model="model.a" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Step1",
  data() {
    return {
      model: {
        a: "asdf",
        b: null,
        c: 3,
      },
    };
  },
  methods: {
    ACCESS() {
      return true;
    },
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
