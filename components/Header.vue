<template>
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

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  width: 100%;
  column-gap: 1em;
  row-gap: 2em;
}

.logoitem {
  grid-column: 1;
  grid-row: 1;
  height: 10em;
  display: grid;
  place-items: center;
}

.buttonitem {
  display: grid;
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  height: 1em;
  place-items: center;
}

.header-div {
  grid-column: 1 / span 2;
  grid-row: 2;
  text-align: center;
}

@media screen and (max-width: 800px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    width: 100%;
  }
  .header-div {
    width: 100%;
  }

  .headeritem {
    margin-top: 2em;

    h1 {
      font-size: 2.5em;
    }
  }

  .logoitem {
    align-self: flex-start;
    padding: 1em;
    margin-left: 1em;
  }

  .buttonitem {
    display: grid;
    place-items: center;
    margin-top: 1em;
    width: 100%;
  }
}
</style>
