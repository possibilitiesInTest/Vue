<template>
  <h1>Inbox</h1>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    incomingMessages() {
      return this.data.messages.filter(function(message) {
        return message.type == "incoming" && !message.isDeleted;
      });
    }
  }
};
</script>
