<script setup>
import { ref } from "vue";
const route = useRoute();

let slug;
if (route.params.slug) {
  slug = route.params.slug;
}

const images = import.meta.glob("@/images/nikeairjordan1/*.png");
const imageURLs = Object.keys(images);
let primaryIdx = 0;
let primaryImage = ref(imageURLs[0]);

function ChangeImage(idx) {
  this.primaryImage = imageURLs[idx];
  this.primaryIdx = idx;
}
</script>

<template>
  <div>
    <p class="text-6xl text-red-600">YUH:{{ slug }}</p>
    <div class="flex flex-row">
      <div class="flex flex-col gap-1">
        <div
          v-for="(image, index) in imageURLs"
          :key="image"
          class="h-20 w-20 object-cover overflow-hidden flex justify-center relative"
          v-on:mouseover="() => ChangeImage(index)"
        >
          <div
            :class="`w-full h-full bg-black bg-opacity-50 z-10 absolute ${
              primaryIdx == index ? '' : 'hidden'
            }`"
          />
          <img
            :src="image"
            class="h-[120%] w-[120%] aspect-square object-contain"
          />
        </div>
      </div>
      <div class="bg-slate-500">
        <img :src="primaryImage" class="h-[650px] object-contain" />
      </div>
    </div>
  </div>
</template>
