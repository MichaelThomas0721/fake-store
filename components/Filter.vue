<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      query: {},
    };
  },
  methods: {
    ToggleFilter(filterType, filter) {
      if (!this) return;
      if (!this.$route) return;
      let query = this.$route.query;
      let newQuery = {};
      if (query[filterType] == filter) {
        for(const property in query) {
          if(property != filterType) {
            newQuery[property] = query[property];
          }
        }
        this.$router.replace({ query: { ...newQuery } });
      } else {
        newQuery[filterType] = filter;
        this.$router.replace({ query: { ...query, ...newQuery } });
      }
    },
  },
  watch: {
    $route: {
      handler: function () {
        let query = this.$route.query;
        this.query = query;
      },
      deep: true,
    },
  },
  mounted() {
    this.query = this.$route.query;
  },
};
</script>

<template>
  <div class="m-5 flex flex-col gap-1">
    <p class="text-lg font-semibold">{{ title }}</p>
    <button
      v-for="filter in filters"
      @click="ToggleFilter(title, filter)"
      :class="`text-lg text-left ${
        this ? (this.query[title] == filter ? 'font-bold' : '') : ''
      }`"
    >
      {{ filter }}
    </button>
  </div>
</template>
