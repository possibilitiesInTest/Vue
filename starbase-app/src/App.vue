<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <!-- <button class="btn btn-primary" @click="fetchCharacter">Fetch Character</button>
    <div class="col-md-12"> -->
      <app-character v-for="(id, index) in initial_ids" :id="id" :key="index"></app-character>
    </div>
  </div>
</template>

<script>
import Character from "./components/Character.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Generate Your Team",
      initial_ids: [1, 13, 14]
    };
  },
  components: {
    appCharacter: Character
  }
};
</script>

