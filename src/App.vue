<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const { utils } = require("@/assets/js/utils.js");

console.log({utils})
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('util', utils.someDateFunction())
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
