<script>
export default {
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    selectedSize: {
      type: Number,
      required: true,
    },
  },
  methods: {
    UpdateParentState(size) {
      this.$emit("update", size);
    },
  },
};
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <button
      v-for:="size in sizes"
      :key="size"
      :class="`text-2xl  border-2 border-gray-300 hover:border-gray-700 bg-gray-200 ${
        selectedSize == size ? 'font-bold text-gray-800' : 'font-semibold text-gray-500'
      }`"
      @click="() => UpdateParentState(size)"
      class="w-24 h-10 bg-slate-100 rounded-md m-2"
    >
      {{ size }}
    </button>
  </div>
</template>
