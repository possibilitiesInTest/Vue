<template>
  <div class="alert alert-info">
    <h1>{{ title }}</h1>

    <p>Published on {{ published | moment }}</p>
    <p class="lead">{{ content }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      title: "10 Reasons why Vue.js is Awesome",
      published: new Date(),
      content:
        "Obacht! Das Fernweh frickeln der altbacken Augenschmaus. Die adrett Sättigungsbeilage. Das gebeutelt Waschweib"
    };
  },

  filters: {
    moment: function(value) {
      return moment(value).format("MMM Do");
    }
  }
};
</script>

