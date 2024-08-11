<template>
  <div class="form-input">
    <label><slot></slot><span> *</span></label>
    <textarea
      rows="50"
      cols="50"
      v-model="message"
      placeholder="Je niečo, čo by ste sa nás chceli spýtať?"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    type: Boolean,
    req: true,
  },
};
</script>
