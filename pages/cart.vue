<script>
import Shoes from "~/data/shoes";

export default {
  data() {
    return {
      cartItemsNum: 0,
      cartItems: [],
      subtotal: 0.0,
      taxes: 0.0,
      total: 0.0,
    };
  },
  mounted() {
    if (!localStorage) return;
    let items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      let shoeItems = Shoes({ shoes: { id: items } });
      this.cartItems = shoeItems.shoes;
      this.cartItemsNum = shoeItems.shoes.length;
      let sTotal = 0;
      shoeItems.shoes.forEach((item) => {
        sTotal += item.price;
      });
      this.subtotal = sTotal;
      this.taxes = sTotal * 0.13;
      this.total = this.subtotal + this.taxes;
    }
  },
};
</script>

<template>
  <div class="flex flex-row">
    <div class="flex flex-col">
      <p>Cart</p>
      <CartItem v-for="cartItem in cartItems" :item="cartItem" />
    </div>
    <div>
      <p>Checkout</p>
      <p>Subtotal: {{ subtotal }}</p>
      <p>Estimated Delivery & Handling: Free</p>
      <p>Estimated Taxes: {{ taxes }}</p>
      <p>Total: {{ total }}</p>
      <button class="bg-green-700 rounded-full text-white w-full p-3">
        Checkout
      </button>
    </div>
  </div>
</template>
