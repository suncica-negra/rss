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
  name: "News",
  data() {
    return {
      feedsData: null,
      title: "News",
    };
  },
  created() {
    this.getArticlesData();
  },
  methods: {
    getArticlesData() {
      var that = this;
      this.feedsData = getDataFromFeed.readFromAPI(
        "https://www.24sata.hr/feeds/news.xml",
        that
      );
    },
  },
};
</script>
