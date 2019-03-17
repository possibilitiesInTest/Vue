<template>
  <div class="container">
    <div class="mail-box">
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </div>
  </div>
</template>

<script>
import Content from "./Content.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    "app-sidebar": Sidebar,
    "app-content": Content
  }
};
</script>