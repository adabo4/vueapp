<template>
  <h1 class="header-headline">
    <slot />
  </h1>
</template>

<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.header-headline {
  color: white;
  font-family: $base-font;
  font-size: 3rem;
  text-align: center;
  line-height: 1.6em;
}
</style>
