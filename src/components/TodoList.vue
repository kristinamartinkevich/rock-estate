<template>
  <div class="flex items-start justify-between q-mb-sm">
    <span class="col-4 text-h6"> TODOs </span>
    <q-btn
      color="primary"
      label="Add Todo"
      class="col-4 my-btn"
      @click="createNewTodo"
    />
  </div>
  <create-todo-dialog-component v-model:open="open" @add-todo="handleNewTodo" />
  <span class="row" v-for="todo in todos" :key="todo.id">
    <todo-card-component :todo="todo"></todo-card-component>
  </span>
</template>

<script setup lang="ts">
import { Todo } from './models';
import TodoCardComponent from './TodoCard.vue';
import CreateTodoDialogComponent from './CreateTodo.vue';
import { ref } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { createTodo } from 'src/utils/apiService';
import { useQuasar } from 'quasar';

interface Props {
  todos?: Todo[];
}

const open = ref(false);
const $q = useQuasar();

const { mutate: addTodo } = useMutation({
  mutationFn: (newTodo: Todo) => createTodo(newTodo),
  onSuccess: () => {
    $q.notify({
      message: 'Created todo succesfully.',
      icon: 'announcement',
    });
    console.log('Todo created successfully!');
  },
});

const createNewTodo = () => {
  open.value = true;
};

const handleNewTodo = (title: string) => {
  const newTodo: Todo = {
    userId: 1,
    id: 1,
    title: title,
    completed: false,
  };

  addTodo(newTodo);
};

withDefaults(defineProps<Props>(), {
  todos: () => [],
});
</script>
