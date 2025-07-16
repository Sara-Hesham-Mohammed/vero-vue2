<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: {
    testCount: function () {
      return this.$store.state.count;
    },
  },
  methods: {
    testVuex() {
      this.$store.dispatch('increment');
      console.log(this.testCount);
    },
  },
};
</script>
<template>
  <div>
    <h1>Welcome to the VERO app</h1>
    <p>{{ this.testCount }}</p>
    <button type="button" @click="testVuex">Increment</button>
  </div>
</template>

<style scoped></style>
