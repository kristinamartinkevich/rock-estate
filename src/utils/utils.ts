export function getRandomCoordinates() {
  const lat = Math.random() * 180 - 90; // Latitude between -90 and 90
  const lng = Math.random() * 360 - 180; // Longitude between -180 and 180
  return [lat, lng];
}

const mockAddresses = [
  "Rue de l'Aqueduc 15",
  'Rue du Trône 75',
  'Avenue Louise 50',
  'Rue Defacqz 25',
  'Place Flagey 30',
  'Rue Américaine 110',
  'Chaussée de Waterloo 120',
  'Rue du Bailli 45',
  'Rue Lesbroussart 80',
  'Rue Sans Souci 5',
];

const neighborhood = {
  name: 'Ixelles',
  lat: 50.8333,
  lng: 4.3667,
};

export function generateHousePrices() {
  const houses = [];
  const houseCount = 10;
  const maxPrice = 800000;
  const minPrice = 100000;
  const radius = 0.005;

  for (let i = 0; i < houseCount; i++) {
    const price = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);
    const latOffset = (Math.random() - 0.5) * radius;
    const lngOffset = (Math.random() - 0.5) * radius;

    houses.push({
      price,
      lat: neighborhood.lat + latOffset,
      lng: neighborhood.lng + lngOffset,
      address: mockAddresses[i % mockAddresses.length],
    });
  }
  return houses
}
