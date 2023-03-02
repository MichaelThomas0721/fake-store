<script setup>
const props = defineProps({
    filters: ({
        type: Array,
        required: true
    }),
    title: ({
        type: String,
        required: true
    })
})
</script>

<template>
  <div class="m-5">
    <p class="text-lg font-semibold">{{ props.title }}</p>
    <p
      v-for="filter in props.filters"
      class="text-lg"
    >
      {{ filter }}
    </p>
  </div>
</template>
