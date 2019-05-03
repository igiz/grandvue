<template>
  <div id="app">
    <Nav/>
    <Item/>
  </div>
</template>

<script>
import Item from './components/Item.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Item
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
