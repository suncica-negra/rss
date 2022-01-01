<template>
  <div>
    <Title :title="title" />
    <Spinner v-show="!feedsData" />
    <ArticleSummaryBox v-if="feedsData" :feedsData="feedsData" />
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Spinner from "../components/Spinner.vue";
import { getDataFromFeed } from "../helpers/apiReader";
import ArticleSummaryBox from "../components/ArticleSummaryBox.vue";

export default {
  components: { Title, Spinner, ArticleSummaryBox },
  name: "Latest",
  data() {
    return {
      feedsData: null,
      title: "Latest",
    };
  },
  created() {
    this.getArticlesData();
  },
  methods: {
    getArticlesData() {
      var that = this;
      this.feedsData = getDataFromFeed.readFromAPI(
        "https://www.24sata.hr/feeds/najnovije.xml",
        that
      );
    },
  },
};
</script>
