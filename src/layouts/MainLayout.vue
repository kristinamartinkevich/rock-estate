<template>
  <q-layout view="lHh Lpr lFf no-shadow">
    <q-header elevated class="flex items-center">
      <q-toolbar class="bg-white q-pl-md q-pr-md sticky-nav">
        <q-toolbar-title class="q-pa-none">
          <img
            height="40px"
            src="https://cdn.prod.website-files.com/60781e1041c84501a6e9c2d8/6177ef80c38ed38173169377_Rockestate-logo-horizontal-dark.svg"
            alt="Rockestate Logo"
          />
        </q-toolbar-title>

        <q-btn
          label="Todos"
          flat
          stretch
          @click="navigateTo('/')"
          :color="isActiveRoute('/') ? 'primary' : 'grey-8'"
          class="q-ml-md nav-link"
        />
        <q-btn
          label="Maps"
          flat
          stretch
          @click="navigateTo('/maps')"
          :color="isActiveRoute('/maps') ? 'primary' : 'grey-8'"
          class="q-ml-sm nav-link"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

function navigateTo(path: string) {
  router.push(path);
}

function isActiveRoute(path: string) {
  return route.path === path;
}

defineOptions({
  name: 'MainLayout',
});
</script>
