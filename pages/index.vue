<template>
  <Header @open-modal="showModal = true"></Header>
  <Main :showModal="showModal" @toggle-modal="toggleModal"></Main>
  <Footer></Footer>
  <Form v-if="showModal" @close="showModal = false"></Form>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss"></style>
