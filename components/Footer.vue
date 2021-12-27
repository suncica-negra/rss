<template>
  <div id="footer">
    <div class="copy">
      <a
        class="copy transition"
        href="https://www.linkedin.com/in/dea-k-331534187/"
        target="_blank"
        >okrasnic</a
      >
      &copy; {{ new Date().getFullYear() }}.
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
#footer {
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 0 7px var(--box-shadow-transparent);

  .copy {
    text-align: center;
    font-size: 13px;
    color: var(--color);

    a {
      letter-spacing: 2px;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>
