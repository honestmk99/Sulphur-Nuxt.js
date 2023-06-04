<template>
  <!--Check if fetching -->
  <div v-if="!$fetchState.pending" class="cc">
    <img
      :src="$urlFor(cc.image.asset._ref)"
      :alt="cc.image.alt"
      class="cc__Image"
    />
    <a :href="cc.link" class="button button--Fill--blue">Apply now</a>
  </div>
</template>

<style lang="scss" scoped>
.cc {
  img {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  a {
    margin-left: auto;
    margin-right: 0;
    display: block;
    width: max-content;
    margin-bottom: 4.5rem;
  }
}
</style>

<script>
import { ccQuery } from "~/utils/queries.js";
export default {
  async fetch() {
    this.cc = await this.$sanity.fetch(ccQuery);
  },

  data() {
    return {
      cc: {}
    };
  },

  mounted() {
    console.log(this.cc);
  }
};
</script>
