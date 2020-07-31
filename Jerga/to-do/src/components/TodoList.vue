<template>
  <div class="todo-list">
    <TodoItem
      v-bind:title="'Walk the dog'"
      v-bind:description="'Go to the forest near the Zoo'"
    />
    <TodoItem :title="'Buy a bread'" :description="'Whole grain bread'" />
    <TodoItem :title="todoTitle" :description="todoDescription" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todoTitle: "Learn Programming",
      todoDescription: "Preferable Tomorrow!",
    };
  },
};
</script>
