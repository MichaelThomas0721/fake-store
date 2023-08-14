<script>
import Shoes from "~/data/shoes";
export default {
  data() {
    return {
      shoes: Shoes(),
    };
  }
};
</script>

<template>
  <StoreTemplate :categories="shoes.categories" :gender="shoes.gender" :items="shoes.shoes" />
</template>