<template>
  <div class="article-wrapper">
    <div class="article-holder">
      <div v-for="(item, i) in feedsData" :key="i" class="article transition">
        <h4 v-if="item.category" class="ribbon">{{ item.category[0] }}</h4>
        <h3 v-if="item.title">{{ item.title[0] }}</h3>
        <p v-if="item.pubDate" class="date">
          {{ item.pubDate[0].slice(0, -5) }}
        </p>
        <img
          v-if="item.enclosure"
          :src="item.enclosure[0].$.url"
          alt="Article image"
        />
        <p v-if="item.description" class="description">
          {{ item.description[0].split(">")[1] }}
        </p>
        <p v-if="item['dc:creator']" class="autor">
          Autor: {{ item["dc:creator"][0]._ }}
        </p>
        <a v-if="item.link" :href="item.link[0]" target="_blank">
          <button class="transition">VIŠE...</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleSummaryBox",
  props: {
    feedsData: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>

<style lang="scss">
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
