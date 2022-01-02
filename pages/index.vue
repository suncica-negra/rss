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
import Error from "../components/Error.vue";

export default {
  components: { Title, Spinner, ArticleSummaryBox, Error },
  name: "Landing",
  data() {
    return {
      feedsData: null,
      title: "Aktualno",
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
      this.feedsData = getDataFromFeed.readFromAPI("aktualno", that);
    },
  },
};
</script>
