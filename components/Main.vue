<template>
  <Top />

  <section class="quote-section">
    <div class="quote-section-top">
      <Quote
        class="slide from-left"
        text="Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu si aj my dávame záležať na kvalite našich služieb. Asi by to chcelo nejaky dlasi text about dmeogáffa fa sfla flakf ldkf asfk dlfk  "
        :sliceWords="40"
      />

      <QuoteAuthor
        class="slide from-left"
        author="Jozef Korman"
        position="Konateľ"
        url="https://www.SvetNápojov.sk"
        urlText="SvetNápojov.sk"
        src="/img/icon1.png"
      />
    </div>
    <div class="quote-section-bottom">
      <Quote
        class="slide from-right"
        text="S UX tímom Riešení úzko spolupracujeme už
dlhé roky a sú dôležitým partnerom nášho
biznisu. Vďaka ich know-how pre nás od
samého začatku správne nastavili zdravý pomer
prvotriedneho dizajnu a funkčnosti webu, ktorý
následne vylepšovali pomocou relevantných
analýz a dát. Aj ich zásluhou"
        :sliceWords="50"
      />
      <QuoteAuthor
        class="slide from-right"
        author="Richard Wohlstein"
        position="Retail Manager"
        url="https://www.AlainDelon.com"
        urlText="AlainDelon.com"
        src="/img/icon2.png"
      />
      <!-- <QuoteAuthor
        class="quote-author"
        v-for="(authorData, index) in quoteAuthors"
        :key="index"
        :author="authorData.author"
        :position="authorData.position"
        :url="authorData.url"
        :urlText="authorData.urlText"
        :src="authorData.src"
      /> -->
    </div>
  </section>

  <section class="main-center">
    <div class="headline-div">
      <MainHeadline class="main-headline size-in"
        >Rýchla a jednoduchá cesta k <u>výsledkom.</u></MainHeadline
      >
    </div>

    <div class="main-center-numbers">
      <Numbers />
    </div>
  </section>

  <div class="main-bottom">
    <div class="fade-in-bottom headline-div first">
      <MainHeadline class="main-headline"
        >Zameriame sa na to <u>najdôležitejšie</u>.</MainHeadline
      >
    </div>

    <div class="fade-in-bottom second">
      <p class="third-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>
      <div class="fade-in-bottom main-bottom-third">
        <Btn height="60px" fontSize="1.1rem">Mám záujem o UX audit.</Btn>
      </div>
    </div>

    <div class="fade-in-bottom list-component third">
      <ListComponent :items="anotherItems"> </ListComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";
import Quote from "~/components/Quote.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import { quoteAuthors } from "~/data/authordata.js";
import { createObserver } from "@/utils/observer";

const anotherItems = anotherListItems;
const myItems = listItems;

onMounted(() => {
  const sliders = document.querySelectorAll(".slide");
  const sizeIn = document.querySelectorAll(".size-in");
  const faders = document.querySelectorAll(".fade-in-bottom");

  const options = {
    threshold: 0,
    rootMargin: "0px 0px 30px 0px",
  };
  const bottomOptions = {
    threshold: 0.1,
    rootMargin: "0px 100px 0px 0px",
  };

  const observer = createObserver(options);
  const observerBottomFaders = createObserver(bottomOptions);

  sliders.forEach((slider) => {
    observer.observe(slider);
  });

  sizeIn.forEach((size) => {
    observer.observe(size);
  });
  faders.forEach((fader) => {
    observerBottomFaders.observe(fader);
  });
});
</script>
