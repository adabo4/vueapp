<template>
  <div class="logo">
    <div class="logo-left"><p>R</p></div>
    <div class="logo-right">
      <p>UX Design</p>
      <p><span>riesenia</span>.com</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: white;
}
.logo-left {
  font-size: 5rem;
  font-weight: 800;
}
.logo-right {
  margin-top: 1rem;

  p:first-child {
    font-size: 1.3rem;
  }
  p:last-child span {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}
</style>
