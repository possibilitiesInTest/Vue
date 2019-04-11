import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations.js";
import * as actions from './actions'

// import Vuex
// use Vuex
//  store some value: array
// export state in Vuex.store

Vue.use(Vuex);

const state = {
  jokes: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
