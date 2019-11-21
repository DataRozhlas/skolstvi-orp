import { topodata } from "./data"

export const cats = {
    '1': 'nejlepší situace',
    '2': 'nejhorší situace',
    '3': 'častá bytová nouze a školní absence',
    '4': 'školství mírně zaostává za ekonomikou',
}

export function getLCA4Col(cat) {
  switch(cat){
    case 1:
      return 'rgba(69,117,180,.7)'
    case 2:
      return 'rgba(215,48,39,.7)'
    case 3:
      return 'rgba(252,141,89,.7)'
    case 4:
      return 'rgba(197,27,138,.7)'
  }
}

export function drawInfo(orp, xID, yID) {
  const info = topodata.objects.orp_ruian.geometries.filter(g => g.properties.orp_kod == orp)[0].properties
  document.getElementById('ttip').innerHTML = `<b>${info.Nazev}</b><br><span style="font-style: italic; color: ${getLCA4Col(info.LCA4)};">${cats[info.LCA4]}</span><br>${xID}: ${ Math.round(info[xID] * 1000) / 10 } %<br>${yID}: ${ Math.round(info[yID] * 1000) / 10 } %`
}