<template>
  <div>
    <h1>Step 6</h1>
    <h3>Dividing responsability (something is not quite right?)</h3>
    <Step6A :value="model.data" @input="update" />
    <Step6B :value="model.data" @input="update" />
  </div>
</template>

<script>
import Step6A from "./Step6A.vue";
import Step6B from "./Step6B.vue";
import Exmaple6 from "../models/Example6";

export default {
  name: "Step6",
  data() {
    return {
      model: new Exmaple6(),
    };
  },
  methods: {
    update(v) {
      this.model.update(v);
    }
  },
  components: {
    Step6A,
    Step6B,
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
