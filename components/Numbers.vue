<template>
  <div class="numbers-container">
    <div class="item num">
      <div class="number-icon">
        <img src="/public/img/one.png" alt="Number One" />
      </div>
      <div class="number-text">
        <h5>Ciele auditu</h5>
        <p>
          Určíme si spoločné ciele, nastavíme očakávania a definujeme cieľovú
          skupinu a jej potreby.
        </p>
      </div>
    </div>
    <div class="item">
      <div class="number-arrow-right">
        <img src="/public/img/arrow.png" alt="" />
      </div>
    </div>
    <div class="item num">
      <div class="number-arrow-left">
        <img src="/public/img/arrow.png" alt="" />
      </div>
    </div>
    <div class="item num">
      <div class="number-icon">
        <img src="/public/img/two.png" alt="Number Two" class="num-two" />
      </div>

      <div class="number-text second">
        <h5>Zbieranie dát</h5>
        <p>
          Zvolíme vhodné metodiky a nástroje na sledovanie správania
          používateľov a zbieranie dát.
        </p>
      </div>
    </div>
    <div class="item num">
      <div class="number-icon">
        <img src="/public/img/three.png" alt="Number Three" />
      </div>
      <div class="number-text">
        <h5>Vyhodnotenie</h5>
        <p>
          Vyhodnotíme nazbierané dáta, zosumarizujeme všetky naše zistenia a
          navrhneme riešenia.
        </p>
      </div>
    </div>
    <div class="number-arrow-right">
      <img src="/public/img/arrow.png" alt="" />
    </div>
    <div class="item num four">
      <div class="number-icon">
        <img src="/public/img/four.png" alt="Number Four" class="num-four" />
      </div>

      <div class="number-text">
        <h5>Výsledky auditu</h5>
        <p>
          Osobná prezentácia výsledkov a navrhnutých riešení s podrobnou
          dokumentáciou.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

.number-icon {
  max-width: 75px;
  img {
    width: 100%;
  }
}
.numbers-container {
  font-family: $base-font;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 1000px;
  margin: 2em auto;
}

.num {
  display: flex;
  justify-content: flex-end;
}
.number-arrow-left {
  img {
    transform: rotateY(180deg);
  }
}

.four {
  grid-column-start: 2;
  grid-column-end: 2;
}

.number-text {
  width: 380px;
  line-height: 1.6em;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h5 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
    margin: 0.5em 0;
  }
}

@media screen and (max-width: 800px) {
  .numbers-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: auto;

    .number-arrow-left,
    .number-arrow-right {
      display: none;
    }

    .item {
      grid-column: 1 / 2;
      margin: 1em;
      gap: 1em;
    }

    .number-icon {
      width: 100%;

      .num-two,
      .num-four {
        display: none;
      }
    }
    .number-text {
      width: auto;
      font-size: 1.2em;
    }
  }
}
</style>
