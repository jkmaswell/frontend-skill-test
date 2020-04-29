<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');

@import './assets/scss/constants';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Work Sans', sans-serif;
  margin: 0;
}

.app-container {
  background-color: rgba(247,250,255,1);
  background: linear-gradient(135deg, $background-color-start 0%, $background-color-end 100%);
  height: 100vh;
}
</style>
