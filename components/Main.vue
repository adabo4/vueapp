<template>
  <div class="main-top">
    <div class="main-left">
      <div class="headline-div">
        <MainHeadline class="main-left-headline"
          >Rýchle <span>výsledky</span> pomocou UX auditu.</MainHeadline
        >
      </div>

      <p class="first-p">
        UX auditom Vášho riešenia lepšie pochopíte, ako vaší zákazníci používajú
        Váš produkt, <strong>zvýšite ich spokojnosť a hlavne zisky.</strong>
      </p>

      <p class="second-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>
    </div>
    <div class="main-right">
      <div class="partners-logo">
        <PartnersLogo />
      </div>
      <div class="list-component">
        <ListComponent :items="myItems"> </ListComponent>
      </div>

      <div style="width: 700px">
        <Btn width="350px" height="60px" fontSize="1.1rem"
          >Mám záujem o UX audit.</Btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";

export default {
  components: {
    ListComponent,
  },
  data() {
    return {
      myItems: listItems,
      anotherItems: anotherListItems,
    };
  },
  Btn,
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;
.main-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1000px;
  margin: 5em auto;
}
.main-left {
  display: flex;
  flex-direction: column;
  gap: 3em;

  span {
    border-bottom: 10px rgba(255, 192, 203, 0.5) solid;
  }

  .headline-div {
    width: 350px;
  }

  .main-left-headline {
    font-size: 2.9em;
    font-family: $base-font;
    font-weight: 500;
    line-height: 1.4em;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .first-p {
    font-family: $base-font;
    font-size: 1.5em;
    line-height: 1.5em;
    width: 460px;
    font-weight: 400;
    white-space: pre-line;
  }

  .second-p {
    font-family: $base-font;
    font-size: 1.4em;
    line-height: 1.5em;
    width: 500px;
    font-weight: 400;
    white-space: pre-line;
  }
}

.main-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  .btn-component {
    width: 100%;
  }
}
</style>
