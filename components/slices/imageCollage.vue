<template>
  <section class="imageCollage">
    <div class="imageCollage__Images">
      <div
        v-for="(image, index) in slice.images"
        :key="index"
        class="imageCollage__ImgWrapper"
        :class="'imgWrapper' + (index + 1)"
      >
        <img
          :src="$urlFor(image)"
          :alt="image.alt"
          class="imageCollage__Image"
        />
      </div>
    </div>

    <p>{{ slice.text }}</p>
  </section>
</template>

<style lang="scss" scoped>
.imageCollage {
  padding-left: $smallBumper;
  padding-right: $smallBumper;
  padding-top: 3rem;
  padding-bottom: 3rem;

  p {
    font-size: 3.8rem;
    color: $black;
   
    font-family: questa-slab, serif;
font-weight: 500;
font-style: italic;
  }
}

.imageCollage__Images {
  display: none;
}

@media only screen and (min-width: 1024px) {
  .imageCollage {
    height: auto;
    position: relative;

    padding-top: 20rem;
    padding-bottom: 20rem;

    padding-right: 0;
    padding-left: 0;

    p {
      z-index: 1;
      display: block;
      position: relative;
      background-color: rgba(white, 0.8);

      padding-top: 5.6rem;
      padding-bottom: 5.6rem;

      padding-right: 8.8rem;
      padding-left: 8.8rem;

      width:75%;

      margin-right: 0;
      margin-left: auto;
    }
  }
  .imageCollage__Images {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;

    z-index: 0;
  }

  .imageCollage__ImgWrapper {
    height: 50%;
    position: relative;

    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      min-height: 100%;
      width: 100%;
    }
  }

  .imgWrapper1,
  .imgWrapper4 {
    width: 55%;
  }

  .imgWrapper2,
  .imgWrapper3 {
    width: 45%;
  }
}
</style>

<script>
export default {
  props: ["slice"],

  mounted() {
    console.log(this.$props);
  }
};
</script>
