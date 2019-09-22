<template>
  <section id="search_toolbar">
    <input id="search_field" type="text" placeholder="search for item" />
    <button id="search_button" type="submit" value="Search">Search</button>
  </section>
</template>

<style>
#search_toolbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#search_toolbar > * {
  border: 0.05rem solid #666b6b;
  padding-left: 0.5rem;
}

#search_toolbar > *:focus {
  outline: none;
}

#search_field {
  background-color: #f5f8fc;
  border-radius: 8px 0px 0px 8px;
  border-right: 0px;
}

#search_field:focus {
  background-color: #d0f7f7;
  outline: none;
}

#search_button {
  background-image: linear-gradient(90deg, #343a40, #525d69);
  border-radius: 0px 8px 8px 0px;
  color: #d3d9e0;
}

#search_button:hover {
  background-image: linear-gradient(90deg, #7d2a2a, #bd4b4b);
  color: white;
}

#search_button:active {
  background-color: white;
}
</style>

