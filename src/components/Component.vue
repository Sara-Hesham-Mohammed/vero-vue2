<script>
export default {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  data() {
    items: [
      { id: 1, name: "item 1 name", desc: "1 desc" },
      { id: 2, name: "item 2 name", desc: "2 desc" },
      { id: 3, name: "item 3 name", desc: "3 desc" },
    ];
  },

  methods: {
    increment() {
      this.$emit("increment-count"); //just a name msh lazm yb2a zy el fn blzabt
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
