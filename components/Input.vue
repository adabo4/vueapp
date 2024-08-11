<template>
  <div class="form-input">
    <label><slot></slot><span v-if="props.req"> *</span></label>
    <input v-model="email" :type="props.type" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  req: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});
</script>
