<script>
export default {
  props: {
    item: {
      type: Object,
      default: 0,
    },
  },
  mounted() {
    console.log(this.item);
  },
};
</script>

<template>
  <div class="w-full h-36 relative flex flex-row">
    <img
      :src="'/assets/images' + item.imageFolder + '/1.png'"
      class="h-full aspect-square object-contain"
    />
    <div class="flex flex-col">
      <p>{{ item.name }}</p>
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>
