<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    gender: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="h-full min-h-screen w-full border-r-2 border-gray-300">
    <Filter :filters="categories" title="Category" />
    <Filter :filters="gender" title="Gender" />
  </div>
</template>
