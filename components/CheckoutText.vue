<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="flex flex-row justify-between">
    <p>{{ title }}</p>
    <p>{{ value }}</p>
  </div>
</template>
