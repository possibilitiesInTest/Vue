<template>
    <div>
         <input type="text" @keydown.enter="onInput">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }
}
</script>