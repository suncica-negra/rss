<template>
  <div class="header-wrapper" v-if="links">
    <div
      v-for="(link, i) in links"
      :key="i"
      class="link-holder"
      @click="handleClick"
    >
      <div class="link-wrapper">
        <nuxt-link v-if="link === 'home'" to="/" class="transition">
          {{ link.toUpperCase() }}
        </nuxt-link>
        <nuxt-link v-else :to="'/' + link" class="transition">
          {{ link.toUpperCase() }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLinks",
  props: {
    links: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
}

.link-holder {
  position: relative;
  padding-bottom: 5px;

  a {
    color: var(--color-primary);
    letter-spacing: 2px;

    &:after,
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      height: 1px;
      margin: 5px 0 0;
      transition: all 0.3s ease-out;
      opacity: 0;
      background-color: var(--orange);
    }

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    }

    &:hover {
      color: var(--orange);

      &:after,
      &:before {
        width: 50%;
        opacity: 1;
      }
    }

    &.nuxt-link-exact-active {
      color: var(--orange);

      &:after,
      &:before {
        width: 50%;
        opacity: 1;
      }
    }
  }
}

#header-mobile {
  .margin {
    .header-wrapper {
      display: grid;
      grid-template-columns: 100%;

      .link-holder {
        padding-bottom: 15px;

        .link-wrapper {
          padding-bottom: 5px;
          position: relative;
        }
      }
    }
  }
}
</style>
