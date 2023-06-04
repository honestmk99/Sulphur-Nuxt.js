<template>
  <section class="formImage">
    <!--Image-->

    <div class="imgWrapper">
      <img
        :src="$urlFor(slice.image.asset._ref)"
        :alt="slice.image.asset.alt"
      />
    </div>

    <!--Form--->
    <contact-form />
  </section>
</template>

<style lang="scss" scoped>


form {
    padding-left:$smallBumper;
    padding-right: $smallBumper;
    margin-top: 2.4rem;
}

@media only screen and (min-width: 1024px) {

  .formImage {
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 6rem;
    padding-left: $bumper;

    padding-top: 6rem;
    padding-bottom: 7rem;

    form {
      order:1;
      padding: 0;
      width:45%;
      margin-top: 0;
    }

    .imgWrapper {
      order:2;
       width:45%;
    }
  }


}

</style>

<script>
import contactForm from "~/components/global/contactForm.vue";

export default {
  props: ["slice"],
  components: {
    contactForm
  },

  
};
</script>
