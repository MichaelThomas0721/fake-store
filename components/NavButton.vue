<script>
export default {
  props: {
    pageUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <a class="text-white hover:text-slate-300 text-md md:text-xl font-semibold" :href="pageUrl"> {{ text }}</a>
</template>
