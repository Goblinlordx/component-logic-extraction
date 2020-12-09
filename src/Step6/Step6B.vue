<template>
  <div>
    <pre class="data">{{ model.visible.data }}</pre>
  </div>
</template>

<script>
import Exmaple6B from "./Example6B";

export default {
  name: "Step6",
  props: {
    value: {},
  },
  computed: {
    model() {
      return new Exmaple6B(this.value);
    },
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
