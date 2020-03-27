<template>
  <div class="bg-light d-flex justify-content-between topBar">
    <div class="py-2 px-4 mx-4 my-3 d-flex justify-content-between dropdown">
      <p class="PNT m-0 themeGrey selection">Selection</p>
      <b-icon
        icon="chevron-down"
        font-scale="1"
        class="rounded-circle themeGrey"
        style="font-weight:bold"
      ></b-icon>
    </div>
    <div class="d-flex align-items-center mx-5">
      <b-icon icon="bell" class="rounded-circle themeGrey bell" style="font-weight:bold"></b-icon>
      <b-avatar
        class="ml-3"
        variant="light"
        rounded="lg"
        size="42px"
        text="AC"
        src="https://placekitten.com/300/300"
      ></b-avatar>
      <p class="PNT themeGrey px-3 m-0 userName">{{user}}</p>
      <b-icon icon="chevron-down" font-scale="1" class="rounded-circle themeGrey chevron-down"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      user: "Hello Xenon"
    };
  }
};
</script>

<style scoped>
.topBar {
  border-radius: 10px;
}
.dropdown {
  width: 290px;
  border: 1px solid #eaeaea;
  border-radius: 40px;
}
.selection {
  font-size: 15px;
  font-weight: lighter;
}
.chevron-down {
  font-size: 250% !important;
  padding: 4px 10px;
}
.bell {
  border: 1px solid #a7aab3;
  font-size: 250% !important;
  padding: 4px 10px;
}
.userName {
  font-size: 15px;
}
</style>