<script>
import Component from './Component.vue'

export default {
    
  name: "Parent",
  components: {
    Component
  },

  data() {
    return {
      product: 'Socks',
      description: 'Warm fuzzy socks',
      arr: [],
      details: ['80% cotton', '20% polyester', 'Gender-neutral']
    }
  },
  methods: {
    updateArr(id) {
      this.arr.push(id);
    }
  }
};
</script>

<template>
  <div>
     <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <p>Count: {{ count }}</p>
    <Component :details="details" @increment-count="updateArr"/>
  </div>
</template>
