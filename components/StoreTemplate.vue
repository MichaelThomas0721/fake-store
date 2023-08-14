<script>
function Filter(data, query) {
  for (const property in query) {
    data = data.filter((item) => {
      return item[property] == query[property];
    });
  }
  return data;
}
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    gender: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    let query = route.query;
    let displayItems = props.items;
    displayItems = Filter(displayItems, query);
    return { query, displayItems };
  },
  methods: {
    ToggleFilter(filtertype, filter) {
      let query = {};
      query[filtertype] = filter;
      this.$router.push({ query: query });
    },
  },
  watch: {
    $route: {
      handler: function () {
        let query = this.$route.query;
        this.query = query;
        this.displayItems = Filter(this.items, query);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="">
    <h1 class="text-6xl font-bold text-center p-12 border-b-[1px] border-gray-300">
      {{ (query?.["Gender"] || "") + " " + (query?.["Category"] || "") }}
    </h1>
    <div class="h-full w-full text-black store-grid">
      <Filters :categories="categories" :gender="gender" />

      <div class="flex flex-row flex-wrap gap-5 p-5">
        <Item v-for="item in displayItems" :key="item.name" :item="item" />
      </div>
    </div>
  </div>
</template>
