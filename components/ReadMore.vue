<template>
  <div class="long-text-container">
    <p :class="{ 'text-with-ellipsis': !readMoreActivated }">
      <span v-html="visibleText"></span>
      <span v-if="!readMoreActivated"> ... </span>
    </p>
    <a class="read-more" v-if="!readMoreActivated" @click="activateReadMore"
      >čítať viac</a
    >
    <a class="read-less" v-if="readMoreActivated" @click="deactivateReadMore"
      >čítať menej</a
    >
  </div>
</template>

<script>
export default {
  name: "Readmore",
  props: {
    text: {
      type: String,
      required: true,
    },
    sliceWords: {
      type: Number,
      default: 50, // Adjust the number of words to slice for the initial text display
    },
    maxLines: {
      type: Number,
      default: 7,
    },
  },
  data() {
    return {
      readMoreActivated: false,
    };
  },
  computed: {
    visibleText() {
      if (this.readMoreActivated) {
        return this.text;
      } else {
        return this.text.split(" ").slice(0, this.sliceWords).join(" "); // Adjust slice number as needed
      }
    },
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
    deactivateReadMore() {
      this.readMoreActivated = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

.long-text-container {
  font-family: $base-font;
  font-size: 1.1em;
  line-height: 1.8em;
  padding: 1.2em;
  margin: 1em;
}

.text-with-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines, 7);
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(
    1.8em * var(--max-lines, 7)
  ); /* 7 lines with line height of 1.8em */
}

.read-more,
.read-less {
  color: red;
  cursor: pointer;
}
</style>
