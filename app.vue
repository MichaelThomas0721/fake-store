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
      this.cartItems = localStorage.getItem("items");
    }
  },
}
</script>

<template>
  <div id="app">
    <Navbar :cartItems="cartItems"/>
    <NuxtPage @updateCart="UpdateCart"/>
  </div>
</template>