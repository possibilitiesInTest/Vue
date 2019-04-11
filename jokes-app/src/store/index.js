import Vue from "vue";
import Vuex from "vuex";

// import Vuex
// use Vuex
//  store some value: array
// export state in Vuex.store

Vue.use(Vuex);

const state = {
  jokes: []
};

export default new Vuex.Store({
  state
});
