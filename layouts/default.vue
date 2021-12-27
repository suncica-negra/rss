<template>
  <div>
    <Header />
    <Nuxt id="body" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#body {
  min-height: 100vh;
}
</style>
