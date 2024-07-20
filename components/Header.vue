<template>
  <header>
    <div class="header-top">
      <Logo></Logo>

      <Btn style="width: 200px">Mám záujem o UX audit.</Btn>
    </div>
    <div class="header-div">
      <Headline>Zvýšte svoje zisky optimalizáciou vášho eshopu.</Headline>
    </div>
  </header>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  components: {
    Btn,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
header {
  height: 550px;
  background-image: linear-gradient(170deg, #3d3080 55%, #6d2a79, #912675 100%);
  // background: #3d3080;
  // background: linear-gradient(
  //   170deg,
  //   rgba(61, 46, 128, 1) 40%,
  //   rgba(161, 33, 113, 1) 120%
  // );
}

.header-div {
  width: 500px;
  margin: 0 auto;
}

.header-top {
  height: 150px;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
/*912675*/
</style>
