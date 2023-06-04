<template>
  <div :aria-expanded = "!mobileCollapse" class="nav">
    <!--Logos, go away if Hamburger expanded-->
    <img
      :class="collapseClass"
      :src="icon.url"
      :alt="icon.alt"
      class="nav__Image nav__Image--Icon"
    />
    <img
      :class="collapseClass"
      :src="type.url"
      :alt="type.alt"
      class="nav__Image nav__Image--Type"
    />

    <!---Hamburger--->
    <div
      @click="
        mobileCollapse = !mobileCollapse;
        procCollapse = true;
      "
      class="hamburger"
    >
      <div class="hamburger--Line"></div>
      <div class="hamburger--Line"></div>
      <div class="hamburger--Line"></div>
    </div>

    <!--Nav Links--------->

    <!--Home-->
    <nuxt-link :class="linkClass" to="/" class="menuLink menu__TopLink"
      >home</nuxt-link
    >

    <!--Normal from CMS--->
    <menu-link
      :class="linkClass"
      :link="item"
      :key="index"
      class="menu__TopLink"
      v-for="(item, index) in menu"
    />

    <!--Procedures-->

    <div
      v-if="!$fetchState.pending"
      @click="procCollapse = !procCollapse"
      class="proceduresMenu"
    >
      <p :class="linkClass" class="menuLink">procedures<i class = "ddArrow"></i></p>

      <!--Procedures SubLinks--->

      <menu-link
        :key="index"
        :link="link"
        class="menu__SubLink"
        :class="procClass"
        v-for="(link, index) in procedures"
      />
    </div>
  </div>
</template>

<script>
import menuLink from "~/components/global/menuLink.vue";
import { procMenuQuery } from "~/utils/queries.js";

export default {
  props: ["nav"],

  components: {
    menuLink
  },

  computed: {
    //Icon object
    icon() {
      return {
        url: this.$urlFor(this.$props.nav.heroLogo),
        alt: this.$props.nav.heroLogo?.alt,
        mobileCollapse: true
      };
    },

    //Logotype object
    type() {
      return {
        url: this.$urlFor(this.$props.nav.logoType),
        alt: this.$props.nav.logoType?.alt
      };
    },

    //Class if hamburger is clicked
    collapseClass() {
      return !this.mobileCollapse ? "collapseMenu" : "";
    },

    //Class for menu links, opposite of icons
    linkClass() {
      return this.mobileCollapse ? "collapseMenu" : "";
    },

    //Class for Procedure Menu links
    procClass() {
      return this.procCollapse ? "collapseSub" : "";
    },

    //Destructure menu from props
    menu() {
      return this.$props.nav.menu;
    }
  },
  
  data() {
    return {
      mobileCollapse: true,
      procCollapse: true,
      procedures: {}
    };
  },

  async fetch() {
    this.procedures = await this.$sanity.fetch(procMenuQuery);
  },

  watch: {
    $route() {
      this.mobileCollapse = true,
      this.procCollapse = true
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {

 
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;

  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 4rem;
}

.nav[aria-expanded = "true"] {
  background-color:rgba($grey, .5)
}

.nav__Image--Icon {
  width: 40%;
  height: auto;

  max-width: 15rem;

  margin-bottom: 2.2rem;

  display: block;
}

 .nav__Image--Type {
   display: block;
   max-width: 100%;
 }

.hamburger {
  width: 3rem;
  height: 1.7rem;

  position: absolute;
  top: 4rem;
  right: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger--Line {
  width: 100%;
  height: 0.24rem;

  border-radius: 3px;
  background-color: white;
}

.collapseMenu {
  display: none;
}

.collapseSub {
  display: none;
}

.menu__SubLink {
  margin-left: 2em;
  color:white;
}

@media only screen and (min-width: 1024px) {
  //Hide Icon & Hamburger
  .nav__Image--Icon,
  .hamburger {
    display: none;
  }

  .nav[aria-expanded = "true"] {
    background-color:transparent;
  }

  .nav {
    background-color:transparent;
    padding-right: 5rem;
    padding-left: 5rem;
    padding-top: 0;
    padding-bottom: 0;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
  }

  //Show Links
  .collapseMenu {
    display: block;
  }

  //Procedures
  .proceduresMenu {
    background-color: rgba(white, 0.6);
    padding-right: 5rem;
    padding-left: 5rem;
    max-width: 22.5rem;
    * {
      color: $black;
    }
  }

  .nav__Image--Type {
    margin-right: auto;
    margin-left: 0;
    width:33.5rem;
    height:auto
  }

  .menu__TopLink {
    margin-right: 3.5rem;
  }

  .menu__TopLink, .proceduresMenu, .nav__Image--Type {
    padding-top: 5rem;
  }

  .menu__SubLink {
    color:$black;
    margin:0;
    padding-top:1em;
    padding-bottom:1em;
    border-top:1px solid $black;

    a {
      color:$black  !important;
    }
  }
}
</style>
