
<template>
  <div id="app">
    Got jokes?
    <br>
    <br>
       <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
 <br>
    <br>
    <div class="col-md-12"></div>
    <hr>
    <br><br>
      <Joke 
      v-for="(joke, index) in $store.state.jokes"
      :joke="joke"
      :key="index"
      />
    <!-- <div>
{{$store.state}}
    </div> -->
    


  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  methods: mapActions([
    'initJokes'
  ]),
  components: {
    Joke
  }
}
</script>
