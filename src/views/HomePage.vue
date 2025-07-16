<script>
export default {
  name: "HomePage",
  data() {
    return {
      testCount: 0,
    };
  },
  methods: {
    testVuex() {
      this.$store.commit("increment");
      this.testCount = this.$store.state.count;
      console.log(this.testCount);
    },
  },
};
</script>
<template>
  <div>
    <h1>Welcome to the VERO app</h1>
    <p>{{ $store.state.count }}</p>
    <!-- 2 -->
    <p>{{ this.$store.state.count }}</p>
    <!-- 3 -->
    <p>{{ this.testCount }}</p>
    <button type="button" @click="testVuex">Increment</button>
  </div>
</template>

<style scoped></style>
