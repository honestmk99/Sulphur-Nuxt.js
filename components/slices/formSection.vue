<template>
  <section class="formSectionAlone">
    <contactForm :heading = "heading" />
    <div class="contact-information">
      <p>
        Address:<br/>
        914 Cypress St, Sulphur, LA 70663
      </p>
      <p>
        Telephone:<br/>
        (337) 527-6363
      </p>
      <p>
        Email:<br/>
        <a href="">mollymseale@gmail.com</a>
      </p>
    </div>
  </section>
</template>

<script>
import contactForm from "~/components/global/contactForm.vue";
export default {
  components: {
    contactForm
  },
  props: [
    'heading'
  ]
};
</script>



<style lang="scss" scoped>
$overlap : 15rem;
.formSectionAlone {
  padding-left: $smallBumper;
  padding-right: $smallBumper;
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
}

.contact-information {
  color: #1D242B;
  padding-top: 25px;

  p {
    font-size: 20px;
    margin-bottom: 1em;

    a {
      color: #1D242B;
      text-decoration: underline;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .contact-information {
    color: white;
    padding: 20px;

    p a {
      color: white; 
    }
  }

  .formSectionAlone {
    //Image from Doc home is 31% + text 43% + menu 18% = 92%. 8% remainder / 2 = 4% extra

    // padding-left:calc(#{$bumperAlt} + 31%);

    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;

    padding-left:calc(39.2rem + #{$bumperAlt} + 3.65rem + 2.7rem);
   



    padding-top:5rem;
    padding-bottom: 5rem;

    margin-left: 0;
    margin-right: auto;
    form {
      width: 66.6rem;
      margin-right: auto;
      margin-left: 0;
    }
  }



  .heading--Contact {
    .formSectionAlone {
      margin-top: calc( -1 * #{$overlap});
      width:calc(100vw - #{$bumper});
      margin-right: 0;
      margin-left: auto;

      background-color:$black;

      padding-right: 6rem;
      padding-left: 6rem;
      padding-top: 3rem;
      padding-bottom: 3rem;

      form {
        width:100%;
        margin:0;

        
      }
    }
  }
}
</style>
