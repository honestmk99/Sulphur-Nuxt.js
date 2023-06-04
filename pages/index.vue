<template>
  <div>
    <Hero :hero="home.hero"></Hero>
    <SliceZone :slices="home.sliceZone" />
  </div>
</template>

<script>
import { homeQuery } from "~/utils/queries.js";

import Hero from "~/components/global/hero.vue";
import SliceZone from "~/components/global/sliceZone.vue";
export default {
  async asyncData({ $sanity, params }) {
    const home = await $sanity.fetch(homeQuery);

    return { home };
  },

  components: { Hero, SliceZone },
  
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
