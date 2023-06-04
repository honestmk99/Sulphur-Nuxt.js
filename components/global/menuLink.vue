<template>
  <div class="menuLink">
    <nuxt-link :to = "'/' + link.linkInternal.slug" v-if="!link.external">{{ link.display }}</nuxt-link>
    <a :href = "link.linkExternal" v-if="link.external">{{ link.display }}</a>
  </div>
</template>

<script>
export default {
  props: ["link"],

  
};
</script>

<style lang="scss" >




</style>
