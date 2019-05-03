<template>
  <div>
    <div class="item">
      <div class="item_image">
        <img :src="data.icon_large" :alt="data.name" align="middle">
        <span class="caption">{{ data.name }}</span>
      </div>
      <div class="item_description">
        <p>{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: {
    data: {
        type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.item {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
}
div.item_image {
    vertical-align: top;
    display: inline-block;
    width: 120px;
}
</style>
