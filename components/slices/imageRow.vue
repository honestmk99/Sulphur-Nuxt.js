<template>
  <div class="imageRow">
    <div v-for="(image, index) in slice.images" :key="index" class="imgWrapper">
      <img :src="$urlFor(image.asset._ref)" :alt="image.alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="scss" scoped>
.imageRow {
  width: 100%;
}

.imgWrapper {
  img {
    width: 100%;
  }
}

@media only screen and (min-width: 1024px) {
  .imageRow {
    display: flex;
    flex-direction: row;

    align-items: stretch;

    height:28.8rem;

    width:calc(100vw - #{$bumper});
    margin-right: 0;
    margin-left: auto;

    .imgWrapper {
      overflow: hidden;
      flex:1;
      img {
        min-height:100%;
        width:100%;
      }
    }
  }
}
</style>
