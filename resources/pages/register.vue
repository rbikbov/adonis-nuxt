<template lang="pug">
  section(
    class="container"
  )
    span {{ formDisabled }}

    h1(
      class="title"
    ) REGISTRATION

    form(
      @submit.prevent="registration"
    )
      input(
        type="text"
        v-model.lazy="user.username"
        placeholder="username"
        :class="getClass('username')"
        required
      )
      form-error(
        v-if="getClass('username') === 'error'"
        :errors="errors"
        field="username"
      )

      input(
        type="email"
        v-model.lazy="user.email"
        placeholder="email"
        :class="getClass('email')"
        required
      )
      form-error(
        v-if="getClass('email') === 'error'"
        :errors="errors"
        field="email"
      )

      div(
        class="password"
      )
        input(
          v-if="!showPass"
          :class="['password', getClass('password')]"
          type="password"
          v-model="user.password"
          placeholder="password"
          required
        )
        input(
          v-else
          :class="['password', getClass('password')]"
          type="text"
          v-model="user.password"
          placeholder="password"
          required
        )
        input(
          v-if="user.password"
          type="button"
          :value="showPass ? 'Hide' : 'Show'"
          @click="showPass = !showPass"
        )
      form-error(
        v-if="getClass('password') === 'error'"
        :errors="errors"
        field="password"
      )
      input(
        type="submit"
        class="button"
        value="Submit"
        :disabled="formDisabled"
      )
</template>
<script>
import axios from 'axios'
import formError from '~/components/formError';

export default {
  name: 'users',
  middleware: 'notAuth',
  data: () => ({
    user: {
      username: '',
      email: '',
      password: '',
    },
    prevUserData: {
      username: '',
      email: '',
    },
    errors: [],
    showPass: false,
  }),
  computed: {
    formDisabled() {
      return Object.keys(this.user).some(key => this.getClass(key) === 'error');
    }
  },
  methods: {
    registration() {
      axios.post('/users', this.user)
        .then(res => {
          // this.$set(this, 'user', {
          //   username: '',
          //   email: '',
          //   password: '',
          // })
          this.$route.push('/');
          global.console.log(res)
        })
        .catch(({ response }) => {
          this.$set(this, 'prevUserData', { ...this.user });
          if (response.status === 400) {
            this.errors = response.data;
          }
          global.console.log(response)
        })
    },
    getClass(field) {
      let className;
      const hasError = this.errors.find(error => error.field === field);
      const notChanged = this.prevUserData[field] === this.user[field];
      if (hasError && notChanged) {
        className = 'error';
      } else if (this.prevUserData.username) {
        className = 'success';
      }
      return className;
    },
  },
  components: {
    formError,
  },
  head() {
    return {
      title: `Registration`
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: inline-flex;
  flex-direction: column;
  width: 600px;

  input {
    font-size: 1.5em;
    border: 2px solid #eaeaea;
    margin: 5px 0;
    text-align: center;

    &::placeholder {
      text-align: center;
      text-transform: capitalize;
    }

    &:focus::placeholder {
      text-indent: -999px
    }

    &.success {
      border-color: green;
    }

    &.error {
      border-color: red;
    }

    &[required] {
      border-color: orange;
    }
  }

  .password {
    display: flex;
    position: relative;

    input.password {
      flex-grow: 1;
    }

    input[type=button] {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: transparent;
      border: none;
      margin: 3px;
      cursor: pointer;
    }
  }
}
</style>
