<template>
  <div class="backdrop">
    <form @submit.prevent="onSubmit" class="form">
      <h2 class="form-headline">Jednoducho nám napíšte a my sa Vám ozveme.</h2>
      <span class="close-icon"
        ><MaterialSymbolsLightCancel @click="closeModal">
        </MaterialSymbolsLightCancel
      ></span>
      <Input>Meno:</Input>
      <Input>Webstránka:</Input>
      <Input>Webstránka:</Input>
      <Textarea>Poznámka:</Textarea>
      <Btn width="350px" height="60px" fontSize="1.1rem">Kontaktujte ma.</Btn>
    </form>
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
.form {
  position: relative;
  padding: 1em;
  width: 600px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.1);
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
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
</style>
