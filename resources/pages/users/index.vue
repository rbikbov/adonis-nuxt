<template lang="pug">
  section(
    class="container"
  )

    h1(
      class="title"
    ) USERS

    template(
      v-if="users.length"
    )
      h2(
        class="info"
        v-for="(user, i) in users"
        :key="i"
      )
        nuxt-link(
          class="button"
          :to="{ name: 'users-id', params: { id: user.id } }"
        ) {{ user.username }}

    template(
      v-else
    ) Users not found
        
</template>
<script>
import axios from 'axios'

export default {
  name: 'users',
  scrollToTop: false,
  async asyncData({ error }) {
    try {
      const { data } = await axios.get('/users');
      return { users: data }
    } catch (response) {
      error({ statusCode: response.status, message: response.data })
    }
    // } catch (response) {
    //   global.console.log({ response });
    //   error({ statusCode: response.status, message: response.statusText })
    // }
  },
  head() {
    return {
      title: `About Page`
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
  margin-top: 10px;
}
</style>
