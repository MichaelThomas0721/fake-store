<script>
import Shoes from "~/data/shoes";
export default {
  data() {
    return {
      shoes: Shoes(),
      pageTitle: "Mens Shoes",
    };
  },
};
</script>

<template>
  <StoreTemplate
    :categories="shoes.categories"
    :gender="shoes.gender"
    :items="shoes.shoes"
    :pageTitle="pageTitle"
  />
</template>