<template>
  <div>
    <Header />
    <Nuxt id="body" />
    <GoToTopButton :offsetTop="offsetTop" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import GoToTopButton from "../components/GoToTopButton.vue";

export default {
  components: {
    Header,
    Footer,
    GoToTopButton,
  },
  data() {
    return {
      offsetTop: 0,
    };
  },
  beforeMount() {
    if (process.client) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  methods: {
    onScroll(e) {
      if (process.client) {
        this.offsetTop = window.pageYOffset;
      }
    },
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
