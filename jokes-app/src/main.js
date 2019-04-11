import Vue from "vue";
import App from "./components/App.vue";

import store from "./store";

new Vue({
  el: "#app",
  store,
  // pass store to vue instance
  // available globally
  render: h => h(App)
});
