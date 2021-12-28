<template>
  <div>
    <div id="header-desktop" class="desktop-only">
      <div class="max-width-desktop">
        <div class="header-wrapper">
          <div v-for="(link, i) in linksToPages" :key="i" class="link-holder">
            <nuxt-link v-if="link === 'home'" to="/" class="transition">
              {{ link.toUpperCase() }}
            </nuxt-link>
            <nuxt-link v-else :to="'/' + link" class="transition">
              {{ link.toUpperCase() }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div id="header-mobile" class="mobile-only">
      <div class="custom">
        <input
          id="input-burger"
          type="checkbox"
          @click="handleDropdown"
          autocomplete="off"
        />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <transition
        enter-active-class="slide-in-right"
        leave-active-class="slide-out-left"
      >
        <div v-if="dropdown" class="margin">
          <div
            v-for="link in linksToPages"
            :key="link"
            class="link-holder"
            @click="closeDropdown"
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
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      linksToPages: [
        "home",
        "fun",
        "lifestyle",
        "latest",
        "news",
        "show",
        "sport",
        "tech",
      ],
      dropdown: false,
    };
  },
  methods: {
    handleDropdown() {
      this.dropdown = !this.dropdown;
    },
    closeDropdown() {
      document.getElementById("input-burger").click();
    },
  },
};
</script>

<style lang="scss">
#header-desktop {
  padding: 30px;
  box-shadow: 0 0 7px var(--box-shadow-transparent);

  .max-width-desktop {
    max-width: 1920px;
    margin: 0 auto;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
      max-width: 800px;
    }
  }
}

#header-mobile {
  position: fixed;
  right: 0;
  width: 163px;
  top: 0;

  .custom {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    padding: 26px 20px 20px 20px;
    background: var(--color-secondary);
    border-radius: 50%;
    box-shadow: 0px 5px 10px var(--box-shadow-transparent);

    input {
      display: block;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 13px;
      left: 13px;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
      -webkit-touch-callout: none;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: var(--bg);
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    span:first-child {
      transform-origin: 0% 0%;
    }

    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-9px, -14px);
      background: var(--bg);
    }

    input:checked ~ span:nth-last-child(2) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(3) {
      transform: rotate(-45deg) translate(-13px, 14px);
    }

    input:checked ~ div {
      transform: none;
    }
  }

  .margin {
    padding: 105px 0 0 15px;
    background-color: var(--bg);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 0 7px var(--box-shadow-transparent);

    .link-holder {
      padding-bottom: 15px;

      .link-wrapper {
        padding-bottom: 5px;
        position: relative;
      }
    }
  }
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
</style>
