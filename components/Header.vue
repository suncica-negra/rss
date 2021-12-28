<template>
  <div>
    <div v-for="(link, i) in linksToPages" :key="i">
      <nuxt-link :to="'/' + link">{{ link.toUpperCase() }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      linksToPages: [
        "fun",
        "lifestyle",
        "latest",
        "news",
        "show",
        "sport",
        "tech",
      ],
    };
  },
};
</script>
