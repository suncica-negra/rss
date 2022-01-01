<template>
  <h2>
    {{ title }}
    <span class="material-icons">rss_feed</span>
  </h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style lang="scss">
h2 {
  margin: 30px;
  font-size: 40px;
  display: flex;
}

@media screen and (min-width: 1920px) {
  h2 {
    max-width: 1920px;
    padding: 30px;
    margin: 0 auto;
  }
}
</style>
