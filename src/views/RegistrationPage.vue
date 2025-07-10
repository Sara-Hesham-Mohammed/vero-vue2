<script>
import RegistrationForm from "../components/RegistrationForm.vue"
export default {
  name: "RegistrationPage",
  components: {
    RegistrationForm

  },
  props: { details: {} },
  data() {
    return {};
  },
  methods: {}
};
</script>

<template>
    <div>
        <RegistrationForm/>
    </div>
</template>

<style scoped>
</style>