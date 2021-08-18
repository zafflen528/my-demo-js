var L;

window.onload = function () {
  L.mapquest.key = 'okIWdIVJnN1PWVi9nnghQUQKoHBMv7Ae';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('hybrid', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
}
