<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiBag } from "oh-vue-icons/icons";

addIcons(BiBag);

export default {
  data() {
    return {
      navButtons: [
        { pageUrl: "/", text: "Home" },
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
  <div class="h-24 p-3 w-full bg-green-800 flex flex-row justify-between">
    <div
      class="p-8 border-4 border-white rounded-lg flex items-center text-white text-2xl font-bold"
    >
      <p>Sneak Easy</p>
    </div>
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
