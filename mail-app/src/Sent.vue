<template>
  <h1>Sent</h1>
</template>


<script>
export default {
  props: {
    data: Object,
    required: true
  },
  computed: {
    sentMessages() {
      return this.data.messages.filter(function(message) {
        return message.type == "outgoing" && !message.isDeleted;
      });
    }
  }
};
</script>
