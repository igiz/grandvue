<template>
  <div id="app">
    <section id="search">
      <search-toolbar />
    </section>
  </div>
</template>

<script>
import SearchToolbar from "@/components/SearchToolbar";

export default {
  name: "app",
  components: {
    "search-toolbar": SearchToolbar
  }
};
</script>

<style>
</style>
