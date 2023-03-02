<script>
import shoes from "~/data/shoes";
export default {
  data() {
    return {
      shoes: shoes,
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
