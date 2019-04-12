
<template>
  <div id="app">
    Got jokes?
    <br>
    <br>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <br>
    <br>
    <button class="btn btn-primary" @click="addJoke">Add A Joke</button>
    <br>
    <br>
    <span v-for="type in types">
      <input type="checkbox" :value="type" v-model="checkedTypes" checked>
      <label>{{ type }}</label>&nbsp;
    </span>
    <br>
    <div class="col-md-12"></div>
    <hr>
    <br>
    <br>
    <Joke
      v-for="(joke, index) in $store.state.jokes"
      v-show="checkedTypes.includes(joke.type)"
      :joke="joke"
      :index="index"
      :key="index"
    />
    <!-- <div>
{{$store.state}}
    </div>-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes: ["general", "knock-knock", "programming"]
    };
  },
  methods: mapActions(["initJokes", "addJoke", "clearJokes"]),
  components: {
    Joke
  }
};
</script>
