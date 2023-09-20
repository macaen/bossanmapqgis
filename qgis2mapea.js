var proxy = true
var layerName = 'bossanqgismap'
var fillColor = '#f5f1ee'
var strokeColor = 'blue'
var bb = [1826400.950131,5156896.345325,1860573.151898,5192890.664762]
var basemaps = ['cdau', 'cdau_satelite', 'cdau_hibrido']

M.proxy(proxy);

mapajs = M.map({
    container: "map",
    controls:[],
    // zoom: 7,
    bbox : bb,
    wmcfiles: basemaps
  });
  
mapajs.setProjection ("EPSG:3946*d");

// Define estilo polygon

let estiloLayer = new M.style.Polygon({
  //radius: 5, 
   fill: {
      color: fillColor,
      opacity: 0.5,
    },
  stroke: {
    color: '#FF0000',
    width: 2
  }
});


// Crea capa

var layerQGIS2Mapea4 = new M.layer.GeoJSON(
  {name: layerName, 
  source: geo

});

layerQGIS2Mapea4.setStyle(estiloLayer);
mapajs.addLayers(layerQGIS2Mapea4);


