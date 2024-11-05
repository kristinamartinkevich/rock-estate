<template>
  <q-page>
    <div class="row items-center justify-evenly q-mt-lg">
      <q-tabs v-model="selectedTab" dense>
        <q-tab name="todos" label="Todos" />
        <q-tab name="maps" label="Maps" />
      </q-tabs>
    </div>

    <div v-if="isLoading">
      <loading-spinner />
    </div>
    <div v-else-if="error">
      <error-message :message="error" />
    </div>
    <div v-else>
      <div v-if="selectedTab === 'todos'">
        <todo-list-component :todos="todos" />
      </div>
      <div v-else-if="selectedTab === 'maps'">
        <div class="map-placeholder">
          <map-list-component />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { Todo } from 'components/models';
import TodoListComponent from 'components/TodoList.vue';
import LoadingSpinner from 'components/LoadingSpinner.vue';
import MapListComponent from 'components/MapList.vue';
import ErrorMessage from 'components/ErrorMessage.vue';
import { fetchTodos } from 'src/utils/apiService';
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const selectedTab = ref('todos');

const {
  data: todos,
  isLoading,
  error,
} = useQuery<Todo[], Error>({
  queryKey: ['todos'],
  queryFn: fetchTodos,
});
</script>
