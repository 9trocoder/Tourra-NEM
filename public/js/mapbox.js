/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoieWVtaWNvZGVzIiwiYSI6ImNrbmF3bXZjcDFsemMyeHA5NWNuY2NubTgifQ.c8zkAXtJoGjEzaEgtXFv2A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yemicodes/cknazgabs08zq17peijbzfe2h',
  scrollZoom: false
  //   center: [-118.113491, 34.111745],
  //   zoom: 10,
  //   interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // add maker
  const el = document.createElement('div');
  el.className = 'marker';

  // add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // add popup
  new mapboxgl.Popup({
    offset: 28
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Time: ${loc.day} minutes - ${loc.description}</p>`)
    .addTo(map);

  // extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});

