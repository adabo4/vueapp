<template>
  <button :class="btn" :style="customStyle" @click="toggleModal">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
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
});

const toggleModal = function () {
  window.postMessage("open-dialog");
};

const btn = computed(() => {
  return {
    btn: true,
  };
});

const customStyle = computed(() => {
  return {
    height: props.height,
    fontSize: props.fontSize,
    padding: props.padding,
  };
});
</script>
