<template>
  <div class="app">
    <ul class="nav">
      <li><router-link to="/">Welcome</router-link></li>
      <li><router-link to="/step/1">Step 1</router-link></li>
      <li><router-link to="/step/2">Step 2</router-link></li>
      <li><router-link to="/step/3">Step 3</router-link></li>
      <li><router-link to="/step/4">Step 4</router-link></li>
      <li><router-link to="/step/5">Step 5</router-link></li>
      <li><router-link to="/step/6">Step 6</router-link></li>
      <li><router-link to="/step/7">Step 7</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  border: 1px solid darkgrey;
  border-radius: 4px;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
