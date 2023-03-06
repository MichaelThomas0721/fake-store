import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { createApp } from 'vue';

export default () => {
  let Vue = createApp();
  Vue.component('StripeCheckout', StripeCheckout);
};