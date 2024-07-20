<template>
  <ListComponent :items="myItems"> </ListComponent>
  <Btn />
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
