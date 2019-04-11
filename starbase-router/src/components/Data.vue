<template>
    <div>
        Type: {{type}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: this.$route.params.type
        }
    },
    watch: {
        '$route': 'change'
        // whenever route changes, call change()
    },
    methods: {
        change(){
        this.type = this.$route.params.type
        }
    }
}
</script>
