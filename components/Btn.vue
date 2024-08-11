<template>
  <button :class="btn" :style="customStyle" @click="toggleModal">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
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
  methods: {
    toggleModal() {
      window.postMessage("open-dialog");
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
        height: this.height,
        fontSize: this.fontSize,
        padding: this.padding,
      };
    },
  },
};
</script>
