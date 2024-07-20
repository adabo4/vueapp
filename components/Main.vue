<template>
  <div class="main-top">
    <div class="main-left">
      <h2>Rýchle výsledky pomocou UX auditu.</h2>

      <p>
        UX auditom Vášho riešenia lepšie pochopíte, ako vaší zákazníci používajú
        Váš produkt, zvýšite ich spokojnosť a hlavne zisky.
      </p>

      <p>
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu pomocou UX
        auditu.
      </p>
    </div>
    <div class="main-right">
      <PartnersLogo />
      <ListComponent :items="myItems"> </ListComponent>
      <Btn />
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss">
.main-top {
  display: flex;
}
.main-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
