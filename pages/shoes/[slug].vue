<script>
import DataFetcher from "~/data/dataFetcher";

function CreateURLs(length, imageFolder) {
  let images = [];
  for (let i = 1; i <= length; i++) {
    images.push("/images" + imageFolder + "/" + i + ".png");
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
    let shoe = DataFetcher({ type: "shoes", value: { type: 'id', value: slug, final: true } },)[0];
    let imageURLs = CreateURLs(shoe.images, shoe.imageFolder);
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
      if (!localStorage) return;
      // localStorage.setItem("items", JSON.stringify([])); // Clear cart
      let items = JSON.parse(localStorage.getItem("items"));
      if (items) {
        items = this.CartManager(items);
      } else {
        items = this.CartManager([]);
      }
      localStorage.setItem("items", JSON.stringify(items));

      this.UpdateCartState();
    },
    CartManager(items) {
      let foundShoe = items.find(
        (item) => item.id == this.shoe.id && item.size == this.selectedSize
      );
      if (foundShoe) {
        foundShoe.quantity += 1;
      } else {
        items.push({ id: this.shoe.id, quantity: 1, size: this.selectedSize });
      }
      return items;
    },
    UpdateCartState() {
      this.$emit("updateCart");
    },
  },
};
</script>

<template>
  <div class="flex flex-row justify-center items-center mt-5">
    <div class="flex flex-row flex-wrap gap-8">
      <div class="display-grid h-fit">
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
