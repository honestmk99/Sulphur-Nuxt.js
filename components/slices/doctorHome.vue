<template>
  <section v-if="!$fetchState.pending" class="doctorHighlight">
    <!--Dropdown--->
    <div @click="expand = !expand" class="ddMenu doctorHighlight__DD">
      <!--Selected-->
      <div class="dd__Item--Selected dd__Item">
        <p>{{ selectedDoctor.name }}<i class = "ddArrow"></i></p>
        <p>{{ selectedDoctor.specialty }}</p>
      </div>

      <!--List-->
      <div
        :class="!expand ? 'hideExpand' : ''"
        @click="current = index"
        v-for="(doctor, index) in physicians"
        :key="index"
        class="dd__Item dd__Item--List"
      >
        <p>{{ doctor.name }}</p>
        <p>{{ doctor.specialty }}</p>
      </div>
    </div>

    <!--Image-->
    <div class="doctorHighlight__imgWrapper imgWrapper imgWrapper--Headshot">
      <img :src="imageUrl" :alt="altTag" />
    </div>

    <!--text-->

    <div class="doctorHighlight__Text">
      <h3>{{ selectedDoctor.name }}</h3>
      <h4>{{ selectedDoctor.specialty }}</h4>
      <p class="doctorHighlight__bio">{{ selectedDoctor.Bio }}</p>

      <!--Button-->
      <nuxt-link class="button button--black" to='/about'>learn more</nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.doctorHighlight {
  padding-left: $smallBumper;
  padding-right: $smallBumper;
  padding-top: 3rem;
  padding-bottom: 3rem;

  

  h3 {
    margin-top: 1.8rem;
    font-size: 3.5rem;
    font-family: questa-slab, serif;
    font-weight: 700;
    font-style: normal;
  }

  h4 {
    font-style: italic;
    font-size: 3.5rem;
    margin-bottom: 1.8rem;
    font-family: questa-slab, serif;
    font-weight: 300;
    font-style: italic;
  }
}

.dd__Item {
  p {
    font-family: questa-slab, serif !important;
    font-weight: 300;
    font-style: normal;
  }
}

.doctorHighlight__bio {
  color: $blue;
  margin-bottom: 1.8rem;
  
}

@media only screen and (min-width: 1024px) {
  //Hide Selected
  .dd__Item--Selected {
    display: none;
  }

  //Show in List
  .dd__Item--List {
    display: block;
  }

  .doctorHighlight__imgWrapper {
    order: 1;
    display: block;
    border-radius: 100;
    width: 37.2rem;
    //31%;

    margin: 0;
    align-self: flex-end;

    position: relative;
    height: auto;

    img {
      width: 100%;
      min-height: 0;
      height: auto;
    }
  }

  .doctorHighlight__Text {
    order: 2;
    width: 52.5rem;

    padding-left:2.5em;
    padding-right: 2.5em;

    //43%;

    padding-bottom: 5.1rem;

    h3,
    h4 {
      font-size: 3.8rem;
    }
  }

  .ddMenu {
    order: 3;
    margin-bottom: 5.1rem;
    border: 0;
    width: 19rem;
    padding: 0;
  }

  .dd__Item {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    margin: 0;
    border-top: 1px solid $black;
    p {
      font-size: 2.2rem;
    }
  }

  .dd__Item:last-of-type {
    border-bottom: 1px solid $black;
  }

  .doctorHighlight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    padding-left: $bumper;
    padding-right: $bumper;
    padding-bottom: 0;
  }

  .selected {
    font-weight: bold;
  }
}
</style>

<script>
import { physQuery } from "~/utils/queries.js";
export default {
  async fetch() {
    this.physicians = await this.$sanity.fetch(physQuery);
  },

  data() {
    return {
      physicians: [],
      current: 0,
      expand: false
    };
  },

  computed: {
    imageUrl() {
      return this.$urlFor(this.physicians[this.current]?.headshot);
    },

    altTag() {
      return this.physicians[this.current]?.headshot.alt;
    },

    selectedDoctor() {
      return this.physicians[this.current];
    }
  }
};
</script>
