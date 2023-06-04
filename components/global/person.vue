<template>
  <div class="person">
    <div class="person__Brief">
      <!--Headshot--->
      <div class="imgWrapper imgWrapper--Headshot">
        <img :src="imageUrl" :alt="altTag" />
      </div>

      <!---Info--->
      <h3>{{ person.name }}</h3>
      <h4>{{ person.specialty }}</h4>
    </div>

    <!--Paragraph--->
    <p class="person__bio">{{ person.Bio }}</p>

    <!--Certifications-->

    <div v-if="person.certs" class="person__Certs">
      <h5>CERTIFICATIONS</h5>

      <ul>
        <li v-for="(cert, index) in person.certs" :key="index">{{ cert }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person {
  padding-top: 3rem;
  padding-bottom: 3rem;

  h3,
  h4,
  h5 {
    color: $black;
  }

  h3 {
    margin-top: 1.8rem;
    font-size: 3.5rem;
  }

  h3,
  h4 {
    font-family: questa-slab, serif;
    font-weight: 300;
  }

  h4 {
    font-style: italic;
    font-size: 3.5rem;
    margin-bottom: 1.8rem;
  }

  h5 {
    margin-bottom: 0.8rem;
    margin-top: 1.3rem;
    font-size: 3rem;
    font-family: proxima-nova, sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  p {
    color: $blue;
  }
}

//Hide Certs on Proc page

.procedureDoctors {
  .person {
    .person__Certs {
      display: none;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .person {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    h3,
    h4 {
      font-size: 2.2rem;
    }

    h3 {
      border-top: 1px solid $black;
      padding-top: 1.6rem;
    }

    h5 {
      margin-top: 0;
    }

    ul {
      padding-left: 2em;
    }

    .imgWrapper {
      margin-bottom: 3rem;
    }
  }
  .person__Brief {
    width: 22.7rem;
    position: relative;

    *:not(div) {
      width: 80%;
      margin: 0 auto;
      display: block;
    }
  }

  .person__bio {
    width: 48%;
    padding-left: 1em;
    padding-right: 1em;
  }

  .person__Certs {
    margin-right: 0;
    margin-left: auto;
    width: 25%;
  }

  //Clinic Staff
  .person--Clinic {
    width: 46%;

    .person__bio {
      width: 55%;
    }
  }

  //Procedure Physicians

  .procedureDoctors {
    .procedure__Person {
      .person {
        display: flex;
        flex-direction: column;

        .person__bio {
          width: 100%;
          padding:0;
          margin-top: 1.8rem;
        }

        .person__Brief {
          width:100%;
          h3, h4 {
            width:100%;
            margin:0 !important;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ["person"],

  computed: {
    //Url for image
    imageUrl() {
      return this.$urlFor(this.$props.person.headshot.asset._ref);
    },

    //Alt tag
    altTag() {
      return this.$props.person.headshot.alt;
    }
  }
};
</script>
