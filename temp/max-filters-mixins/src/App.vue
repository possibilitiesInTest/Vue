<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <hr>
        <h5>Exercise 1</h5>

        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ sample | toBackwards }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <hr>
        <h5>Exercise 2</h5>
        <p>{{ sample2 | appendLength }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <hr>
        <h5>Exercise 3</h5>
        <p>{{ sample }}</p>
        <button class="btn btn-primary" @click="reverseText">reverseText</button>
        <hr>
        <p @click="addLength">{{ sample }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: "Sample text forwards.",
      sample2: "Short"
    };
  },
  filters: {
    toBackwards: value => {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reverseText: function(value) {
      return value
        .toString()
        .split("")
        .reverse()
        .join("");
    }
  },
  addLength: value => {
    return value + " " + "(" + value.length + ")";
  }
};
</script>

<style>
</style>
