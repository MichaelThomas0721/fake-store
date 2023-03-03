<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    primaryIdx: {
      type: Number,
      required: true,
    },
  },
  methods: {
    UpdateParentState() {
      this.$emit("update", this.index);
    },
  },
};
</script>

<template>
  <div
    class="h-20 w-20 object-cover overflow-hidden rounded-sm flex justify-center relative"
    @mouseover="UpdateParentState(this.index)"
  >
    <div
      :class="`w-full h-full bg-black bg-opacity-50 z-10 absolute ${
        primaryIdx == index ? '' : 'hidden'
      }`"
    />
    <img :src="image" class="h-[120%] w-[120%] aspect-square object-contain" />
  </div>
</template>
