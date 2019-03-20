<template>
  <div class="inbox-body">
    <app-messages :messages="importantMessages"></app-messages>
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
  computed: {
    importantMessages() {
      return this.data.messages.filter(function(message) {
        return (
          message.type == "incoming" &&
          message.isImportant === true &&
          !message.isDeleted
        );
      });
    }
  },
  components: {
    appMessages: Messages
  }
};
</script>
