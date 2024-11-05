<template>
  <q-card flat bordered>
    <q-card-section class="row items-center">
      <q-checkbox v-model="isCompleted" color="primary" class="col-2" />
      <div class="col-10 text-h6 ellipsis">{{ props.todo.title }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import { useMutation } from '@tanstack/vue-query';
import { Todo } from './models';
import { editTodo } from 'src/utils/apiService';
import { useQuasar } from 'quasar';

interface Props {
  todo: Todo;
}

const props = defineProps<Props>();
const isCompleted = ref(props.todo.completed);
const $q = useQuasar();

const mutation = useMutation({
  mutationFn: (completed: boolean) => editTodo(props.todo.id, { completed }),
  onSuccess: () => {
    console.log('Todo completion updated successfully!');
    $q.notify({
      message: 'Edited todo succesfully.',
      icon: 'announcement',
    });
  },
  onError: (error) => {
    console.error('Failed to update todo completion:', error);
  },
});

watch(isCompleted, (newValue) => {
  mutation.mutate(newValue);
});
</script>
