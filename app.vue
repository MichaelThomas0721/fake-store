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
      if (!localStorage.getItem("items")) return;
      let cartLength = JSON.parse(localStorage.getItem("items")).length;
      this.cartItems = cartLength;
    }
  },
}
</script>

<template>
  <div id="app" class="min-h-screen w-full flex flex-col font-roboto" style="background-color: #F2F2F2;">
    <Navbar :cartItems="cartItems"/>
    <NuxtPage @updateCart="UpdateCart"/>
    <Footer />
  </div>
</template>