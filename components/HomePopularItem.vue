<script>
export default {
  props: {
    popularItem: {
      type: Object,
      required: true,
    },
    scrolling: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      redirecting: false,
    };
  },
  methods: {
    Redirect() {
      if (!this.scrolling) {
        window.location.href = "/shoes/" + this.popularItem.id;
      }
    },
    StartRedirect() {
      this.redirecting = true;
    },
    EndRedirect() {
      if (this.redirecting) {
        this.Redirect();
      }
    },
  },
  watch: {
    scrolling: {
      handler: function () {
        if (this.redirecting) {
          this.redirecting = false;
        }
      },
      deep: true,
    },
  },
};
</script>
<template>
  <button
    @mousedown="StartRedirect"
    @mouseup="EndRedirect"
    class="h-96 aspect-square bg-gray-[#deddcf] shadow-lg overflow-hidden rounded-sm"
  >
    <img
      class="h-[90%] w-full object-cover"
      :src="'/assets/images' + popularItem.imageFolder + '/1.png'"
    />
    <p class="">{{ popularItem.name }}</p>
  </button>
</template>
