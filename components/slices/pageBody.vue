<template>
  <section class="pageBody maxWidth">

    <!--Left-->
    <div class="pageBody__Col">
      <h4 class="pageBody__Header pageBody__Header--L">{{ slice.headerL }}</h4>

            <SanityContent class="sanityText" :blocks="slice.textL" />
     
    </div>

    <!--Right--->
    <div class="pageBody__Col">
      <h4 class="pageBody__Header pageBody__Header--R">{{ slice.headerR }}</h4>
      <p class="pageBody__Text">{{ slice.textR }}</p>
      <cc v-if ="$props.slice.cc"/>
    </div>
  </section>
</template>

<script>
import cc from '~/components/global/careCredit.vue'
export default {
  props: ["slice"],

  components: {
    cc
  },

  mounted() {
    console.log(this.$props.slice)
  }
};
</script>

<style lang="scss" scoped>

.pageBody__Header {
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    font-size:3.5rem;
    text-transform: uppercase;
    font-family: questa-slab, serif;
font-weight: 700;
font-style: normal;
}

.pageBody__Text {
    margin-bottom: 3rem;
}

.pageBody--Header--L {
    color:$black;
}
.pageBody__Header--R {
    color:$grey;
}

@media only screen and (min-width: 1024px) {

.pageBody {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  padding-top: 4rem;
  padding-bottom: 4rem;
}

.pageBody__Col:first-of-type {
  width:55%;
}

.pageBody__Col:last-of-type {
  width:35%;
}

.pageBody__Header {
  margin-top: 0;
}

.pageBody__Text:last-of-type {
  margin-bottom: 3.6rem;
}


}
</style>

<style lang="scss">
  .pageBody__Col .sanityText,
  .hero__Paragraph .sanityText p {

    a {
      font-size: 1.8rem;
      color: white;
      border: 0;
      background-color: #456C86;
      padding-left: 2.6rem;
      padding-right: 2.6rem;
      padding-top: 1.3rem;
      padding-bottom: 1.3rem;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
    }
  }
</style>