<template>
  <div>
    <div class="spinner" v-show="!feedsData">
      <img src="~/assets/images/spinner.gif" alt="Spinner" />
      <p>Pričekajte....</p>
    </div>
    <div v-if="feedsData">
      <p v-for="(item, i) in feedsData" :key="i">
        title: {{ item.title[0] }}<br /><br />
        pubDate: {{ item.pubDate[0] }}<br /><br />
        link: {{ item.link[0] }}<br /><br />
        guid: {{ item.guid[0] }}<br /><br />
        enclosure/link: {{ item.enclosure[0].$.url }}<br /><br />
        description: {{ item.description[0].split(">")[1] }}<br /><br />
        category: {{ item.category[0] }}<br /><br />
        dc:creator: {{ item["dc:creator"][0]._ }}
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export default {
  name: "Landing",
  data() {
    return {
      feedsData: null,
    };
  },
  created() {
    this.getArticlesData();
  },
  methods: {
    async getArticlesData() {
      await this.$axios
        .get(CORS_PROXY + "https://www.24sata.hr/feeds/aktualno.xml")
        .then((response) => {
          var _this = this;
          var xmlFile = response.data;
          var parseString = require("xml2js").parseString;
          parseString(xmlFile, async function (err, result) {
            return (_this.feedsData = result.rss.channel[0].item);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.spinner {
  position: relative;
  text-align: center;
  min-height: 204px;

  p {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 23px;
    color: var(--aqua);
  }
}
</style>
