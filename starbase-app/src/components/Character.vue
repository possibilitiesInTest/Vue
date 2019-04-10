<template>
  <div class="col-md-4" @click="switchCharacter">
    <div class="character-card">
      <card-block>
        <div class="card-title"></div>
        <div class="card-text">Height:</div>
        <div class="card-text">Mass:</div>
        <div class="card-text">Hair Color:</div>
        <div class="card-text">Eye Color:</div>
      </card-block>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      character: {}
    };
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.co/api/people/${id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.character = json));
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(random_id);
    }
  },
  created() {
    this.fetchCharacter(this.id);
  }
};
</script>
