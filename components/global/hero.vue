<template>
  <section :class="headingClass" class="hero__Wrapper">
    <div :style="{ '--bgImage': `url(${heroImageUrl}` }" class="hero">
      <!--Header---->
      <div class="hero__Title">
        <!--Logo for home page--->
        <img
          class="hero__Logo"
          v-if="isHome && !$fetchState.pending"
          :src="$urlFor(logo.heroLogo)"
          :alt="logo.heroLogo.alt"
        />

        <h1 class="heroHeader">{{ hero.heroHeader }}</h1>
      </div>

      <!---Phone Number --->
      <div class="hero__CTA">
        <a href="tel:337-527-6363">337-527-6363</a>
      </div>
    </div>

    <!---Paragraph (Hide if Contact)--->
    <div v-if="!isContact" class="hero__Paragraph">
      <h2 v-if="!isHome && hero.heroSubHeader" class="hero__Subheader">
        {{ hero.heroSubHeader }}
      </h2>

      <SanityContent class="sanityText" :blocks="hero.heroDesc" />
      <!--<p>{{ hero.heroDesc }}</p>-->
    </div>

    <!--Contact anchor if interior (Hide if Contact)-->
    <div v-if="!hidePhone" class="hero__CTA">
      <a href="#CONTACT">CONTACT US</a>
    </div>

    <!--Form if Contact Page -->
    <form-section :heading="hero.heroSubHeader" v-if="isContact" />

    <!--Doctors if Home --->

    <doctor-home v-if="isHome" />
  </section>
</template>

<script>
import formSection from "~/components/slices/formSection.vue";
import doctorHome from "~/components/slices/doctorHome.vue";
import { logoQuery } from "~/utils/queries.js";
export default {
  components: { formSection, doctorHome },
  props: {
    hero: {
      required: true
    }
  },

  async fetch() {
    this.logo = await this.$sanity.fetch(logoQuery);
  },

  data() {
    return {
      logo: {}
    };
  },

  computed: {
    //Url for bg image
    heroImageUrl() {
      const url = this.$urlFor(this.$props.hero.heroImg);
      return url;
    },

    //Hide paragraph if contact page
    isContact() {
      return this.$props.hero.style == "Contact";
    },

    //Check if home page
    isHome() {
      return this.$props.hero.style == "Home";
    },

    //Hide Phome # if home or contact mobile
    hidePhone() {
      return (
        this.$props.hero.style == "Home" || this.$props.hero.style == "Contact"
      );
    },

    //Class for heading if home page
    headingClass() {
      if (this.$props.hero.style == "Home") {
        return "heading--Home";
      } else if (this.$props.hero.style == "Contact") {
        return "heading--Contact";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$overlap: 15rem;
.hero {
  background-image: var(--bgImage);
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), var(--bgImage);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90vh;

  justify-content: flex-end;
  display: flex;
  flex-direction: column;
}

//Hide on mobile
.hero__Logo {
  display: none;
}

.hero__Title {
  padding-left: $smallBumper;
  padding-right: $smallBumper;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: rgba($black, 0.38);
  h1 {
    color: white;
    font-size: 4.1rem;
    text-transform: uppercase;
    font-family: questa-slab, serif;

    font-weight: 700;

    font-style: normal;
  }
}

.hero__CTA {
  background-color: $grey;
  color: white;
  font-size: 3rem;

  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  text-align: center;
  a {
    color: white;
  }
}

.hero__Paragraph {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: $smallBumper;
  padding-left: $smallBumper;
  background-color: $black;

  .sanityText {
    color: white;
  }
}

.hero__Subheader {
  font-size: 3rem;
  color: $grey;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-family: questa-slab, serif;
  font-weight: 700;
  font-style: normal;
}

@media only screen and (min-width: 1024px) {
  .hero__CTA {
    display: none;
  }

  .hero__Logo {
    display: block;
    width: 25rem;
    height: auto;
  }

  .hero {
    height: calc(100vh - 15rem);
    min-height: 766px;
  }

  .hero__Title {
    width: calc(100vw - 2 * #{$bumper});
    margin: 0 auto;
  }

  .hero__Paragraph {
    width: calc(100vw - #{$bumper});
    margin-left: auto;
    margin-right: 0;
    padding-right: $bumper;
    min-height: 30rem;
  }

  .hero__Title {
    background-color: transparent;
    margin-bottom: $overlap;
    padding-left: 0;
    padding-bottom: 3rem;
    padding-top: 0rem;

    h1 {
      font-size: 6.5rem;
    }
  }

  .hero__Paragraph {
    margin-top: calc(-1 * #{$overlap});

    padding-left: 6rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  //Special if Home Page
  .heading--Home {
    background: rgb(118, 149, 170);
    background: linear-gradient(
      180deg,
      rgba(118, 149, 170, 0.39) 100vh,
      rgba(57, 136, 185, 0.39) 100%
    );

    .hero__Paragraph {
      width: calc(100vw - 2 * #{$bumper}) !important;
      margin: 0 auto;
      margin-top: calc(-1 * #{$overlap});

      padding-right: 6rem;
    }

    .hero__Title {
      background-color: rgba($grey, 0.4);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      padding-left: 6rem;
      padding-right: 6rem;
      padding-top: 3rem;
      padding-bottom: 3rem;

      h1 {
        margin-left: 3rem;
      }
    }
  }

  // Special Styling Form Page

  //In form section comp for scope reasons
}
</style>
