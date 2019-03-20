<template>
  <div class="inbox-body">
    <p>
      <strong>Date:</strong>
    </p>
    <p>
      <strong>From:</strong>
    </p>
    <hr>

    <div class="message"></div>

    <div class="attachments">
      <h4>Attachments</h4>

      <ul>
        <li>
          <i class="fa fa-paperclip"></i>
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
