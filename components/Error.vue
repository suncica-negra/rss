<template>
  <div class="error">
    <div class="svg-wrapper">
      <component :is="error" />
    </div>
    <p>
      Dogodila se greška. <span>Osvježite stranicu i pokušajte ponovno.</span>
    </p>
  </div>
</template>

<script>
import error from "../assets/images/error.svg?inline";

export default {
  name: "Error",
  components: {
    error,
  },
  computed: {
    error() {
      return error;
    },
  },
};
</script>

<style lang="scss">
.error {
  margin: 0 30px;

  .svg-wrapper {
    margin: 0 auto;
    max-width: 400px;
    max-height: 225px;

    svg {
      width: 100%;
      height: 100%;
      justify-self: center;
    }
  }

  p,
  span {
    font-size: 25px;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 2px;
  }

  p {
    margin: 30px 0;
    text-align: center;
  }

  span {
    display: block;
  }
}
</style>
