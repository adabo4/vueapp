<template>
  <div class="quote-icon-container">
    <IcBaselineFormatQuote class="quote-icon" />
    <p>
      {{ shortText }}
      <span v-if="!readMoreActivated"> ... </span>
      <a class="read-more" v-if="!readMoreActivated" @click="toggleReadMore"
        >čítať viac</a
      >
      <span v-if="readMoreActivated">{{ fullText }}</span>
      <a class="read-less" v-if="readMoreActivated" @click="toggleReadMore"
        >čítať menej</a
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import IcBaselineFormatQuote from "~/components/icons/IcBaselineFormatQuote";
import { defineProps, computed, ref } from "vue";

const readMoreActivated = ref(false);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  sliceWords: {
    type: Number,
    default: 55,
  },
});
const toggleReadMore = () => {
  readMoreActivated.value = !readMoreActivated.value;
};

const shortText = computed(() => {
  return props.text.split(" ").slice(0, props.sliceWords).join(" ");
});
const fullText = computed(() => {
  return props.text.split(" ").slice(props.sliceWords).join(" ");
});
</script>
