<template>
  <div class="map">
    <h2>Map</h2>
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "GMap",
  data() {
    return {
      lat: 53,
      lng: -2
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      });
    }
  },
  mounted() {
    // get user location
    if (navigator.geolocation) {
      // if geolocation exists
      navigator.geolocation.getCurrentPosition(
        pos => {
          // render map with current position.lat && long
          this.lat = pos.coords.latitude;
          this.lng = this.pos.coords.longitude;
          this.renderMap();
        },
        err => {
          console.log(err);
          this.renderMap();
        },
        { maximumAge: 6000, timeout: 30000 }
        // checks for cached geolocation of the user, if not found in 3 seconds, then fail this operation, and render the default
      );
    } else {
      // position centre by default values
      this.renderMap();
    }
    console.log(firebase.auth().currentUser);
    // setTimeout(() => {
    //   console.log(firebase.auth().currentUser);
    // }, 2000);
  }
};
</script>

<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
