function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 17.741960701675968, lng: 83.23754949183244 },
    zoom: 14,
    mapId: "41187f55235a2364",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });
}
