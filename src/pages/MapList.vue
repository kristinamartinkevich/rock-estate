<template>
  <div class="row justify-center q-gutter-md align-center q-mt-lg">
    <div class="col-6">
      <q-card>
        <q-card-section>
          <div class="text-h6 q-mb-md">Map View</div>
          <l-map
            style="height: 350px; width: 100%"
            :zoom="zoom"
            :center="center"
            :use-global-leaflet="false"
          >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

            <l-marker
              v-for="(house, index) in houses"
              :ref="(el) => (markerRefs[index] = el)"
              :options="{ id: index }"
              :key="index"
              :lat-lng="[house.lat, house.lng]"
            >
              <l-popup>
                <div>
                  <strong>Price:</strong> €{{ house.price.toLocaleString() }}
                </div>
                <div class="text-grey-6">
                  {{ house.address }}
                </div>
              </l-popup>
            </l-marker>
          </l-map>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-3">
      <q-card>
        <q-card-section>
          <div class="text-h6 q-mb-md">Select by Address</div>
          <q-list bordered>
            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              style="height: 350px"
            >
              <q-item
                v-for="(house, index) in houses"
                :key="index"
                clickable
                :class="{ 'selected-item': selectedHouse === house }"
                @click="centerOnHouse(index)"
              >
                <q-item-section class="text-weight-medium">
                  {{ house.address }}
                </q-item-section>
                <q-item-section class="text-weight-medium" side>
                  €{{ house.price.toLocaleString() }}
                </q-item-section>
              </q-item>
            </q-scroll-area>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import { ref, onMounted } from 'vue';
import { generateHousePrices } from 'src/utils/utils';

const url = ref(
  'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
);
const attribution = ref(
  '&copy; <a href="https://carto.com/attributions" target="_blank">CartoDB</a>'
);
const zoom = ref(15);
const center = ref([50.8333, 4.3667]);
const selectedHouse = ref(null);

const houses = ref(generateHousePrices());
const markerRefs = ref([]);

function centerOnHouse(index) {
  let nextStopMarker = markerRefs.value.find(
    (marker) => marker.options.id == index
  );

  nextStopMarker.leafletObject.openPopup();
  selectedHouse.value = houses.value[index];
}

onMounted(() => {
  generateHousePrices();
});
</script>

<style scoped>
.q-card {
  max-width: 850px;
  width: 100%;
}
</style>

<style scoped>
.selected-item {
  background-color: var(--q-primary);
  color: white;
}
</style>
