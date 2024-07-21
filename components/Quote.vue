<template>
  <div class="quote-icon-container">
    <IcBaselineFormatQuote class="quote-icon" />
    <p>
      {{ shortText }}
      <span v-if="!readMoreActivated">...</span>
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
      default: 55, // Adjust the number of words to slice for the initial text display
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.quote-icon-container {
  position: relative;
  width: 460px;
  max-height: 300px;
  border: 2px solid rgba(128, 128, 128, 0.3);

  p {
    font-family: $base-font;
    font-size: 1.1em;
    line-height: 1.7em;
    padding: 1.2em;
    margin: 1em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.quote-icon {
  transform: rotate(180deg);
  position: absolute;
  top: -50px;
  left: 1em;
}

.read-more,
.read-less {
  color: red;
}
</style>
