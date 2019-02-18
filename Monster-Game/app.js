new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false,
    turns: []
  },

  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    endGame: function() {
      this.gameRunning = false;
    },

    attack: function() {
      this.playerAttacks(3, 10);

      this.monsterAttacks();
    },

    specialAttack: function() {
      this.playerAttacks(10, 20);

      this.monsterAttacks();
    },

    playerAttacks: function(min, max) {
      var damage = this.calculateDamage(min, max);
      this.monsterHealth -= damage;
      if (this.checkWin()) {
        return;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits monster for " + damage
      });
    },

    monsterAttacks: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits player for " + damage
      });
    },

    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10"
      });
      this.monsterAttacks();
    },

    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
