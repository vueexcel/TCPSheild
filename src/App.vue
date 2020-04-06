<template>
  <div id="app">
    <background />
  </div>
</template>

<script>
import background from "./components/background.vue";

export default {
  name: "App",
  components: {
    background
  }
};
</script>

<style>
#app {
}
html {
  font-size:16px;
}
</style>
