<script>
import DataFetcher from "~/data/dataFetcher";
export default {
  setup() {
    let popularItems = DataFetcher({ type: "shoes", final: true });
    return { popularItems };
  },
  data() {
    return {
      scrollElement: null,
      scrolling: false,
    };
  },
  mounted() {
    this.scrollElement = this.$refs.grabscroll;
  },
  methods: {
    ScrollHandler(e) {
      e.preventDefault();
      let isDown = true;
      let scrollElement = this.scrollElement;
      let startX = e.pageX - scrollElement.offsetLeft;
      let scrollLeft = scrollElement.scrollLeft;
      scrollElement.addEventListener("mouseleave", () => {
        isDown = false;
        this.scrolling = false;
      });
      scrollElement.addEventListener("mouseup", () => {
        isDown = false;
        this.scrolling = false;
      });
      scrollElement.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        this.scrolling = true;
        e.preventDefault();
        const x = e.pageX - scrollElement.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast (1 = normal)
        scrollElement.scrollLeft = scrollLeft - walk;
      });
    },
  },
};
</script>

<template>
  <h3 class="text-center text-3xl font-semibold my-4">Popular</h3>
  <div
    ref="grabscroll"
    class="w-full overflow-x-scroll mb-5 scrollbar-hide"
    @mousedown="ScrollHandler"
  >
    <div class="flex flex-row gap-6 w-fit">
      <HomePopularItem
        v-for="popularItem in popularItems"
        :scrolling="scrolling"
        :popularItem="popularItem"
      />
    </div>
  </div>
</template>
