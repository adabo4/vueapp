<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <MaterialSymbolsCheckCircle class="check-icon" />
      {{ item }}
    </li>
  </ul>
</template>

<script>
import MaterialSymbolsCheckCircle from "./MaterialSymbolsCheckCircle.vue";

export default {
  name: "ListComponent",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
  line-height: 2.5rem;
}

li {
  padding: 5px 0;
  font-family: $base-font;
  font-size: 1rem;
  display: flex;
  gap: 0.3em;
  align-items: center;
}

.check-icon {
  color: #0bac0b;
}
</style>
