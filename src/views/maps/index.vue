<template>
  <div>
   <!--  <GmapMap :center="{lat:4.69167852401733, lng:-74.0839385986328}" :zoom="7" map-type-id="terrain" style="width: 1024px; height: 968px">
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
    </GmapMap> -->
<!--     <GmapMap :center="{lat:4.69167852401733, lng:-74.0839385986328}" :zoom="10" style="width: 100%; height: 500px">
      <GmapMarker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></GmapMarker>
    </GmapMap> -->
    <google-map :center="center" :zoom="7" style="width: 100%; height: 500px">
      <google-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></google-marker>
    </google-map>
  </div>
</template>
<script>
export default {
  name: 'Mapas',
  data () {
    return {
      center: {
        lat: 4.69167852401733,
        lng: -74.0839385986328
      },
      markers: [{
        position: {
          lat: 4.7026700973510742,
          lng: -73.091484069824219
        }
      }, {
        position: {
          lat: 4.7026700973510742,
          lng: -74.091484069824219
        }
      }, {
        position: {
          lat: 4.7026700973510742,
          lng: -75.091484069824219
        }
      }]
      // markers: [
      //   { position: { lat: -73.091484069824219, lng: 4.7026700973510742 } },
      //   { position: { lat: -74.091484069824219, lng: 4.7026700973510742 } }
      // ]
    }
  },
  methods: {
  }
}
</script>