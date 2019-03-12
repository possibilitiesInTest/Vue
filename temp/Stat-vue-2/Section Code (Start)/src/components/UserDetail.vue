<template>
  <div class="component">
    <h3>User Details</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      required: true
    }
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>


<style scoped>
div {
  background-color: lightcoral;
}
</style>
