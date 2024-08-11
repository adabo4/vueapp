<template>
  <div class="icon-container">
    <div class="icon-image">
      <img :src="src" alt="Ikona Svet nápojov" />
    </div>
    <div class="quote-author">
      <p>{{ author }}</p>
      <p>
        {{ position }} <a :href="url">{{ urlText }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteAuthor",
  props: {
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
  },
};
</script>
