<template>
  <div class="modal" v-if="isDialogOpen">
    <div class="modal-content">
      <form class="form">
        <h2 class="form-headline">
          Jednoducho nám napíšte a my sa Vám ozveme.
        </h2>
        <button class="close-icon" @click="closeDialog">
          <MaterialSymbolsLightCancel> </MaterialSymbolsLightCancel>
        </button>

        <div class="form-input">
          <label>Meno:<span> *</span></label>
          <input v-model="name" type="text" />
          <p v-if="nameError">{{ nameError }}</p>
        </div>

        <!-- <Input req="true">Meno:</Input> -->
        <div class="number">
          <div class="form-input">
            <label>Email:<span> *</span></label>
            <input v-model="email" type="email" />
            <p v-if="emailError">{{ emailError }}</p>
          </div>
          <Input>Tel. čislo:</Input>
        </div>
        <Input>Webstránka:</Input>
        <!-- <Textarea req="true">Poznámka:</Textarea> -->
        <div class="form-input">
          <label><slot></slot><span> *</span></label>
          <textarea
            rows="50"
            cols="50"
            v-model="text"
            placeholder="Je niečo, čo by ste sa nás chceli spýtať?"
          ></textarea>
          <p v-if="textError">{{ errorMsg3 }}</p>
        </div>
        <Btn
          @click="sendMessage"
          width="90%"
          height="70px"
          fontSize="1.1rem"
          class="contact-btn"
          >Kontaktujte ma.</Btn
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const name = ref("");
const text = ref("");

const nameError = ref("");
const emailError = ref("");
const textError = ref("");

const errorMsg = "Zadajte email v platnom formáte.";
const errorMsg2 = "Zadajte min. 2 písmená.";
const errorMsg3 = "Pole nesmie byť prázdne.";

console.log("value is", email.value);

const isDialogOpen = ref(false);
const empty = false;
const regEx = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

const isValidEmail = computed(() => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
});

const isNameValid = computed(() => {
  return name.value.length >= 2;
});

const isTextValid = computed(() => {
  return text.value.length > 0;
});

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data === "open-dialog") {
      isDialogOpen.value = true;
    }
    if (event.data === "close-dialog") {
      isDialogOpen.value = false;
    }
  });
});

const closeDialog = function () {
  isDialogOpen.value = false;
};

const sendMessage = function (e: any) {
  e.preventDefault();

  // if (!isValidEmail.value) {
  //   emailError.value = errorMsg;
  // } else {
  //   emailError.value = "";
  //   console.log("message sent:", email.value);
  //   // Add your form submission logic here
  // }

  isValidEmail.value ? (emailError.value = "") : (emailError.value = errorMsg);
  isNameValid.value ? (nameError.value = "") : (nameError.value = errorMsg2);
  isTextValid.value ? (textError.value = "") : (textError.value = errorMsg3);
};
</script>
