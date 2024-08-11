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
