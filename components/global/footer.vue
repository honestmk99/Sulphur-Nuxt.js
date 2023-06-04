<template>
  <footer class="maxWidth">

 
    <!--Icon--->
    <div class="footer__Col">
      <img
        :src="$urlFor(footer.footerLogo)"
        :alt="footer.footerLogo.alt"
        class="footer__Icon"
      />
    </div>

       <!--Non proc pages Desktop Only ---> 
    <div class="footer__Col footer__Col--Desktop footer__Col--Up">

      <menu-link
        v-for="(link, index) in pages"
        :link="link"
        :key="index"
      />

    </div>

    <!--Location-->
    <div class="footer__Col">
      <p class="footer__Hading">LOCATION</p>
      <p class="footer__Address footer__Text menuLink">{{ footer.address }}</p>
      <p class="footer__Address footer__Text menuLink">{{ footer.address2 }}</p>
      <a :href="'tel:' + footer.phone" class="footer__Phone menuLink">{{
        footer.phone
      }}</a>
      <a href="" class="footer__AddressLink footer__Text menuLink"
        >Directions</a
      >
    </div>


    <!--Procedures Desktop Only-->

    <div class="footer__Col footer__Col--Desktop">

       <p class="footer__Hading">PROCEDURES</p>

      <menu-link
        v-for="(link, index) in procedures"
        :link="link"
        :key="index"
      />

    </div>

    <!--Social-->
    <div class="footer__Col">
      <p class="footer__Hading">CONNECT WITH US</p>

      <img
        :key="index"
        v-for="(social, index) in footer.socials"
        :src="$urlFor(social.icon)"
        :alt="social.socialname"
        class="footer__Social"
      />
    </div>

    <!--Helpful Links--->
    <div class="footer__Col">
      <p class="footer__Hading">HELPFUL LINKS</p>
      <menu-link
        v-for="(link, index) in footer.help"
        :link="link"
        :key="index"
      />
    </div>
  </footer>
</template>

<script>
import menuLink from "~/components/global/menuLink.vue";
import {pageMenuQuery, procMenuQuery} from '~/utils/queries.js'

export default {
  props: ["footer"],

  components: {
    menuLink
  },

  data() {
    return {
      procedures:{},
      pages:{}
    }
  },

  async fetch() {
    this.procedures = await this.$sanity.fetch(procMenuQuery);
    this.pages = await this.$sanity.fetch(pageMenuQuery)
  },

  mounted() {
    console.log(this.procedures)
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding-top: 4.4rem;
  padding-bottom: 4.4rem;
  padding-right: 5rem;
  padding-left: 5rem;
}

.footer__Col--Desktop {
  display: none;
}

.footer__Icon {
  width: 11.2rem;
  height: auto;
  margin: 0 auto;
  display: block;
}
.footer__Social {
  margin-right: 2rem;
}

.footer__Col {
  margin-bottom: 2.2rem;
}
.footer__Hading {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: $blue;
  margin-bottom: 0.8rem;
}

@media only screen and (min-width: 1024px) {
  footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    padding:0;
    padding-top: 4.4rem;
    padding-bottom: 4.4rem;
  }

  .footer__Col--Desktop {
    display: block;
  }

  

  .footer__Col {
    width: 18rem;
  }

  .footer__Col--Up {
    * {
      text-transform: uppercase;
    }
  }

  .footer__Col:first-of-type {
    width:100%;
  }
  

  .footer__Hading {
    margin-bottom:2.4rem;
    font-size:1.8rem;

  }
}
</style>
