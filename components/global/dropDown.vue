<template>
  <!--Dropdown--->
  <div @click="expand = !expand" class="ddMenu doctorHighlight__DD">
    <!--Selected-->
    <div class="dd__Item--Selected dd__Item">
      <p>{{ selectedDoctor.name }} <i class = "ddArrow"></i></p>
      <p>{{ selectedDoctor.specialty }}</p>
    </div>

    <!--List-->
    <div
      :class="!expand ? 'hideExpand' : ''"
      @click="clicked(index)"
      v-for="(doctor, index) in physicians"
      :key="index"
      class="dd__Item dd__Item--List"
    >
      <p>{{ doctor.name }}</p>
      <p>{{ doctor.specialty }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: ["physicians"],
  data() {
    return {
      current: 0,
      expand: false
    };
  },

  methods: {
      clicked(number) {

          this.current = number;
          console.log('clicked')
          this.$emit('changed', this.current)

      }
  },
  computed: {
    selectedDoctor() {
      return this.$props.physicians[this.current];
    }
  }
};
</script>
