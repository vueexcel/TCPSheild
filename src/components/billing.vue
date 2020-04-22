<template>
  <div data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
    <div class="my-4">
      <p class="PNB mb-0 blackText mainHeading">Billing Dashboard</p>
      <p
        class="PNR mb-0 greyText dataHeading"
      >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
    </div>
    <div
      class="my-4 greyText PNB HeadBar"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      <span :class="[paymemtActive ? '' : 'active']" class="mr-4" @click="openOverview">Overview</span>
      <span :class="[paymemtActive ? 'active' : '']" @click="openPaymentMethod">Payment Methods</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "billing",
  data() {
    return {};
  },
  computed: {
    ...mapState("billing", ["paymemtActive"])
  },
  methods: {
    ...mapActions({
      openPaymentMethod: "billing/openPaymentMethod",
      openOverview: "billing/openOverview"
    })
  }
};
</script>

<style scoped>
.HeadBar {
  font-size: 1rem;
}
.HeadBar > span {
  padding: 4px 0px;
}
.HeadBar > .active {
  color: #622fe6;
  border-bottom: 3px solid #622fe6;
}
</style>
