<template>
  <div class="form-input">
    <label><slot></slot><span v-if="req"> *</span></label>
    <input v-model="email" type="email" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: Boolean,
    req: true,
  },
};
</script>
