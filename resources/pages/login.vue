<template lang="pug">
  section(
    class="container"
  )

    h1(
      class="title"
    ) USER PAGE

    template(
      v-if="user"
    )
      h2(
        class="info"
        v-for="(value, key, i) in user"
        :key="i"
      ) {{ `${key}: ${value}` }}

        
    br

    nuxt-link(
      class="button"
      :to="{name: 'users'}"
    ) USERS

</template>

<script>
import axios from 'axios';

export default {
  scrollToTop: false,
  name: 'user',
  async asyncData({ error, params }) {
    try {
      const { data } = await axios.get(`/users/${params.id}`);
      return { user: data }
    } catch ({ response }) {
      error({ statusCode: response.status, message: response.data })
    }
    // } catch (err) {
    //   error({ statusCode: err.status, message: err.data })
    // }
  },
  head() {
    return {
      title: `User Page`
      // title: `User Page ${this.user ? '(${this.user.fullName})' : ''}`
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 50px;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}

.button {
  margin-top: 50px;
}
</style>
