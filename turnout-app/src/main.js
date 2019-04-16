import Vue from "vue";
import App from "./components/App.vue";
import VueRouter from "vue-router";
import { firebase, firebaseApp } from "./firebaseApp";

Vue.use(VueRouter);

import store from "./store";

import Dashboard from "./components/Dashboard.vue";
import Signin from "./components/SignIn.vue";
import Signup from "./components/SignUp.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    // calles signIn method passing in user as an object
    router.push("./dashboard");
  } else {
    router.replace("./signin");
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
