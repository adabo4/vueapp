<template>
  <p class="contact">
    <slot />
  </p>
</template>

<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

.contact {
  color: white;
  font-family: $base-font;
  font-size: 1.7rem;
}
</style>
