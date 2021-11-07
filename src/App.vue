<template>
<div id="app">
  <div id="menu">
    <div id="page-title">
      <router-link to="/">
        <p>Console Tier List</p>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/">
        <div class="menu-item">
          <p>Tier List</p>
        </div>
      </router-link>
      <router-link to="/edit">
        <div class="menu-item">
          <p>Add</p>
        </div>
      </router-link>
      <router-link to="/info">
        <div class="menu-item">
          <p>Console Information</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <footer>
    <a href="https://github.com/cramterr/CR3">
      https://github.com/cramterr/CR3
    </a>
  </footer>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background: #4a4a4a;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  background: #333333;
}

#menu a {
  color: #ff1e05;
  text-decoration: none;
  font-size: 1.4em;
  font-family: sans-serif;
}

#page-title {
  grid-area: brand;
  display: flex;
  justify-content: center;
  font-size: 1.7em;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 15px;
}

footer {
text-align: center;
padding: 20px;
background: #333333;
height: 80px;
margin-top: 50px;
}

footer a {
color: #ff1e05;
}
</style>
