<script>
export default {
  data() {
    return {
      navButtons: [
        { pageUrl: "/", text: "Home" },
        { pageUrl: "/shoes", text: "Shoes" },
        { pageUrl: "/hats", text: "Hats" },
      ],
    };
  },
};
</script>

<template>
  <div class="h-24 p-3 w-full bg-green-800 flex flex-row justify-between">
    <div class="p-8 border-4 border-white rounded-lg flex items-center text-white text-2xl font-bold">
        <p>Nice Apparel</p>
    </div>
    <div class="flex flex-row gap-10 h-full items-center mx-3">
      <NavButton
        v-for="button in navButtons"
        :key="button.text"
        :pageUrl="button.pageUrl"
        :text="button.text"
      />
    </div>
  </div>
</template>
