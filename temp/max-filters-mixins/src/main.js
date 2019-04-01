import Vue from "vue";
import App from "./App.vue";

Vue.filter("to-lowercase", function(value) {
  return value.toLowerCase();
});

// Create global filter for "Test" => "Test (4)"
Vue.filter("appendLength", function(value) {
  return value + " " + "(" + value.length + ")";
});

Vue.mixin({
  created() {
    console.log("Global Mixin - Created Hook");
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
