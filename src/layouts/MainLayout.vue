<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="flex items-center">
      <q-toolbar class="bg-white">
        <q-toolbar-title class="q-pa-sm q-ml-md">
          <img
            height="50px"
            src="https://cdn.prod.website-files.com/60781e1041c84501a6e9c2d8/6177ef80c38ed38173169377_Rockestate-logo-horizontal-dark.svg"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout',
});
</script>
