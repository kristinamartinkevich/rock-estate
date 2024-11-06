<template>
  <q-page>
    <template v-if="isLoading">
      <loading-spinner />
    </template>
    <template v-else-if="error">
      <error-message :message="error" />
    </template>
    <div v-else class="row items-center justify-center q-pa-md">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
        <todo-list-component :todos="todos" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { Todo } from 'components/models';
import TodoListComponent from 'components/TodoList.vue';
import LoadingSpinner from 'components/LoadingSpinner.vue';
import ErrorMessage from 'components/ErrorMessage.vue';
import { fetchTodos } from 'src/utils/apiService';

defineOptions({
  name: 'IndexPage',
});

const {
  data: todos,
  isLoading,
  error,
} = useQuery<Todo[], Error>({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
</script>
a
