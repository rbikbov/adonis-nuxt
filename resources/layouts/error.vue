{{{{raw}}}}
<template lang="pug">
transition(
  name="page"
)
  section(
    class="container"
    v-if="show"
  )
    img(
      src="~/assets/img/logo.png"
      alt="Nuxt.js Logo"
    )
    h1(
      class="title"
    ) {{ error.statusCode }}

    h2(
      class="info"
    ) {{ error.message }}

    nuxt-link(
      class="button"
      :to="{ name: 'index' }"
      v-if="403 <= error.statusCode <= 404"
      exact
    ) Homepage

</template>
{{{{/raw}}}}
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 600);
    // global.console.log(this.error);
  },
  props: ['error']
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}

.button {
  margin-top: 50px;
}

.page-leave-active {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translate(0, -100%);
}

</style>
