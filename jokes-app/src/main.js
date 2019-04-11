import Vue from "vue";
import App from "./components/App.vue";

import store from "./store";

// store.commit("INIT_JOKES", [{ test: "test_joke" }]);
// test store.commit

new Vue({
  el: "#app",
  store,
  // pass store to vue instance
  // available globally
  render: h => h(App)
});
