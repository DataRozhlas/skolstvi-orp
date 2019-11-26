import { topodata } from "./data"

export const cats = {
    '1': 'silné regiony (omezené sociální problémy i vzdělávací neúspěšnost)',
    '2': 'znevýhodněné regiony (velké sociální problémy i vzdělávací neúspěšnost)',
    '3': 'kombinace dílčích problémů (často bytová nouze a školní absence)',
    '4': 'vzdělávání mírně zaostává za sociální situací',
}

export const varNames = {
  'BYD_CDC_POD': 'Podíl dětí v bytové nouzi (%)',
  'EXE_EXROD_POD': 'Podíl rodičů v exekuci (%)',
  'ZSK_FINE_POD': 'Předčasně skončená školní docházka (%)', 
  'CSI_ZMES_HOD_MEAN': 'Počet zameškaných hodin na žáka', 
  'CSI_NEPR_POD': 'Podíl neprospívajících žáků (%)',
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
  document.getElementById('ttip').innerHTML = `<b>${info.Nazev}</b><br><span style="font-style: italic; color: ${getLCA4Col(info.LCA4)};">${cats[info.LCA4]}</span>` 
  + `<br>Podíl dětí v bytové nouzi: ${ Math.round(info.BYD_CDC_POD * 1000) / 10 } %`
  + `<br>Podíl rodičů v exekuci: ${ Math.round(info.EXE_EXROD_POD * 1000) / 10 } %`
  + `<br>Podíl neprospívajících žáků: ${ Math.round(info.CSI_NEPR_POD * 1000) / 10 } %`
  + `<br>Počet zameškaných hodin na žáka: ${ Math.round(info.CSI_ZMES_HOD_MEAN * 10) / 10 }`
  + `<br>Podíl předčasných ukončení povinné školní docházky: ${ Math.round(info.ZSK_FINE_POD * 100) } %`
}