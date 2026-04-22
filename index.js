// 1. Inicializar el mapa
// [latitud, longitud], zoom
var map = L.map('map').setView([-13.5226, -71.9673], 10); // Ejemplo: Cusco

// 2. Agregar una capa de fondo (Opcional pero recomendado)
// Si no pones esto, el fondo será gris. Puedes usar uno minimalista de CartoDB.
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// 3. Estilo de los polígonos
function myStyle(feature) {
  return {
    fillColor: '#2a9d8f', // Color de fondo
    weight: 2,            // Grosor de línea
    opacity: 1,
    color: 'white',       // Color de línea
    fillOpacity: 0.7
  };
}

// 4. Cargar tus datos GeoJSON
// "tusDatosGeoJSON" debe ser el objeto con las coordenadas
L.geoJson(tusDatosGeoJSON, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
    // Esto hace que aparezca un texto al pasar el mouse
    layer.bindPopup("Nombre: " + feature.properties.NOMBRE);
    
    // Eventos (como en tu código)
    layer.on({
      mouseover: (e) => e.target.setStyle({ fillColor: '#e76f51' }),
      mouseout: (e) => e.target.setStyle({ fillColor: '#2a9d8f' })
    });
  }
}).addTo(map);