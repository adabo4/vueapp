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
          <p class="error" v-if="nameError">{{ nameError }}</p>
        </div>

        <div class="number">
          <div class="form-input">
            <label>Email:<span> *</span></label>
            <input v-model="email" type="email" />
            <p class="error" v-if="emailError">{{ emailError }}</p>
          </div>
          <div class="form-input">
            <label>Tel. číslo:</label>
            <input type="text" />
          </div>
        </div>

        <div class="form-input">
          <label>Webstránka:</label>
          <input type="text" />
        </div>

        <div class="form-input">
          <label>Text: <span>*</span></label>
          <textarea
            rows="50"
            cols="50"
            v-model="text"
            placeholder="Je niečo, čo by ste sa nás chceli spýtať?"
          ></textarea>
          <p class="error" v-if="textError">{{ errorMsg3 }}</p>
        </div>

        <p class="sentMessage" v-if="formSubmitted">{{ messageSent }}</p>

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
const formSubmitted = ref(false);

const nameError = ref("");
const emailError = ref("");
const textError = ref("");

const errorMsg = "Zadajte email v platnom formáte.";
const errorMsg2 = "Zadajte min. 2 písmená.";
const errorMsg3 = "Pole nesmie byť prázdne.";
const messageSent = "Vaša správa bola odoslaná!";

const isDialogOpen = ref(false);
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const isValidEmail = computed(() => {
  return regEx.test(email.value);
});

const isNameValid = computed(() => {
  return name.value.length >= 2;
});

const isTextValid = computed(() => {
  return text.value.length > 0;
});

const sendSuccessfully = () => {
  if (isValidEmail.value && isNameValid.value && isTextValid.value) {
    formSubmitted.value = true;
  } else {
    formSubmitted.value = false;
  }
};

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

  isValidEmail.value ? (emailError.value = "") : (emailError.value = errorMsg);
  isNameValid.value ? (nameError.value = "") : (nameError.value = errorMsg2);
  isTextValid.value ? (textError.value = "") : (textError.value = errorMsg3);

  sendSuccessfully();
  name.value = "";
  email.value = "";
  text.value = "";
  setInterval(() => {
    formSubmitted.value = false;
  }, 5000);
};
</script>
