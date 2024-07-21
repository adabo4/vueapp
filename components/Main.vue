<template>
  <!--  FIRST FLEXBOX
    
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
  </div> -->

  <!---- GRID LAYOUT>
  
  <div class="main-top">
    <div class="headline-div item">
      <MainHeadline class="main-left-headline"
        >Rýchle <span>výsledky</span> pomocou UX auditu.</MainHeadline
      >
    </div>

    <div class="partners-logo item">
      <PartnersLogo />
    </div>

    <p class="first-p item">
      UX auditom Vášho riešenia lepšie pochopíte, ako vaší zákazníci používajú
      Váš produkt, <strong>zvýšite ich spokojnosť a hlavne zisky.</strong>
    </p>

    <div class="list-component item">
      <ListComponent :items="myItems"> </ListComponent>
    </div>

    <p class="second-p item">
      Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
      <strong>pomocou UX auditu.</strong>
    </p>

    <div class="item" style="width: 700px">
      <Btn width="350px" height="60px" fontSize="1.1rem"
        >Mám záujem o UX audit.</Btn
      >
    </div>
  </div> -->

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
        >
      </div>
    </div>
  </div>

  <div class="main-center">
    <Quote
      text="Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu si aj my dávame záležať na kvalite našich služieb. "
      :sliceWords="40"
    />
    <Quote
      text="S UX tímom Riešení úzko spolupracujeme už
dlhé roky a sú dôležitým partnerom nášho
biznisu. Vďaka ich know-how pre nás od
samého začatku správne nastavili zdravý pomer
prvotriedneho dizajnu a funkčnosti webu, ktorý
následne vylepšovali pomocou relevantných
analýz a dát. Aj ich zásluhou"
      :sliceWords="50"
    />
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";
import Quote from "~/components/Quote.vue";

export default {
  components: {
    ListComponent,
  },
  Quote,
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
// .main-top {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
//   width: 1000px;
//   margin: 5em auto;
//   border: 1px solid blue;
//   gap: 20px;
// }

.main-top {
  position: relative;
  display: flex;
  gap: 3em;
  justify-content: space-between;
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

.main-center {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 1em auto;
}
</style>
