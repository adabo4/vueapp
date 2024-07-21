<template>
  <p class="text-with-ellipsis" v-html="processedText"></p>
</template>

<script>
export default {
  name: "TextWithEllipsis",
  props: {
    text: {
      type: String,
      required: true,
    },
    maxSentences: {
      type: Number,
      default: 7,
    },
  },
  computed: {
    processedText() {
      // Split the text into sentences
      const sentences = this.text.match(/[^\.!\?]+[\.!\?]+/g) || [];
      if (sentences.length > this.maxSentences) {
        return sentences.slice(0, this.maxSentences).join(" ") + "...";
      }
      return this.text;
    },
  },
};
</script>

<style scoped>
.text-with-ellipsis {
  /* Add any necessary styling here */
  white-space: pre-line; /* Preserve spaces and line breaks */
}
</style>
