<template>
  <q-dialog v-model="openInternal" @hide="closeDialog">
    <q-card style="width: 300px" class="q-px-sm q-pb-md">
      <q-card-section>
        <div class="text-h6">New Todo</div>
      </q-card-section>

      <q-card-section>
        <q-input
          square
          outlined
          v-model="todoTitle"
          label="Enter a title for your todo"
          autofocus
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" @click="closeDialog" />
        <q-btn unelevated label="Add" color="primary" @click="confirmDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:open', 'add-todo']);

const openInternal = ref(props.open);
const todoTitle = ref('');

watch(
  () => props.open,
  (newVal) => {
    openInternal.value = newVal;
  }
);

function closeDialog() {
  emit('update:open', false);
}

function confirmDialog() {
  emit('add-todo', todoTitle.value);
  closeDialog();
}
</script>
