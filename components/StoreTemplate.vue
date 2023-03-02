<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  pageTitle: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-gradient-to-b to-[#deddcf] from-[#ebeff7]">
    <h1
      class="text-6xl font-bold text-center p-12 border-b-[1px] border-gray-300"
    >
      {{ props.pageTitle }}
    </h1>
    <div class="h-full w-full text-black store-grid">
      <Filters :categories="props.categories" :gender="props.gender" />

      <div class="flex flex-row flex-wrap gap-5 p-5">
        <Item v-for="item in props.items" :key="item.name" :item="item" />
      </div>
    </div>
  </div>
</template>
