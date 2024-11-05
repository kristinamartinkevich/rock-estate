<template>
  <div class="error-message">
    <q-banner class="bg-negative text-white" v-if="message">
      {{ message }}
    </q-banner>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: Error,
    default: '',
  },
});
</script>

<style scoped>
.error-message {
  width: 100%;
}
</style>
