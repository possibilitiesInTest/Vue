<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <div class="form">
      <div class="form-group">
        <div class="form-group">
          <label>Note Tilte</label>
          <input class="form-control" type="text" v-model="note.title">
        </div>
        <div class="form-group">
          <label>Note Text</label>
          <textarea class="form-control" v-model="note.text"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Note Master',
      note: {
        title: '',
        text: ''
      }
    }
  }
}
</script>

<style>

</style>
