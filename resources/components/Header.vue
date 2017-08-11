<template lang="pug">
  header

    nuxt-link(
      v-for="(route, i) in routes"
      :key="i"
      :to="{ name: route.name }"
      class="button"
      exact
    ) {{ route.name }}
    
</template>

<style lang="scss" scoped>
header {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  z-index: 5; // text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    transition: all .5s;
    margin: 0 10px;
  }
}
</style>

<script>
export default {
  computed: {
    routes() {
      // only parent routes(with one slash symbol)
      return this.$router.options.routes.filter(route => route.path.match(/\//g).length === 1);
    }
  }
}
</script>
