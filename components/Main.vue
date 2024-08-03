<template>
  <!--  FIRST FLEXBOX
    
  <div class="main-top">
    <div class="main-left">
      <div class="headline-div">
        <MainHeadline class="main-headline"
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
      <MainHeadline class="main-headline"
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

  <!-- THIS worked <div class="main-top">
    <div class="main-left">
      <div class="headline-div">
        <MainHeadline class="main-headline"
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
        <Btn
          width="350px"
          height="60px"
          fontSize="1.1rem"
          @open="showModal = true"
          >Mám záujem o UX audit.</Btn
        >
      </div>
    </div>
  </div> -->

  <!-- redone 
   <div class="main-top">
    <div class="main-left">
      <div class="headline-div">
        <MainHeadline class="main-headline"
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
        <Btn
          width="350px"
          height="60px"
          fontSize="1.1rem"
          @open="showModal = true"
          >Mám záujem o UX audit.</Btn
        >
      </div>
    </div>
  </div> -->
  <Top />

  <section class="quote-section">
    <div class="quote-section-top">
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
      <!-- <QuoteAuthor
        author="Jozef Korman"
        position="Konateľ"
        url="https://www.SvetNápojov.sk"
        urlText="SvetNápojov.sk"
        src="/img/icon1.png"
      />
      <QuoteAuthor
        author="Richard Wohlstein"
        position="Retail Manager"
        url="https://www.AlainDelon.com"
        urlText="AlainDelon.com"
        src="/img/icon2.png"
      /> -->
    </div>
    <div class="quote-section-bottom">
      <QuoteAuthor
        class="quote-author"
        v-for="(authorData, index) in quoteAuthors"
        :key="index"
        :author="authorData.author"
        :position="authorData.position"
        :url="authorData.url"
        :urlText="authorData.urlText"
        :src="authorData.src"
      />
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
    <div class="main-bottom-left">
      <div class="headline-div">
        <MainHeadline class="main-headline"
          >Zameriame sa na to <span>najdôležitejšie</span>.</MainHeadline
        >
      </div>

      <p class="third-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>

      <div style="width: 700px">
        <Btn width="350px" height="60px" fontSize="1.1rem"
          >Mám záujem o UX audit.</Btn
        >
      </div>
    </div>

    <div class="main-bottom-right">
      <div class="list-component">
        <ListComponent :items="anotherItems"> </ListComponent>
      </div>
    </div>
  </div>

  <!-- <div class="form" v-if="showModal">
    <Form @close="showModal = false"> </Form>
  </div> -->
</template>

<script>
import Btn from "./Btn.vue";
import ListComponent from "./ListComponent.vue";
import { listItems, anotherListItems } from "~/data/listItems";
import Quote from "~/components/Quote.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import { quoteAuthors } from "~/data/authordata.js";
import Form from "./Form.vue";

export default {
  // props: {
  //   showModal: Boolean,
  // },
  methods: {
    closeModal() {
      this.$emit("toggle-modal");
    },
  },
  components: {
    ListComponent,
  },
  Quote,
  data() {
    return {
      myItems: listItems,
      anotherItems: anotherListItems,
      quoteAuthors,
      showModal: false,
    };
  },

  Btn,
  QuoteAuthor,
};
</script>

<style lang="scss" scoped>
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

.tooop {
  display: flex;
  margin: 6em auto;
  gap: 3em;
  width: 1000px;
  justify-content: space-between;

  span {
    border-bottom: 15px rgba(255, 192, 203, 0.5) solid;
  }
}

.ceeenter {
  display: flex;
  justify-content: space-between;
  gap: 3em;
  margin: 0 auto;
  width: 1000px;
}

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
    border-bottom: 15px rgba(255, 192, 203, 0.5) solid;
  }

  .headline-div {
    width: 350px;
  }
}

.main-headline {
  font-size: 2.9em;
  font-family: $base-font;
  font-weight: 500;
  line-height: 1.4em;
  word-break: break-word;
  white-space: pre-wrap;
}

.first-p,
.third-p {
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

.quote-section {
  width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 6em auto;
}

.quote-section-top {
  display: flex;
  gap: 5em;
}

.quote-section-bottom {
  display: flex;
  gap: 5em;

  .quote-author {
    width: 460px;
  }
}

.main-center {
  .headline-div {
    margin: 4em auto;
    width: 500px;
    text-align: center;
  }
  span {
    border-bottom: 15px rgba(255, 192, 203, 0.5) solid;
  }
}

.main-bottom {
  display: flex;
  width: 1000px;
  margin: 5em auto;

  span {
    border-bottom: 15px rgba(255, 192, 203, 0.5) solid;
  }

  .headline-div {
    width: 500px;
  }

  .third-p {
    width: 380px;
  }
}

.main-bottom-left {
  display: flex;
  width: 50%;
  justify-content: space-between;
  flex-direction: column;
  gap: 5em;
}

.main-bottom-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

@media screen and (max-width: 825px) {
  .main-top {
    flex-direction: column;
  }
}
</style>
