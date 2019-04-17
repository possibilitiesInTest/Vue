<template>
  <div>
    <h4>Add Event</h4>
    <div class="form">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control">
      </div>

      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control">
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control">
      </div>

      <button class="btn-sm btn-primary"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      }
    };
  }
};
</script>
