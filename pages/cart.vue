<script>
import Shoes from "~/data/shoes";
import DataFetcher from "~/data/dataFetcher";

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
      let shoeItems = [];
      for (let item in items) {
        let shoe = DataFetcher({
          type: "shoes",
          value: { type: "id", value: items[item].id, final: true },
        });
        if (shoe) shoe = shoe[0];
        shoe.size = items[item].size;
        shoe.quantity = items[item].quantity;
        shoeItems.push(shoe);
      }
      this.cartItems = shoeItems;
      this.cartItemsNum = shoeItems.length;
      let sTotal = 0;
      shoeItems.forEach((item) => {
        sTotal += item.price;
      });
      this.subtotal = sTotal;
      this.taxes = sTotal * 0.13;
      this.total = this.subtotal + this.taxes;
    }
  },
  methods: {
    Checkout() {
      let data = fetch("http://localhost:3000/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: this.cartItems,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = data.url;
        });
    },
  },
};
</script>

<template>
  <div class="max-w-7xl w-full h-full mx-auto my-5">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col gap-1 max-w-3xl w-full">
        <p class="text-2xl mb-3">Cart</p>
        <CartItem v-for="cartItem in cartItems" :item="cartItem" />
      </div>
      <div class="text-lg max-w-sm w-full flex flex-col gap-3">
        <p class="text-2xl mb-3">Checkout</p>
        <CheckoutText title="Subtotal" :value="'$' + subtotal" />
        <CheckoutText title="Estimated Shipping" :value="'Free'" />
        <CheckoutText title="Estimated Taxes" :value="'$' + taxes" />
        <div class="w-full h-[1px] bg-gray-600 my-3"/>
        <CheckoutText title="Total" :value="'$' + total" />
        <button
          @click="Checkout"
          class="bg-green-700 rounded-full text-white w-full p-3"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
