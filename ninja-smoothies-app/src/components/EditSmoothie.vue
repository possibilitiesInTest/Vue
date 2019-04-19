<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{ smoothie.title }} Smoothie</h2>
            
            
    <form @submit.prevent="editSmoothie">
   
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>

      <div class="field" v-for="(ing, index) in smoothie.ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
   
        <!-- loop through added ings with v-for -->
        <!-- using v-model to bind to value in the ingredients array -->
      </div>

      <div class="field add-ingredients">
        <label for="add-ingredients">Add an ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>

      <div class="field center-align">
        <p v-if="feedback" class="red-text"></p>
        <button class="btn pink">Edit Smoothie</button>
      </div>

    </form>
    </div>
</template>


<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null,
            another: null,
            feedhback: null
        }
    },
    methods: {
    editSmoothie(){
    // console.log(this.title, this.ingredients);
    
    if (this.smoothie.title){
        this.feedback = null
        // create a slug
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@']/g,
          lower: true
        })
        db.collection('smoothies').doc(this.smoothie.id).update({
          title: this.smoothie.title,
          ingredients: this.smoothie.ingredients,
          slug: this.smoothie.slug
        }).then(() => {
          this.$router.push({ name: 'Index'})
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = "You must enter a smoothie title"
      }
    },
    addIng() {
      if (this.another) {
        this.smoothie.ingredients.push(this.another);
        // pushes first ing to ingredients
        this.another = null;
        // sets another val back to null
        this.feedback = null;
        // sets feedback back to null after each entry
      } else {
        this.feedback = "You must enter a value to add an ingredient";
        // provide feedback if another is empty
      }
    },
    deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
    },
    created() {
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
        // retrieve data from db where slug property of db object == smoothie_slug in $route.params
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.smoothie = doc.data()
                // set smoothie to db document
                this.smoothie.id = doc.id
                // set smoothie.id to doc.id retrieved from db
            })
        })
    }
}
</script>

<style>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}

.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
