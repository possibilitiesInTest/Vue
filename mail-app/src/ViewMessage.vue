<template>
  <div class="inbox-body">
    <p>
      <strong>Date:</strong>
      {{ data.message.date.fromNow() }}
    </p>
    <p>
      <strong>From:</strong>
      {{ data.message.from.name }} <{{ data.message.from.email }}>
    </p>
    <hr>

    <div v-html="data.message.content" class="message"></div>

    <div v-if="data.message.attachments.length > 0" class="attachments">
      <h4>Attachments</h4>

      <ul>
        <li v-for="attachement in data.message.attachements">
          <i class="fa fa-paperclip"></i>
          {{ attachement.fileName }}
          {{ attachement.size }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: Object,
    required: true
  }
};
</script>
