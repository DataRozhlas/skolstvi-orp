import "./byeie"; // loučíme se s IE

//mapa
var map = L.map('mapa').setView([49.7417517, 15.3350758], 7);

L.tileLayer('https://samizdat.cz/tiles/ton_b1/{z}/{x}/{y}.png', {
    attribution: 'mapová data © přispěvatelé <a target="_blank" href="http://osm.org">OpenStreetMap</a>, obrazový podkres <a target="_blank" href="http://stamen.com">Stamen</a>, <a target="_blank" href="https://samizdat.cz">Samizdat</a>'
}).addTo(map);

L.tileLayer('https://samizdat.cz/tiles/ton_l2/{z}/{x}/{y}.png', {}).addTo(map);

L.TopoJSON = L.GeoJSON.extend({
  addData: function (data) {
    var geojson, key;
    if (data.type === "Topology") {
      for (key in data.objects) {
        if (data.objects.hasOwnProperty(key)) {
          geojson = topojson.feature(data, data.objects[key]);
          L.GeoJSON.prototype.addData.call(this, geojson);
        }
      }
      return this;
    }
    L.GeoJSON.prototype.addData.call(this, data);
    return this;
  }
});

L.topoJson = (data, options) => {
  return new L.TopoJSON(data, options);
};

let tema = L.topoJson(null, {
  style: (feature) => {
    return {
      color: "#000",
      opacity: 1,
      weight: 1,
      fillColor: 'blue',
      fillOpacity: 0.8
    }
  },
  onEachFeature: function(feature, layer) {
    layer.on('click', e => {console.log(e.target.feature.properties)})
  }
}).addTo(map);

fetch("./data/data.topojson")
  .then(response => response.json())
  .then(data => {
    tema.addData(data)
  });

