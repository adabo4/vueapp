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

<script>
export default {
  name: "Quote",
  props: {
    text: {
      type: String,
      required: true,
    },
    sliceWords: {
      type: Number,
      default: 55,
    },
  },
  data() {
    return {
      readMoreActivated: false,
    };
  },
  computed: {
    shortText() {
      return this.text.split(" ").slice(0, this.sliceWords).join(" ");
    },
    fullText() {
      return this.text.split(" ").slice(this.sliceWords).join(" ");
    },
  },
  methods: {
    toggleReadMore() {
      this.readMoreActivated = !this.readMoreActivated;
    },
  },
};
</script>
