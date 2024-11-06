<template>
  <q-card flat class="q-mt-sm col-12 rounded shadow-box shadow-3">
    <q-card-section class="row items-center justify-between">
      <div
        class="col-10 ellipsis text-weight-medium"
        :class="[{ 'text-strike': isCompleted }]"
      >
        {{ props.todo.title }}
      </div>
      <q-checkbox
        v-model="isCompleted"
        color="primary"
        checked-icon="task_alt"
        unchecked-icon="highlight_off"
        class="col-1"
      />
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
      message: 'Todo edited succesfully.',
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

<style lang="scss" scoped>
.title {
  text-transform: lowercase;
}

.title::first-letter {
  text-transform: uppercase;
}
</style>
