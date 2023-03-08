<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a :href="'/shoes/' + props.item.id" class="w-96 h-fit relative bg-background rounded-sm drop-shadow-lg p-3">
    <img :src="'/images' + props.item.imageFolder + '/1.png'" class="w-full aspect-square object-contain" />
    <div>
      <p>{{ props.item.name }}</p>
      <p class="text-gray-500">{{ props.item.Category }}</p>
      <p class="text-gray-500">{{ props.item.Gender }}</p>
      <p>${{ props.item.price }}</p>
    </div>
  </a>
</template>
