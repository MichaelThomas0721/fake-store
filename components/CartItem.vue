<script>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiTrash } from "oh-vue-icons/icons";

addIcons(HiTrash);
export default {
  props: {
    item: {
      type: Object,
      default: 0,
    },
  },
  components: {
    "v-icon": OhVueIcon,
  },
  methods: {
    HandleQuantity(e) {
      if (!localStorage) return;
      let cart = JSON.parse(localStorage.getItem("items"));
      cart.forEach((item) => {
        if (item.id === this.item.id && item.size === this.item.size) {
          item.quantity = e.target.value;
        }
      });
      localStorage.setItem("items", JSON.stringify(cart));
      this.$emit("update")
    },
    HandleDelete() {
      if (!localStorage) return;
      let cart = JSON.parse(localStorage.getItem("items"));
      cart.forEach((item, index) => {
        if (item.id === this.item.id && item.size === this.item.size) {
          cart.splice(index, 1);
        }
      });
      localStorage.setItem("items", JSON.stringify(cart));
      this.$emit("delete", this.item)
    }
  }
};
</script>

<template>
  <div class="w-full h-36 relative flex flex-row shadow-lg">
    <img
      :src="'/images' + item.imageFolder + '/1.png'"
      class="h-full aspect-square object-cover"
    />
    <div class="flex flex-col">
      <p>{{ item.name }}</p>
      <p>${{ item.price }}</p>
      <p>Size: {{ item.size }}</p>
      <div class="flex flex-row gap-3">
        <p>Quantity:</p>
        <input type="number" :value="item.quantity" min="1" class="w-10 text-center" @change="HandleQuantity" />
      </div>
    </div>
    <div class="ml-auto flex flex-row items-end p-4">
      <button @click="HandleDelete" class="rounded-full">
        <v-icon
          name="hi-trash"
          speed="slow"
          animation="wrench"
          hover="true"
          scale="1.5"
          fill="#0e1f2c"
        />
      </button>
    </div>
  </div>
</template>
