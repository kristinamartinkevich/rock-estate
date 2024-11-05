<template>
  <div style="height: 600px; width: 800px">
    <l-map
      style="height: 350px"
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-geo-json :geojson="geojson"></l-geo-json>
    </l-map>
  </div>
</template>

<script setup>
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet';
import { ref, onMounted } from 'vue';

const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const attribution = ref(
  '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
);
const zoom = ref(8);
const center = ref([47.31322, -1.319482]);
const geojson = ref(null);

onMounted(async () => {
  fetch(
    'https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson'
  ).then((response) => {
    geojson.value = response.json();
  });
});
</script>
