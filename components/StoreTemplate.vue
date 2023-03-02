<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="h-full w-full text-black">
    <div class="max-w-36 aspect-square relative">
        <img :src="props.items[0].image" class="w-full aspect-square object-contain"/>
    </div>
    
    <p>TEST</p>
  </div>
</template>
