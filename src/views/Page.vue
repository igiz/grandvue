<template>
  <div id="page">
    <header id="header"></header>
    <section id="main">
      <section id="sidebar">
        <search-toolbar />
        <p>Link one</p>
        <p>Link two</p>
      </section>
      <aside id="content"></aside>
    </section>
    <footer id="footer"></footer>
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
#page {
  font-family: "Times New Roman", Times, serif;
  font-size: 20pt;
  display: flex;
  flex-direction: column;
  background: green;
  justify-content: left;
}

#header {
  min-height: 100px;
}

#main {
  display: flex;
  flex-direction: row;
  background: blue;
}

#sidebar {
  min-height: 600px;
  min-width: 15%;
  flex: 0 0 auto;
  float: left;
  background: red;
}

#footer {
  min-height: 100px;
}
</style>

