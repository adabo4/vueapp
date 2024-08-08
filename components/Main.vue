<template>
  <Top />

  <section class="quote-section">
    <div class="quote-section-top">
      <Quote
        text="Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu si aj my dávame záležať na kvalite našich služieb. Asi by to chcelo nejaky dlasi text about dmeogáffa fa sfla flakf ldkf asfk dlfk  "
        :sliceWords="40"
      />

      <QuoteAuthor
        author="Jozef Korman"
        position="Konateľ"
        url="https://www.SvetNápojov.sk"
        urlText="SvetNápojov.sk"
        src="/img/icon1.png"
      />
    </div>
    <div class="quote-section-bottom">
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
      <QuoteAuthor
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
      <MainHeadline class="main-headline"
        >Rýchla a jednoduchá cesta k <span>výsledkom.</span></MainHeadline
      >
    </div>

    <div class="main-center-numbers">
      <Numbers />
    </div>
  </section>

  <div class="main-bottom">
    <div class="headline-div first">
      <MainHeadline class="main-headline"
        >Zameriame sa na to <span>najdôležitejšie</span>.</MainHeadline
      >
    </div>

    <div class="main-bottom-left second">
      <p class="third-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>
      <div class="main-bottom-third">
        <Btn height="60px" fontSize="1.1rem">Mám záujem o UX audit.</Btn>
      </div>
    </div>

    <div class="list-component third">
      <ListComponent :items="anotherItems"> </ListComponent>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";
import Quote from "~/components/Quote.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import { quoteAuthors } from "~/data/authordata.js";

export default {
  components: {
    ListComponent,
  },
  Quote,
  data() {
    return {
      myItems: listItems,
      anotherItems: anotherListItems,
      quoteAuthors,
    };
  },

  Btn,
  QuoteAuthor,
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

// .quote-section {
//   width: 100%;
//   max-width: 1000px;
//   display: flex;
//   justify-content: space-around;
//   margin: 6em auto;
// }

// .quote-section-top {
//   display: flex;
//   flex-direction: column;
// }

// .quote-section-bottom {
//   display: flex;

//   flex-direction: column;

//   .quote-author {
//     width: 460px;
//   }
// }

// .main-center {
//   .headline-div {
//     margin: 4em auto;
//     width: 500px;
//     text-align: center;
//   }
//   span {
//     border-bottom: 15px rgba(255, 192, 203, 0.5) solid;
//   }
// }

// /* BOTTOM */

// .main-bottom {
//   display: grid;
//   grid-template-columns: 1fr 2fr;
//   grid-template-rows: auto auto auto;
//   width: 100%;
//   max-width: 1000px;
//   margin: 1em auto;
//   gap: 4em;

//   .first {
//     grid-row: 1 / 2;
//     grid-column: 1 / 2;
//     width: 100%;
//   }

//   .second {
//     grid-row: 2 / 3;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     width: 100%;
//   }

//   .third {
//     grid-row: 2 / 3;
//     width: 100%;
//   }

//   .main-bottom-third {
//     width: 100%;
//     max-width: 600px;

//     margin: 0 auto;
//   }
// }

// @media screen and (max-width: 900px) {
//   .main-top {
//     flex-direction: column;
//   }

//   .quote-section {
//     flex-direction: column;
//     width: 100%;
//   }

//   .quote-section-bottom {
//     margin: 1em 0;
//   }

//   .main-center {
//     .headline-div {
//       width: auto;
//       text-align: start;
//       margin: 1em;

//       .main-headline {
//         font-size: 2.5em;
//       }
//     }
//   }

//   .main-bottom {
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr;
//     width: auto;
//     margin: 0 auto;
//     gap: 0;

//     .main-bottom-third {
//       width: 50%;
//     }

//     .first {
//       h2 {
//         font-size: 2.5em;
//         padding: 0.1em;
//       }
//     }
//     .first,
//     .second,
//     .third,
//     .fourth {
//       padding: 1em;
//       width: 100%;
//     }

//     .third,
//     .second {
//       grid-column: 1 / 1;
//     }

//     .third {
//       width: auto;
//       margin: auto;
//     }

//     .second {
//       grid-row: 3 / 3;

//       width: auto;
//       margin: auto;

//       p {
//         width: auto;
//         margin: 1em;
//       }
//     }
//   }
// }

// @media screen and (max-width: 525px) {
//   .main-bottom {
//     .main-bottom-third {
//       width: 90%;
//     }
//   }
// }

// @media screen and (max-width: 320px) {
//   .quote-icon-container {
//     width: 100%;
//   }
// }
</style>
