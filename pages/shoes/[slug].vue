<script>
import Shoes from "~/data/shoes";

function CreateURLs(length) {
  let images = [];
  for (let i = 1; i <= length; i++) {
    images.push(baseURL + i + ".png");
  }
  return images;
}

export default {
  setup() {
    const route = useRoute();
    let slug;
    if (route.params.slug) {
      slug = route.params.slug;
    }
    let shoe = Shoes({ shoes: { id: slug }})
    let imageURLs = CreateURLs(8);
    return { slug, imageURLs, shoe };
  },
  data() {
    return {
      primaryIdx: 0,
      primaryImage: this.imageURLs[0],
    };
  },
  methods: {
    ChangeImage(idx) {
      this.primaryIdx = idx;
      this.primaryImage = this.imageURLs[idx];
    },
  },
  mounted() {
    console.log(this.shoe);
  }
};

const baseURL = "/assets/images/nikeairjordan1/";
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
          @update="ChangeImage"
        />
      </div>
      <div class="bg-slate-500">
        <img :src="primaryImage" class="h-[650px] object-contain" />
      </div>
    </div>
  </div>
</template>
