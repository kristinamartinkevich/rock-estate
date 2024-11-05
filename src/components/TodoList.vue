<template>
  <div class="row items-start q-gutter-md justify-center q-pa-4">
    <span class="col-3" v-for="todo in todos" :key="todo.id">
      <todo-card-component :todo="todo"></todo-card-component>
    </span>
  </div>
</template>

<script setup lang="ts">
import { Todo } from './models';
import TodoCardComponent from './TodoCard.vue';

interface Props {
  todos?: Todo[];
}

withDefaults(defineProps<Props>(), {
  todos: () => [],
});
</script>
