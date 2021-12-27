<template>
  <div>
    <Header />
    <Nuxt id="body" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#body {
  min-height: 100vh;
}
</style>
