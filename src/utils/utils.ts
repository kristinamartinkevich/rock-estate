export function getRandomCoordinates() {
  const lat = Math.random() * 180 - 90; // Latitude between -90 and 90
  const lng = Math.random() * 360 - 180; // Longitude between -180 and 180
  return [lat, lng];
}
