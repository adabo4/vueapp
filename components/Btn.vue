<template>
  <button :class="btn" :style="customStyle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    fontSize: {
      type: String,
      default: "0.9rem",
    },
    padding: {
      type: String,
      default: "0.7rem 1rem",
    },
  },
  computed: {
    btn() {
      return {
        btn: true,
      };
    },
    customStyle() {
      return {
        width: this.width,
        height: this.height,
        fontSize: this.fontSize,
        padding: this.padding,
      };
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.btn {
  background-color: #eb345c;
  font-weight: 600;
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-family: $base-font;
}
</style>
