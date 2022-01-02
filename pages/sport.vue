<template>
  <div>
    <Title :title="title" />
    <Error v-if="error" />
    <Spinner v-show="loading" />
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
  name: "Sport",
  data() {
    return {
      feedsData: null,
      title: "Sport",
      loading: true,
      error: false,
    };
  },
  created() {
    this.getArticlesData();
  },
  methods: {
    getArticlesData() {
      var that = this;
      this.feedsData = getDataFromFeed.readFromAPI("sport", that);
    },
  },
};
</script>
