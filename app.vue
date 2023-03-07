<script>
export default {
  data() {
    return {
      cartItems: "0",
    }
  },
  mounted() {
    this.UpdateCart();
  },
  methods: {
    UpdateCart() {
      if (!localStorage) return;
      let cartLength = JSON.parse(localStorage.getItem("items")).length;
      this.cartItems = cartLength;
    }
  },
}
</script>

<template>
  <div id="app" class="bg-[#f5f5f5]">
    <Navbar :cartItems="cartItems"/>
    <NuxtPage @updateCart="UpdateCart"/>
  </div>
</template>