<script>
export default {
  data() {
    return {
      items: [
        {
          sku: "sku_FdQKocNoVzznpJ",
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000",
      pk: import.meta.env.STRIPE_PK,
    };
  },
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  mounted() {
    console.log(this.pk);
  },
};
</script>

<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="pk"
      :items="items"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
    />
    <button @click="checkout">Checkout</button>
  </div>
</template>
