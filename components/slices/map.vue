<template>
  <section class="mapSection">
    <div id="map"></div>
  </section>
</template>

<script>
export default {
  head() {
  return true

    //Figure out conditional rendering if exists
      ? {
          //Load Map
          script: [
            {
              src: `https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=&v=weekly`,
              body: true,
              hid:'google',
              async: true,
             
              callback:() => {
               // this.initMap()
                }
            }
          ]
        }
      : {};
  },

  methods: {

      //Create the map based on cms props
    initMap() {

        

        const {locations} = this.$props.slice

        //Create Map
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center:locations[0]
      });

      locations.map((location, index) => {
          const marker = new google.maps.Marker({
              position:location,
              map:map,
              
          })
      })

      
    }
  },

  props: ["slice"],

  mounted() {

      console.log(this.$props.slice)

  this.initMap();
    
   
  },

  destroyed() {

  }
};
</script>

<style lang="scss" scoped>

//Fixed Height
#map {
  width: 100%;
  height: 507px;
}
</style>
