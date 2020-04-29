<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}

body,
html {
  font-size: 10px;
  font-family: 'Work Sans', sans-serif;
  margin: 0;
}

.app-container {
  background-color: rgba(247,250,255,1);
  background: linear-gradient(135deg, $background-color-start 0%, $background-color-end 100%);
  min-height: 100vh;
  padding: 5rem;
}
</style>
