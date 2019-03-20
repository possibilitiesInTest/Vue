<template>
  <div class="inbox-body">
    <app-messages></app-messages>
  </div>
</template>


<script>
import Messages from "./messages.vue";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    appMessages: Messages
  }
};
</script>
