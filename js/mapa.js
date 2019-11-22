import { drawChart } from "./scatter"
import { getLCA4Col, drawInfo } from "./shared"
import { topodata } from "./data"

//mapa
var map = L.map('mapa')
map.scrollWheelZoom.disable()
map.fitBounds([
  [51.041394, 18.940430], //phorni
  [48.560250, 12.062988], //lspodni 
])
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.keyboard.disable();

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
      opacity: 0.8,
      weight: 0.5,
      fillColor: getLCA4Col(feature.properties.LCA4),
      fillOpacity: 1
    }
  },
  onEachFeature: function(feature, layer) {
    layer.on('click', e => {drawInfo(e.target.feature.properties.orp_kod, xID, yID)})
    layer.on('mouseover', e => {drawInfo(e.target.feature.properties.orp_kod, xID, yID)})
  }
}).addTo(map);

function makeChart(data, corr1, corr2) {
    let outData = []
    data.objects.orp_ruian.geometries.forEach(g => {
        outData.push({
            'name': g.properties.Nazev,
            'x': g.properties[corr1] * 100,
            'y': g.properties[corr2] * 100,
            'lca4': g.properties.LCA4,
            'color': getLCA4Col(g.properties.LCA4),
            'orp_kod': g.properties.orp_kod,
        })
    })
    drawChart(outData, corr1, corr2)
}

let xID = 'EXE_EXROD_POD'
let yID = 'CSI_NEPR_POD'

tema.addData(topodata)
makeChart(topodata, xID, yID)

document.getElementById('tsel').onchange = () => {
  const inp = document.getElementById('tsel').value.split('|')
  makeChart(topodata, inp[0], inp[1])
  xID = inp[0]
  yID =  inp[1]
}
