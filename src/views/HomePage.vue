<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  computed: {
    testCount: function () {
      return this.$store.state.a.count; //module a
    },
  },
  methods: {
    testVuex() {
      this.$store.dispatch('a/increment');
      console.log(this.testCount);
    },
  },
};
</script>
<template>
  <div>
    <h1>Welcome to the VERO app</h1>
    <p>Count: {{ this.testCount }}</p>
    <p>Count * 2: {{ $store.getters['a/getCountTimesTwo'] }}</p>
    <button type="button" @click="testVuex">Increment</button>
  </div>
</template>

<style scoped></style>
