<script setup>

</script >

<script>
// import { ref } from "vue";
// const route = useRoute();

// let slug;
// if (route.params.slug) {
//   slug = route.params.slug;
// }

const baseURL = "/images/nikeairjordan1/";

function CreateURLS(length) {
  let images = [];
  for (let i = 1; i <= length; i++) {
    images.push(baseURL + i + ".png");
  }
  return images;
}

const imageURLs = CreateURLS(8);
let primaryIdx = 0;
let primaryImage = ref(imageURLs[0]);

function ChangeImage(idx) {
  this.primaryIdx = idx;
  this.primaryImage = imageURLs[idx];
}

export default {
  data() { 
    return {
      primaryIdx,
      primaryImage,
      imageURLs,
    }
  },
  methods: {
    ChangeImage,
  }
}
</script>

<template>
  <div>
    <div class="flex flex-row">
      <div class="flex flex-col gap-1">
        <SmallPreview
          v-for="(image, index) in imageURLs"
          :key="image"
          :image="image"
          :index="index"
          :primaryIdx="primaryIdx"
          :ChangeImage="ChangeImage"
        />
      </div>
      <div class="bg-slate-500">
        <img :src="primaryImage" class="h-[650px] object-contain" />
      </div>
    </div>
  </div>
</template>
