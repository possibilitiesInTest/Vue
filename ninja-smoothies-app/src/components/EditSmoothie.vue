<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{ smoothie.title }} Smoothie</h2>
    </div>
</template>


<script>
import db from '@/firebase/init'

export default {
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null
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
