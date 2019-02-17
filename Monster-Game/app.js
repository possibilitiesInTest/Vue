new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false
  },

  watch: {},

  computed: {},

  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    endGame: function() {
      this.gameRunning = false;
    }
  }
});
