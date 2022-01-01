<template>
  <div>
    <Title :title="title" />
    <div class="spinner" v-show="!feedsData">
      <img src="~/assets/images/spinner.gif" alt="Spinner" />
      <p>Pričekajte....</p>
    </div>
    <div v-if="feedsData" class="article-wrapper">
      <div class="article-holder">
        <div v-for="(item, i) in feedsData" :key="i" class="article transition">
          <h4 class="ribbon">{{ item.category[0] }}</h4>
          <h3>{{ item.title[0] }}</h3>
          <p class="date">{{ item.pubDate[0].slice(0, -5) }}</p>
          <img :src="item.enclosure[0].$.url" alt="Spinner" />
          <p class="description">{{ item.description[0].split(">")[1] }}</p>
          <p class="autor">Autor: {{ item["dc:creator"][0]._ }}</p>
          <a :href="item.link[0]" target="_blank">
            <button class="transition">VIŠE...</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue';
import { getDataFromFeed } from "../helpers/apiReader";

export default {
  components: { Title },
  name: "Landing",
  data() {
    return {
      feedsData: null,
      title: "Aktualno"
    };
  },
  created() {
    this.getArticlesData();
  },
  methods: {
    getArticlesData() {
      var that = this;
      this.feedsData = getDataFromFeed.readFromAPI(
        "https://www.24sata.hr/feeds/aktualno.xml",
        that
      );
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

.article-wrapper {
  padding: 30px;

  .article-holder {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;

    .article {
      background-color: var(--grey);
      padding: 30px;
      border-radius: 25px;
      position: relative;
      overflow: hidden;

      .ribbon {
        margin: 0;
        padding: 0;
        background: var(--orange);
        color: white;
        padding: 8px 0;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(30%) translateY(0%) rotate(45deg);
        transform-origin: top left;
        text-align: center;
        width: 87px;
        filter: drop-shadow(0 0 4px var(--orange));

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          margin: 0 -1px;
          width: 100%;
          height: 100%;
          background: var(--orange);
        }

        &:before {
          right: 100%;
        }

        &:after {
          left: 100%;
        }
      }

      h3 {
        font-size: 20px;
        padding-right: 13%;
      }

      .date {
        font-family: "Open Sans Condensed", sans-serif;
        letter-spacing: 1px;
        margin: 10px 0;
      }

      img {
        width: 100%;
      }

      .description {
        font-family: "Quicksand", sans-serif;
        margin: 10px 0;
        font-size: 20px;
      }

      .autor {
        font-family: "Chakra Petch", sans-serif;
        margin: 10px 0 60px 0;
      }

      a {
        position: absolute;
        bottom: 30px;

        button {
          padding: 10px 20px;
          border-radius: 25px;
          background-color: var(--box-shadow-less-transparent);
          color: var(--lime);
          letter-spacing: 2px;
          font-family: "Source Code Pro", monospace;
          font-size: 16px;
          margin-top: 10px;
          border: none;
          cursor: pointer;

          &:hover {
            box-shadow: 0 0 7px var(--lime);
          }
        }
      }

      &:hover {
        box-shadow: 0 0 7px var(--aqua);
      }
    }
  }
}

@media screen and (min-width: 1920px) {
  h2 {
    max-width: 1920px;
    padding: 30px;
    margin: 0 auto;
  }

  .article-wrapper {
    .article-holder {
      max-width: 1920px;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

@media screen and (max-width: 1400px) {
  .article-wrapper {
    .article-holder {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

@media screen and (max-width: 1100px) {
  .article-wrapper {
    .article-holder {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media screen and (max-width: 800px) {
  .article-wrapper {
    .article-holder {
      grid-template-columns: 1fr;
    }
  }
}
</style>
