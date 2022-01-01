<template>
  <div class="spinner">
    <img src="~/assets/images/spinner.gif" alt="Spinner" />
    <p>Pričekajte....</p>
  </div>
</template>

<script>
export default {
  name: "Spinner",
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
