<template lang="pug">
div
  p(
    class="error"
    v-if="fieldErrors"
    v-for="(error, i) in fieldErrors"
    :key="i"
  ) {{ error.message }}

</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
    },
    field: {
      type: String,
    }
  },
  computed: {
    fieldErrors() {
      return this.errors.filter(error => error.field === this.field);
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
