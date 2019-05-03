<template>
  <form>
    <span>Search by name </span> <input type="text" v-model="searchTerm" name="name">
    <input type="submit" value="Search">
  </form>
</template>

<script>

import api from '@/api'

export default {
  name:'Nav',
  data () {
    return {
      searchTerm: "Dragon Scimitar"
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
