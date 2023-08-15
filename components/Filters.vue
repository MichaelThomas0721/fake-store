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
  <div class="md:min-h-screen h-full w-full md:w-fit border-r-2 border-gray-300 flex-shrink-0">
    <Filter :filters="categories" title="Category" />
    <Filter :filters="gender" title="Gender" />
  </div>
</template>
