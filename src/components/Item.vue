<template>
  <div class="item">
      <p><img src="{{ iconUrl }}" alt="{{ alt }}" align="middle"> {{ name }}</p>
      <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ItemIcon',
  props: {
    iconUrl: String,
    alt: String,
    name: String,
    description: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: crimson;
}
</style>
