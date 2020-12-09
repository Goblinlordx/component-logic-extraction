<template>
  <div>
    <pre class="data">{{ JSON.stringify(value) }}</pre>
  </div>
</template>

<script>
export default {
  name: "Step7B",
  props: {
    value: {
      type: Object,
      default() {
        return {};
      }
    },
  }
};
</script>

<style scoped>
.data {
  text-align: left;
}
</style>
