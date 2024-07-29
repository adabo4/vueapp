<template>
  <!-- <header class="header-all">
    <div class="header-top">
      <Logo></Logo>

      <Btn @open="emitOpenModal" style="width: 200px"
        >Mám záujem o UX audit.</Btn
      >
    </div>
    <div class="header-div">
      <Headline>Zvýšte svoje zisky optimalizáciou vášho eshopu.</Headline>
    </div>
  </header> -->

  <header>
    <div class="grid-container">
      <div class="logoitem"><Logo /></div>
      <div class="header-div headeritem">
        <Headline>Zvýšte svoje zisky optimalizáciou vášho eshopu.</Headline>
      </div>
      <div class="buttonitem">
        <Btn @open="emitOpenModal" style="width: 200px"
          >Mám záujem o UX audit.</Btn
        >
      </div>
    </div>
  </header>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  components: {
    Btn,
  },
  methods: {
    emitOpenModal() {
      this.$emit("open-modal");
    },
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

.grid-container {
  display: grid;
  grid-template-columns: auto auto; /* Two columns for logo and button */
  grid-template-rows: auto auto; /* Two rows: first for logo and button, second for headline */
  align-items: center;
  width: 100%;
  column-gap: 1em; /* Space between logo and button */
  row-gap: 2em;
}

.logoitem {
  grid-column: 1; /* First column */
  grid-row: 1; /* First row */
  height: 10em;
  display: grid;
  place-items: center; /* Align logo content to the right */
}

.buttonitem {
  display: grid;
  grid-column: 2; /* Second column */
  grid-row: 1; /* First row */
  text-align: center; /* Align button to the right */
  height: 1em;
  place-items: center;
}

.header-div {
  grid-column: 1 / span 2; /* Span across both columns */
  grid-row: 2; /* Second row */
  text-align: center; /* Center the headline text */
}

@media screen and (max-width: 800px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // grid-template-rows: 1fr 1fr 1fr 1fr;
    // grid-template-columns: 1fr 1fr 1fr;
  }

  header {
    width: 100%;
  }
  .header-div {
    width: 100%;
  }

  .headeritem {
    margin-top: 2em;
    // grid-template-rows: span 3 3 / 4;

    h1 {
      font-size: 2.5em;
    }
  }

  .logoitem {
    align-self: flex-start;
    padding: 1em;
    margin-left: 1em;
    // grid-template-rows: span 3;
  }

  .buttonitem {
    display: grid;
    place-items: center;
    margin-top: 1em;
    width: 100%;
  }
}
</style>
