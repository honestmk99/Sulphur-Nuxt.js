<template>
  <form id = "CONTACT">
    <h5 class="formHeader">{{$props.heading ? $props.heading : 'Contact us'}}</h5>

    <!--Normal Inputs -->
    <input
      v-for="(input, index) in formText"
      :key="index"
      type="text"
      :name="input.name"
      :placeholder="input.name"
      class="form__Input input--Text"
    />

    <!--TextArea---->

    <textarea
      v-for="(input, index) in formTextArea"
      :key="index"
      type="text"
      :name="input.name"
      :placeholder="input.name"
      class="form__Input input--Text input--TextArea"
    />

    <!--Submit--->

    <input
      v-for="(input, index) in formTextArea"
      :key="index"
      type="submit"
      value = "submit"
      :name="input.name"
      :placeholder="input.name"
      class="form__Input input--Submit button button--Fill"
    />
  </form>
</template>

<style lang="scss" scoped>
.formHeader {
  font-family: proxima-nova, sans-serif;
  font-weight: 600;
  font-style: normal;
}

@media only screen and (min-width: 1024px) {
  .heading--Contact {
    .formHeader {
      color: $grey;
      text-transform: uppercase;
      font-size: 4rem;
      font-family: questa-slab, serif;
font-weight: 700;
font-style: normal;

      margin-bottom: 2rem;
    }

    input[type="submit"] {
      border-radius:0;
      background-color: $grey;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      form: [
        { type: "text", name: "name" },
        { type: "text", name: "email" },
        { type: "text", name: "phone number" },
        { type: "textarea", name: "message" },
        { type: "submit", name: "submit" }
      ]
    };
  },

  props: ['heading'],

  computed: {
    formText() {
      return this.form?.filter(input => input.type == "text");
    },

    formTextArea() {
      return this.form?.filter(input => input.type == "textarea");
    },

    formSubmit() {
      return this.form?.filter(input => input.type == "submit");
    }
  }
};
</script>
