<template>
  <!--Dont display if loading -->
  <section v-if="!$fetchState.pending" class="allDocs maxWidth">
    <h4 class="allDocs__Header allDocs__Header--Docs">OUR SURGICAL TEAM</h4>
    <!--Docs--->
    <person 
    v-for="doctor in physicians" 
    :key="doctor.name" 
    :person="doctor" />

    <!--Clinic--->

    <h4 class="allDocs__Header allDocs__Header--Clinic">Clinic Staff</h4>
    <person
      class="person--Clinic"
      v-for="doctor in clinic"
      :key="doctor.name"
      :person="doctor"
    />
  </section>
</template>

<style lang="scss" scoped>
.allDocs__Header {
  font-family: questa-slab, serif;
font-weight: 700;
font-style: normal;
  font-size: 3.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.allDocs__Header--Clinic {
  color: $grey;
}

@media only screen and (min-width: 1024px) {
  .allDocs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .allDocs__Header {
    display: block;
    width: 100%;
    color: $grey;
  }
}
</style>

<script>
import { physQuery, clinQuery } from "~/utils/queries.js";
import person from "~/components/global/person.vue";
export default {
  //Fetch Physicians and Clinic staff
  async fetch() {
    this.physicians = await this.$sanity.fetch(physQuery);
    this.clinic = await this.$sanity.fetch(clinQuery);
  },

  data() {
    return {
      physicians: [],
      clinic: []
    };
  },

  components: {
    person
  },

  mounted() {
    console.log(this);
  }
};
</script>
