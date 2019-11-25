title: "Mapa: České vzdělávání trpí problémem regionálních nerovností. Neúspěch ohrožuje více než polovinu měst"
perex: "Jak souvisejí exekuce a bytová nouze se studijní neúspěšností  žáků základních škol zkoumali sociologové agentury PAQ Research. Úspěchy českých dětí dle nich výrazně  sociálními problémy a to i uvnitř krajů, problémy se ale v jednotlivých regionech odlišně kombinují. Jak vyplývá z interaktivní mapy, kterou připravil server iROZHLAS.cz, nepříznivé vzdělávací podmínky jsou zhruba ve třetině z 206 obcí s rozšířenou působností a v některé dalších je neúspěšnost vyšší než by odpovídalo sociální situaci. "
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/ubytovna_usti_n_l_da_180615-144443_mda_0.jpg?itok=dimb8EO8
coverimg_note: "Foto <a href='https://www.irozhlas.cz/michaela-danelova-5270376'>Michaela Danelová</a>"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css']
libraries: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js', 'https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js', highcharts] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
V krajích jako je Ústecko a Karlovarsko nedosáhne na žádné střední vzdělání 15 až 20 procent dětí, v Praze a bohatších částech Středočeského kraje je neúspěšnost minimální. Regiony se také liší z hlediska výsledků v mezinárodních testech PISA. Méně než polovinu krajských nerovností ale lze vysvětlit věcmi jako je vzdělání a status rodičů. Co stojí za zbytkem?

Příčiny nerovností dle sociologa Daniela Prokopa z PAQ Research, který analýzu pro konferenci Aspen Institut a nadaci Bader Foundation zpracoval, školní neúspěšnost souvisí i s konkrétními  sociálními problémy. Neobjevují se ale jen na úrovni krajů, rozdíly jsou patrné i mezi jednotlivými obcemi s rozšířenou působností.

V unikátní analýze  tak sociologové spojili data o vzdělávacích problémech od České školní inspekce a Agentury pro sociální začleňování: průměrný počet absencí na žáka, procento neprospívajících – propadajících žáků, ukončování základní školní docházky před 9.ročníkem. Porovnali je s daty Mapy exekucí a Platformy pro sociální bydlení – konkrétně s počty rodičů v exekuci a počty dětí bytové nouzi.

_Na interaktivní mapě se můžete podívat, jak jsou na tom jednotlivé obce. Sociologové je rozdělili do čtyř kategorií._

<wide>
	<div id="viz">
		<div id="mapa"></div>
		<div id="chartbox">
			<div id="topicsel">
			<select id="tsel">
				<option value="EXE_EXROD_POD|CSI_NEPR_POD">Rodiče v exekuci a neprospívající žáci</option>
				<option value="EXE_EXROD_POD|CSI_ZMES_HOD_MEAN">Rodiče v exekuci a absence žáků</option>
				<option value="EXE_EXROD_POD|ZSK_FINE_POD">Rodiče v exekuci a žáci s nedokončeným vzděláním</option>
				<option value="BYD_CDC_POD|CSI_NEPR_POD">Děti v bytové nouzi a neprospívající žáci</option>
				<option value="BYD_CDC_POD|CSI_ZMES_HOD_MEAN">Děti v bytové nouzi a absence žáků</option>
				<option value="BYD_CDC_POD|ZSK_FINE_POD">Děti v bytové nouzi a žáci s nedokončeným vzděláním</option>
				</select>
			</div>
			<div id="corchart"></div>
		</div>
	</div>
	<div id="ttip">Vyberte obec na mapě nebo v grafu.</div>
</wide>

„První zajímavé zjištění je odhad, že v roce 2017 byl v exekuci až každý 6-7. rodič  s dítětem v domácnosti. V dospělé populaci mělo exekuce „jen“ 9,3 %, ale časté jsou mezi lidmi v rodičovském věku 30 až 60 let, naopak zřídkavé u mladších a starších. Z věkové struktury rodičovství lze odhadovat, že exekuci mělo okolo 16 % rodičů,“ popisuje sociolog Michal Kunc.

A počet exekuovaných rodičů a dětí v bytové nouzi – tedy žijících na ubytovnách, v azylových domech či v extrémně nevyhovujících podmínkách výrazně souvisí se školní neúspěšností. „Nevyplývá z toho sice, že jde o přímý důsledek bydlení a exekucí. Ale zahraniční i některé české výzkumy ukazují, že v rámci chudé populace mají horší úspěšnost ve vzdělávání ty, které žijí v nebytovém bydlení či často mění školy, nebo jsou jejich rodiny ve vyšším stresu a izolaci – například kvůli předlužení. Chudoba se do školních problémů neprojevuje číslem na účtu, ale těmito faktory,“ dodává Prokop.

Na interaktivní mapě se můžete podívat, jak jsou na tom jednotlivé obce. Sociologové je rozdělili do čtyř kategorií. 
Necelá polovina - 94 obcí, nemá žádný výrazný sociální ani vzdělávací problém. Na mapě jsou vyznačeny modře. Naopak „červených“ měst, ve kterých je silné zatížení exekucemi, bytovými problémy i vysokou studijní neúspěšností, je 28. Velká část z nich v regionech, které jsou v rámci České republiky považovány za ekonomicky slabší. V Karlovarském, Libereckém, Ústeckém, ale i v částech Moravskoslezského kraje.

Právě poslední zmíněný je ale dle Prokopa z pohledu socioekonomických problémů diverzní. „Příkladem je i sama Ostrava, tam se problémy projevují jen v různých částech. Silně zatížená je ale například Karviná nebo Orlová,“ vysvětluje Prokop.
V průzkumu se vyprofilovaly dle sociologů dvě specifické kategorie. Ve 44 obcích se kombinují některé projevy chudoby a školních problémů - často je jedná  o bytovou nouzi  a relativně vysokým počtem školních absencí. Tyto oblasti, na mapě znázorněny oranžovou barvou, ale nejsou extrémně sociálně zatížené např. zmíněnými exekucemi.

„Zřejmě místy dochází k tomu, že se neřešená bytová otázka promítá do vzdělávacího systému. Děti mají vyšší počet absencí, je pro ně těžké se učivo doučit, propadají. Často stěhují, mění školy či od nich bydlí daleko. Má na ně negativní vliv lidí z prostředí, kde bydlí – nízké ambice či drogy a vyšší kriminalita,“ dodává Prokop. Do této kategorie spadají i některá města ekonomicky stabilního Středočeského kraje, která ale neefektivně řeší otázku bydlení – Příbram a Kladno.

Překvapením je 40 obcí, u kterých vzdělávání naopak mírně zaostává za jejich sociálním statusem. Je zde vyšší počet neprospívajících a předčasně končících studentů, než by odpovídalo sociálním problémům. Příkladem jsou odlehlejší části Plzeňského a Jihočeského kraje, ale i středně velká města ekonomicky silných částí republiky - Český brod, Mladá Boleslav, Rakovník, či Jindřichův Hradec.

## Problém nejen školství

Výsledky tak potvrzují zjištění mezinárodního srovnání PISA, které dlouhodobě uvádí, že sociální status rodin a škol kvalitu vzdělání českých dětí silně ovlivňuje. Zároveň ale Prokop upozorňuje na křehkost sociologických korelací. „U sociologických analýz silné vztahy nebývají, ale tady je korelace mezi odhadovaným počtem rodičů v exekuci a počtem dětí, které mají vzdělávací problémy, přibližně 0,7 a u bytové nouze okolo 0,6, což je velmi silný vztah. A platí i v rámci většina krajů či při kontrole nezaměstnanosti. Není to tedy jen vedlejší důsledek celkové ekonomiky regionu“ vysvětluje.
<left>
<h3>Metodika</h3>
<p><b>Počet rodičů v exekuci (%)</b> – údaj k 31.12.2017. Počet rodičů je odnadnut v každé ORP z věku lidí, kteří jsou v ní exekuci a pravděpodbnosti, že člověk v dané věkové kategorii je rodičem s dítětem v domácnosti, která je převzata z výzkumu Czech Household Panel Study. Zdroj: Mapa exekucí.</p>

<p><b>Počet dětí v bytové nouzi (%)</b> – zastoupení dětí, které žijí bez střechy nad hlavou, na ubytovnách, v azylových domech, u známých či ve extrémně nevyhovujících bytových podmínkách (byt bez sociální zařízení, kuchyně). Zdroj: Údaj vychází z dat Platformy pro sociální bydlení a LUMOS za rok 2018 aktualizované v 17 ORP s nespolehlivými údaji odhadem z jiných typů vyplácených dávek rodinám s dětem.</p>

<p><b>Průměrný počet absencí (hodin ročně)</b> – průměrný počet zameškaných hodin (omluvené i neomluvené) na žáka v základních školách (běžné i speciální). Zdroj: ČŠI</p>

<p><b>Předčasné ukončení ZŠ</b> – zastoupení žáků, které ve školním roce 2017/2018 ukončily  základní docházku v 7. či 8. třídě mezi všemi žáky končícími základní docházku. Zdroj: ČŠI
Počet neprospívajících žáků – zastoupení žáků, kteří neprospívají (propadají) mezi všemi žáky základních škol (běžné i speciální). Zdroj: ČŠI</p>
</left>

Podle sociologů to naznačuje, že obrovské regionální nerovnosti ve vzdělávání nemůže vyřešit školství samo. „Ukazuje to, že se v zatížených krajích musí řešit také problémy dětí v nevzdělávací oblasti. Někdo řekne “ vysvětluje Prokop.

TADY SE JEŠTĚ VYMYSLÍ VÍC SMOOTH PŘECHOD, VYJÁDŘÍ SE AGENTURA PRO SOC.ZAČ.: S těmito problémy úzce souvisí segregace ve školství, na kterou upozorňuje Agentura pro sociální začleňování. „Opakovaně se o nerovnostech ve vzdělávání mluví i v souvislosti s žáky ze sociálně vyloučeného prostředí. Úroveň vzdělanosti se dokonce generaci od generaci snižuje. Školství v České republice se také stále potýká s dědictvím zvláštních škol a přeřazování romských dětí mimo hlavní vzdělanostní proud,“ analýza segregace.

## Regionálně specifická opatření

Odlišnost problémů  si dle Prokopa žádá regionálně specifická opatření. „V extrémně zatížených obcích, kterých jsme identifikovali 28, jsou nutné intervence na všech frontách oddlužení, vytvoření sociálního bydlení a stabilizace rodin, posílení učitelského stavu, nepedagogických pracovníků,“ vysvětluje.

V rámci českého školství dlouhodobě chybí dostatek školních psychologů, speciálních pedagogů, podpůrných asistentů. Problém je ale i v jejich nerovnoměrném rozmístění. „V Karlovarském kraji jsou na základních školách jen jednotky školních psychologů. V Praze má naopak řada škol vlastního školního psychologa,“ upozorňuje Prokop. Tito odborníci by dle něj měli pomáhat v kooperaci s Orgánem sociálně-právní ochrany dětí (OSPOD) jednotlivých obcí, který má za úkol zmíněné problémy řešit.

Nyní se ale dle Prokopa OSPOD často zabývá extrémními případy, oproti zahraničí, kde se zaměřují na prevenci. „Snaží se odhalit problémy včas. Kontrolují více absence, pracují se školou, aby dítě dohánělo problémy. To tady trochu chybí,“ dodává.

TADY VYJÁDŘENÍ OSPOD, v úterý

V typu obcí, kde vzdělání mírně zaostává za sociálními problémy by podle něj naopak mohl pomoct další bod, o němž mluví Strategie vzdělávání do roku 2030. To je zavedení středního článku vedení. Nyní totiž školy zřizující obce. Ředitelé jsou přetížení administrativou, protože každý žádá zvlášť o dotační programy a řeší problémy od požární ochrany po IT. Nemají tak čas se věnovat pedagogickému vedení. Kdyby jim někdo pomohl, výuku by to mohlo posílit.

