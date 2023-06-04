<template>
  <section class="procedureDoctors">
    <!--Title-->
    <h6 >PROCEDURE PHYSICIANS</h6>

    <dropDown class = "procedure__DD" @changed="ddUpdate" :physicians="physicians" />

    <div     :class="compClass(index)" :key="index" v-for="(doctor, index) in physicians" class="procedure__Person">
      <person
        :person="doctor"
       
      
       
      />

      <nuxt-link class="button button--black" to="/about">learn more</nuxt-link>
    </div>
  </section>
</template>

<script>
import person from "~/components/global/person.vue";
import dropDown from "~/components/global/dropDown.vue";
export default {
  props: ["physicians"],

  data() {
    return {
      current: 0
    };
  },

  components: {
    person,
    dropDown
  },

  methods: {
    ddUpdate(value) {
      this.current = value;
      console.log(this.current);
    },

    compClass(index) {
      return this.current == index ? "" : "hidePerson";
    }
  },

  mounted() {
    console.log(this.$props.physicians);
  }
};
</script>

<style lang="scss" scoped>
.procedureDoctors {
  background: rgb(118, 149, 170);
  background: linear-gradient(
    180deg,
    rgba(118, 149, 170, 0.39) 0%,
    rgba(57, 136, 185, 0.39) 100%
  );

  padding-left: $smallBumper;
  padding-right: $smallBumper;
  padding-top: 5rem;
  padding-bottom: 5rem;

  margin-top: 2rem;

  h6 {
    font-size: 3.5rem;
    font-family: questa-slab, serif;
    font-weight: 700;
    font-style: normal;
    color: $black;

    margin-bottom: 2rem;
  }
}

.hidePerson {
  display: none;
}

@media only screen and (min-width: 1024px) {


    .procedureDoctors {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
        align-items: flex-start;

        h6 {
            font-size:4rem;
            width:100%;
            display: block;
        }
    }

    .procedure__DD {
        display: none;
    }

    .procedure__Person {
        width:27%;
    }

    .hidePerson {
        display: block;
    }




}
</style>
