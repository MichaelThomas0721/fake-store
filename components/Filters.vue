<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  gender: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="h-full min-h-screen w-full border-r-2 border-gray-300">
    <Filter :filters="props.categories" title="Category" />
    <Filter :filters="props.gender" title="Gender" />
  </div>
</template>
