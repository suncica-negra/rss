<template>
  <transition
    enter-active-class="scale-in-bl"
    leave-active-class="scale-out-bl"
  >
    <div
      id="back-to-top"
      class="transition"
      v-if="offsetTop > 700"
      v-scroll-to="'#body'"
    >
      <span class="material-icons">keyboard_double_arrow_up</span>
      <p>NA VRH</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GoToTopButton",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style lang="scss">
#back-to-top {
  position: fixed;
  bottom: 15px;
  right: 30px;
  box-shadow: inset -7px 0 39px -7px var(--box-shadow-transparent);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  text-align: center;
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--lime);

  .material-icons {
    margin: -13px 0 0 0;
  }

  p {
    font-family: "Chakra Petch", sans-serif;
    font-size: 16px;
    
  }
}

@media screen and (max-width: 800px) {
  #back-to-top {
    width: 73px;
    height: 73px;

    .material-icons {
      margin: -5px 0 0 0;
    }

    p {
      display: none;
    }
  }
}
</style>
