<template>
  <div>
    <hero :hero="page.hero" />
    <sliceZone :slices="page.sliceZone" />

    <procedureDoctors :physicians = "page.physicians" v-if = "page.procedure && page.physicians.length > 0" />
  </div>
</template>


<style lang="scss" scoped>
</style>


<script>
import { pageQuery } from "~/utils/queries.js";

import hero from "~/components/global/hero.vue";
import sliceZone from "~/components/global/sliceZone.vue";
import procedureDoctors from '~/components/slices/procedureDoctors.vue'
export default {
  async asyncData({ params, $sanity }) {
    const query = `*[_type == 'page' && slug.current == '${params.page}']`;

    const page = await $sanity.fetch(pageQuery(params.page));

    return { page };
  },

  components: {
    hero,
    sliceZone,
    procedureDoctors
  },

  
};
</script>