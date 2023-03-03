<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a :href="'/shoes/' + props.item.id" class="max-w-sm relative bg-[#f5f5f5] rounded-sm drop-shadow-lg p-3">
    <img :src="'/assets/images' + props.item.imageFolder + '/1.png'" class="w-full aspect-square object-contain" />
    <div>
      <p>{{ props.item.name }}</p>
      <p class="text-gray-500">{{ props.item.category }}</p>
      <p>${{ props.item.price }}</p>
    </div>
  </a>
</template>
