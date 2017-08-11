<template lang="pug">
  div(
    id="app"
  )
    my-header
    nuxt
    //- chat
    my-footer
</template>

<script>
import MyHeader from '../components/Header.vue'
import MyFooter from '../components/Footer.vue'
// import Chat from '../components/Chat.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
    // Chat,
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.container {
  flex-grow: 1;
  text-align: center;
}

.button,
.button:visited {
  display: inline-block;
  letter-spacing: 1px;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
  cursor: pointer;
  border-radius: 4px;
}

.button[disabled] {
  cursor: not-allowed;
  position: relative;
}

.button[disabled]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .9);
  border-radius: 4px;
}




.button:hover,
.button.nuxt-link-active {
  color: #fff;
  background-color: #3B8070;
}

.title {
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
