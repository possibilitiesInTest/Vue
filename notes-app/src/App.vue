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
      <button class="btn btn-primary" @click="addNote">Add Note</button>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
      return {
      title: 'Notemaster',
      note: {
        title: '',
        text: ''
      },
      notes: [
        {
          title: 'Visited Hawaii',
          text: 'I loved the beaches and delicious fresh coconuts',
          date: new Date(Date.now()).toLocaleString()
        }
      ],
      }
    },
    methods: {
      addNote() {
        let { text, title } = this.note
        this.notes.push({
          text,
          title,
          date: new Date(Date.now()).toLocaleString()
        })
      }
    }
}


</script>