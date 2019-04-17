<template>
  <div>
    <h3>Dashboard Component</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddEvent/>
    <hr>
    <hr>
    {{$store.state.events}}
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
        // pushes events from snap to events array
      });
      
      // console.log("events", events);
      this.$store.dispatch("setEvents", events);

      // keeps real time listener alive
      // throughout life-cycle of dashboard component
      // passing events to store
    });
  }
};
</script>
