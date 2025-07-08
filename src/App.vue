<template>
  <div id="app">
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">More</button>

    <Component :details="details" />
  </div>
</template>

<script>
import Component from './Component.vue'

export default {
  name: 'App',
  components: {
    Component
  },
  data() {
    return {
      product: 'Socks',
      description: 'Warm fuzzy socks',
      count: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral']
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
