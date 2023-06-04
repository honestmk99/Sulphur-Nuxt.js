


<template>
  <section>
    <component
      :slice="slice"
      :key="index"
      v-for="(slice, index) in $props.slices"
      :is="slice._type"
    />
  </section>
</template>



<style lang="scss" scoped>
</style>

<script>
import doctorHighlight from "~/components/slices/doctorHome.vue";
import collage from "~/components/slices/imageCollage.vue";
import contactForm from "~/components/slices/formSection.vue";
import imageRow from '~/components/slices/imageRow.vue';
import pageBody from '~/components/slices/pageBody.vue'
import formSectionImage from '~/components/slices/formSectionImage.vue'
import allDocs from '~/components/slices/allDoctors.vue'
import mapComp from '~/components/slices/map.vue'

export default {
  components: {
    doctorHighlight,
    collage,
    contactForm,
    imageRow,
    pageBody,
    formSectionImage,
    allDocs,
   'mapSection' : mapComp
  },

 

  props: ["slices"]
};
</script>