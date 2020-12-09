<template>
  <div>
    <h1>Step 7</h1>
    <h3>Different approach</h3>
    <Step7A :value="visibleData" @input="update" />
    <Step7B :value="visibleData" @input="update" />
  </div>
</template>

<script>
import Step7A from "./Step7A.vue";
import Step7B from "./Step7B.vue";
import Example7 from "./Example7";

export default {
  name: "Step6",
  data() {
    return {
      model: Example7().init(),
    };
  },
  computed: {
    internalModel() {
      return { ...this.model };
    },
    visibleData() {
      return Example7().visibleData(this.internalModel);
    },
  },
  methods: {
    update(v) {
      this.model = Example7().update(this.internalModel, v);
    },
  },
  components: {
    Step7A,
    Step7B,
  },
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
