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
    },
    attack: function() {
      var max = 10;
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert("You won!");
        gameRunning = false;
        return;
      }

      max = 12;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert("You won!");
        gameRunning = false;
        return;
      }
    },
    specialAttack: function() {},
    heal: function() {}
  }
});
