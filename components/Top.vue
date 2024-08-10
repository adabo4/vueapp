<template>
  <div class="top-grid">
    <div class="tooop fade-in">
      <div class="headline-div">
        <MainHeadline class="main-headline"
          >Rýchle <u>výsledky</u> pomocou UX auditu.</MainHeadline
        >
      </div>
      <div class="partners-logo">
        <PartnersLogo />
      </div>
    </div>
    <div class="ceeenter fade-in">
      <p class="first-p">
        UX auditom Vášho riešenia lepšie pochopíte, ako vaší zákazníci používajú
        Váš produkt, <strong>zvýšite ich spokojnosť a hlavne zisky.</strong>
      </p>
      <div class="list-component">
        <ListComponent :items="myItems"> </ListComponent>
      </div>
    </div>
    <div class="bottooom fade-in">
      <p class="second-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>
      <div class="btn-comp">
        <Btn height="70px" fontSize="1.1rem">Mám záujem o UX audit.</Btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";
import { onMounted } from "vue";
import { createObserver } from "@/utils/observer";

const myItems = listItems;
const anotherItems = anotherListItems;

onMounted(() => {
  const faders = document.querySelectorAll(".fade-in");

  const appearoptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -110px 0px",
  };

  const observer = createObserver(appearoptions);

  faders.forEach((fader) => {
    observer.observe(fader);
  });
});
</script>
