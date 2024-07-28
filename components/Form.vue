<template>
  <div class="modal">
    <div class="modal-content">
      <form @submit.prevent="onSubmit" class="form">
        <h2 class="form-headline">
          Jednoducho nám napíšte a my sa Vám ozveme.
        </h2>
        <span class="close-icon"
          ><MaterialSymbolsLightCancel @click="closeModal">
          </MaterialSymbolsLightCancel
        ></span>
        <Input req="true">Meno:</Input>
        <div class="number">
          <Input req="true">Email:</Input>
          <Input>Tel. čislo:</Input>
        </div>
        <Input>Webstránka:</Input>
        <Textarea req="true">Poznámka:</Textarea>
        <Btn width="90%" height="70px" fontSize="1.1rem" class="contact-btn"
          >Kontaktujte ma.</Btn
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

$base-font: "Ubuntu", sans-serif;

.modal {
  top: 0;
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align to the top of the screen */
  z-index: 1000;
  overflow-y: auto; /* Allows the modal to scroll if content is too large */
}

.modal-content {
  position: relative;
  padding: 1em;
  // width: 600px;
  margin: auto;
  background-color: white;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  margin-top: 100px; /* Set the desired margin-top */
}

.close-icon {
  font-size: 3em;
  top: 0;
  right: 0;
  position: absolute;
  margin: 20px 15px 0 0;
}
.form-headline {
  font-size: 2em;
  font-family: $base-font;
  width: 400px;
  text-align: center;
  margin: 50px auto;
  font-weight: 900;
}
.number {
  display: flex;

  .form-input {
    width: 40%;
  }
}

.contact-btn {
  display: block;
  margin: 1em auto;
}
</style>
