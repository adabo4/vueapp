<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="index">
      <MaterialSymbolsCheckCircle class="check-icon" />
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import MaterialSymbolsCheckCircle from "~/components/icons/MaterialSymbolsCheckCircle.vue";
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
