import * as types from "./mutation-types";

export const mutations = {
  [types.SIGN_IN](state, user_payload) {
    state.user = user_payload;
  },

  [types.SIGN_OUT](state) {
    state.user = {};
  },

  [types.SET_EVENTS](state, evebts_payload) {
    state.events = events_payload;
  }
};
