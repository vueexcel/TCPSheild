<template>
  <div>
    <b-modal id="paymentModal" ref="my-modal" hide-footer>
      <template v-slot:modal-header>
        <h4>Modal Heading</h4>
      </template>
      <template v-slot></template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "paymentModal",
  mounted() {
    this.$bvModal.show("paymentModal");
  }
};
</script>
