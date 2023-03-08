<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiBag } from "oh-vue-icons/icons";

addIcons(BiBag);

export default {
  data() {
    return {
      navButtons: [
        {pageUrl: "/shoes", text: "All Shoes"},
        { pageUrl: "/shoes?Gender=Men%27s", text: "Men's Shoes" },
        { pageUrl: "/shoes?Gender=Women%27s", text: "Women's Shoes" },
      ],
    };
  },
  props: {
    cartItems: {
      type: String,
      default: 0,
    },
  },
  components: {
    "v-icon": OhVueIcon,
  },
};
</script>

<template>
  <div class="h-24 p-3 w-full bg-header flex flex-row justify-between">
    <a href="/" class="h-full aspect-square">
      <img
        src="/SneakEasyLogo.svg"
        alt="SneakEasy Logo"
        class="w-full h-full"
      />
    </a>
    <div class="flex flex-row gap-10 h-full items-center mx-3">
      <NavButton
        v-for="button in navButtons"
        :key="button.text"
        :pageUrl="button.pageUrl"
        :text="button.text"
      />
      <a
        class="flex flex-row text-white justify-center items-center wrenchAnimation pointer-events-auto"
        href="/cart"
      >
        <v-icon name="bi-bag" inverse scale="2" />
        <p class="absolute translate-y-[3px] pointer-events-none">
          {{ cartItems }}
        </p>
      </a>
    </div>
  </div>
</template>
