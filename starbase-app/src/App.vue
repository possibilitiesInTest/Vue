<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <button class="btn btn-primary" @click="fetchCharacter">Fetch Character</button>
    <app-character :id="1"></app-character>
  </div>
</template>

<script>
import Character from "./components/Character.vue";

export default {
  name: "app",
  data() {
    return {
      title: "Generate Your Team"
    };
  },
  components: {
    appCharacter: Character
  }
};
</script>

