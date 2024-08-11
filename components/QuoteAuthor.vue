<template>
  <div class="icon-container">
    <div class="icon-image">
      <img :src="props.src" alt="Ikona Svet nápojov" />
    </div>
    <div class="quote-author">
      <p>{{ props.author }}</p>
      <p>
        {{ props.position }} <a :href="props.url">{{ props.urlText }}</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  urlText: {
    type: String,
    default: "Read more",
  },
});
</script>
