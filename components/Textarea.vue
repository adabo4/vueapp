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

<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.form-input {
  font-family: $base-font;
  width: 90%;
  margin: 0 auto;
  input,
  textarea {
    background-color: rgb(240, 240, 240);
    display: block;
    width: 100%;
    height: 150px;
    border: none;
    margin: 1em 0;
    padding: 2em;
  }

  label {
    font-size: 1.1em;
    font-weight: 700;
  }

  span {
    color: #eb345c;
  }
  textarea {
  }
}
</style>
