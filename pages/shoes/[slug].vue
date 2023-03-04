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
    let shoe = Shoes({ shoes: { id: slug } }).shoes[0];
    let imageURLs = CreateURLs(shoe.images);
    return { slug, imageURLs, shoe };
  },
  data() {
    return {
      primaryIdx: 0,
      primaryImage: this.imageURLs[0],
      selectedSize: 6,
    };
  },
  methods: {
    ChangeImage(idx) {
      this.primaryIdx = idx;
      this.primaryImage = this.imageURLs[idx];
    },
    ChangeSize(size) {
      this.selectedSize = size;
      history.pushState(
        {},
        null,
        this.$route.path + "?size=" + this.selectedSize
      );
    },
    AddToCart() {
      let items = localStorage.getItem("items");
      items = parseInt(items);
      localStorage.setItem("items", items + 1);
      this.UpdateCartState();
    },
    UpdateCartState() {
      this.$emit("updateCart");
    },
  },
};

const baseURL = "/assets/images/nikeairjordan1/";
</script>

<template>
  <div>
    <div class="flex flex-row">
      <div class="display-grid">
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
        <div class="h-full relative">
          <img :src="primaryImage" class="h-full object-contain" />
        </div>
      </div>
      <div class="h-fit w-96 overflow-hidden">
        <p>{{ shoe.name }}</p>
        <p>Price ${{ shoe.price }}</p>
        <Sizes
          :sizes="[6, 7, 8, 9, 10, 11, 12]"
          :selectedSize="selectedSize"
          @update="ChangeSize"
        />
        <button
          class="text-white w-full h-12 rounded-full bg-gray-900 hover:bg-gray-700"
          @click="AddToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
