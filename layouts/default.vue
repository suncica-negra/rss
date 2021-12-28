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

<style lang="scss">
#body {
  min-height: calc(100vh - 122px);

  @media screen and (max-width: 800px) {
    min-height: calc(100vh - 37px);
  }
}
</style>
