<template>
  <div id="app">
    <page />
  </div>
</template>

<script>
import Page from "@/views/Page";

export default {
  name: "app",
  components: {
    page: Page
  }
};
</script>

<style>
html {
  background: linear-gradient(to bottom, #344e4d, #524a4a) fixed;
}
</style>
