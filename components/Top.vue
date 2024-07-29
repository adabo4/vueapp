<template>
  <div class="top-grid">
    <div class="tooop">
      <div class="headline-div">
        <MainHeadline class="main-headline"
          >Rýchle <span>výsledky</span> pomocou UX auditu.</MainHeadline
        >
      </div>
      <div class="partners-logo">
        <PartnersLogo />
      </div>
    </div>
    <div class="ceeenter">
      <p class="first-p">
        UX auditom Vášho riešenia lepšie pochopíte, ako vaší zákazníci používajú
        Váš produkt, <strong>zvýšite ich spokojnosť a hlavne zisky.</strong>
      </p>
      <div class="list-component">
        <ListComponent :items="myItems"> </ListComponent>
      </div>
    </div>
    <div class="bottooom">
      <p class="second-p">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <strong>pomocou UX auditu.</strong>
      </p>
      <div class="btn-comp">
        <Btn
          width="400px"
          height="70px"
          fontSize="1.1rem"
          @click="$emit('toggle-modal')"
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
import Quote from "~/components/Quote.vue";
import QuoteAuthor from "./QuoteAuthor.vue";
import { quoteAuthors } from "~/data/authordata.js";
import Form from "./Form.vue";

export default {
  props: {
    showModal: Boolean,
  },
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.top-grid {
  display: column;
  gap: 2em;
  width: 1000px;
  margin: auto;
}

.headline-div {
  width: 40%;
}

.tooop,
.ceeenter,
.bottooom {
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
}

.partners-logo {
  align-self: flex-start;
  width: 40%;
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
  width: 50%;
  font-weight: 400;
  white-space: pre-line;
}

@media screen and (max-width: 800px) {
  .top-grid {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .tooop {
    font-size: 1em;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .headline-div {
      width: 85%;
      font-size: 0.8em;
      margin: 3em auto;
      margin-right: 1.3em;
    }

    .partners-logo {
      align-self: unset;
      width: 80%;

      img {
        width: 50%;
      }
    }
  }

  .ceeenter {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .first-p,
    .second-p {
      margin: 1em auto;
      width: 80%;
      line-height: 1.6em;
    }

    .list-component {
      margin: 1em auto;
      padding: 1em;

      .check-icon {
        width: 40px;
        height: 40px;
      }
    }
  }

  .bottooom {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .second-p {
      width: 90%;
      margin: 1em auto;
      padding: 1em;
      line-height: 1.8em;
    }

    .btn-comp {
      width: 80%;
      margin: 0 auto;
      margin-left: 1em;
    }
  }
}
</style>
