var getWindowWidth, getZoom, map;

L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FiZW1kZXYiLCJhIjoidnZVYkhXUSJ9.DNhzgJMNYqFU5YARc-ugvA';

getWindowWidth = function() {
  var width;
  width = 0;
  if (document.body && document.body.offsetWidth) {
    width = document.body.offsetWidth;
  }
  if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
    width = document.documentElement.offsetWidth;
  }
  if (window.innerWidth) {
    width = window.innerWidth;
  }
  return width;
};

getZoom = function() {
  if (getWindowWidth() >= 620) {
    return 17;
  } else {
    return 15;
  }
};

map = L.mapbox.map('map');

map.scrollWheelZoom.disable();

map.setView([47.667, -122.383], getZoom());

L.mapbox.styleLayer('mapbox://styles/gabemdev/cj63z2drq50sc2rrzwlfl21lw').addTo(map);

window.onresize = function() {
  return map.setZoom(getZoom());
};
