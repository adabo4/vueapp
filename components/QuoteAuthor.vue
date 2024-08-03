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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.icon-container {
  font-family: $base-font;
  display: flex;
  gap: 1em;
  justify-content: flex-start;
  align-items: center;
  margin: 1em auto;
}

.quote-author {
  p:first-child {
    font-weight: 600;
  }

  a {
    cursor: pointer;
    color: #eb345c;
    text-decoration: none;
    font-weight: 600;
  }
}
</style>
