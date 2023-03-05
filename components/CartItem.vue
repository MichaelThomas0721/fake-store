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
  <div class="w-full h-96 relative">
    <img :src="'/assets/images' + item.imageFolder + '/1.png'" class="w-full h-full object-contain"/>
  </div>
</template>
