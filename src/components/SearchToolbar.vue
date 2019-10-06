<template>
  <section class="search_toolbar">
    <input class="search_field" type="text" placeholder="search for item" />
    <button class="search_button" type="submit" value="Search">Search</button>
  </section>
</template>

<style>
.search_toolbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.search_toolbar > * {
  border: 0.05rem solid #666b6b;
  padding-left: 0.5rem;
}

.search_toolbar > *:focus {
  outline: none;
}

.search_field {
  height: 100%;
  width: 70%;
  font-size: 14pt;
  background-color: #f5f8fc;
  border-radius: 8px 0px 0px 8px;
  border-right: 0px;
}

.search_field:focus {
  background-color: #cee6e6;
  outline: none;
}

.search_button {
  height: 100%;
  width: 30%;
  font-size: 14pt;
  background-image: linear-gradient(0deg, #4c5a61, #3e4e5a);
  border-radius: 0px 8px 8px 0px;
  color: #ffffff;
}

.search_button:hover {
  background-image: linear-gradient(0deg, #4c4c4c, #7f838f);
}

.search_button:active {
  background-image: linear-gradient(0deg, #343a40, #525d69);
}
</style>

