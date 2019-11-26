title: "Mapa: Vzdělání českých dětí ohrožují exekuce a bytová nouze. Podívejte se, jak je na tom vaše obec"
perex: "Studijní úspěchy českých dětí úzce souvisejí se sociálními problémy, jakými jsou exekuce či bytová nouze. Ukázala to analýza sociologů agentury PAQ Research, kteří se zaměřili na jednotlivé regiony Česka. Z interaktivní mapy, kterou připravil server iROZHLAS.cz, vyplývá, že nepříznivé vzdělávací podmínky jsou zhruba ve třetině z 206 obcí s rozšířenou působností. V řadě z nich je pak neúspěšnost vyšší, než by odpovídalo sociální situaci."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/ubytovna_usti_n_l_da_180615-144443_mda_0.jpg?itok=dimb8EO8
coverimg_note: "Foto <a href='https://www.irozhlas.cz/michaela-danelova-5270376'>Michaela Danelová</a>"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css']
libraries: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js', 'https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js', highcharts] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
V Ústeckém či Karlovarském kraji nedosáhne na žádné střední vzdělání 15 až 20 procent dětí, v Praze a bohatších částech Středočeského kraje je naopak neúspěšnost minimální. Regiony se také liší z hlediska výsledků v mezinárodních testech PISA.

Sociologové se v unikátní analýze pokusili spojit data o vzdělávacích problémech od České školní inspekce a Agentury pro sociální začleňování: průměrný počet absencí na žáka, procento neprospívajících – propadajících žáků, odhad ukončování základní školní docházky před 9. ročníkem. Porovnali je s daty Mapy exekucí a Platformy pro sociální bydlení – konkrétně s počty rodičů v exekuci a počty dětí bytové nouzi.

_Na interaktivní mapě se můžete podívat, jak se socioekonomické problémy kombinují v jednotlivých obcích. Sociologové 206 obcí s rozšířenou působností rozdělili do čtyř kategorií._

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

 Devadesát obcí, tedy necelá polovina, nemá žádný výrazný sociální ani vzdělávací problém. Na mapě jsou vyznačeny modře. Naopak „červených“ měst, která jsou silně zatížena exekucemi, bytovými problémy i vysokou studijní neúspěšností, je 33. Velká část z nich je v regionech, které jsou v rámci Česka považovány za ekonomicky slabší – v Karlovarském, Libereckém, Ústeckém, ale i v částech Moravskoslezského kraje.

Právě poslední zmíněný kraj je ale podle sociologa Daniela Prokopa z pohledu socioekonomických problémů diverzní. „Příkladem je i sama Ostrava, kde se problémy projevují jen v různých částech. Silně zatížená je ale například Karviná nebo Orlová,“ vysvětluje Prokop pro iROZHLAS.cz.

„Regiony Ústeckého a Karlovarského kraje patří k těm, kde je podíl předčasně ukončené školní docházky nejvyšší. Navíc tam pozorujeme nárůst - v roce 2013 byl podíl 9 procent žáků, v roce 2017 už to bylo přes 15 procent,“ upřesňuje jednu ze statistik Tomáš Zatloukal, ústřední školní inspektor. Zároveň podotýká, že by podpora vzdělávání v těchto krajích měla být lépe koordinovaná. „Projevuje se, že přistupujeme k regionům velmi uniformovaně. V zahraničí je běžný přístup, že právě regiony jsou významně jak finančně, tak personálně podporovány,“ uzavírá. 

## Z ubytoven do ,azyláků‘

V průzkumu se podle sociologů vyprofilovaly dvě specifické kategorie. Ve 44 obcích se kombinují některé projevy chudoby a školních problémů - často se jedná o bytovou nouzi s relativně vysokým počtem školních absencí. Tyto oblasti, na mapě znázorněné oranžovou barvou, ale nejsou extrémně sociálně zatížené například již zmíněnými exekucemi.

„Na základě dat odhadujeme, že v bytové nouzi je v České republice zhruba 20 tisíc dětí, přibližně v 10 tisících rodinách. Nejedná se tedy o situaci, která by se týkala každého pátého dítěte. Zároveň je ale ta skupina velká, zvláště v některých regionech je to veliký problém,“ vysvětluje pro iROZHLAS.cz Jan Klusáček z organizace Lumos, která data o bytové nouzi analyzuje.

<right> Do této kategorie spadají i některá města ekonomicky stabilního Středočeského kraje, která ale neefektivně řeší otázku bydlení – Příbram a Kladno.</right>

„Zřejmě místy dochází k tomu, že se neřešená bytová otázka promítá do vzdělávacího systému. Děti mají vyšší počet absencí, je pro ně těžké se učivo doučit, propadají. Často se stěhují, mění školy či od nich bydlí daleko. Maji na ně negativní vliv lidi z prostředí, kde bydlí – nízké ambice či drogy a vyšší kriminalita,“ dodává Prokop.

Překvapením je 39 obcí, u kterých vzdělávání naopak mírně zaostává za jejich sociálním statusem. Je zde vyšší počet neprospívajících a předčasně končících studentů, než by odpovídalo sociálním problémům. Příkladem jsou odlehlejší části Plzeňského a Jihočeského kraje, ale i středně velká města ekonomicky silných částí republiky - Český Brod, Mladá Boleslav, Rakovník, či Jindřichův Hradec.

## Rodiče v exekuci

„Odhadujeme, že v roce 2017 byl v exekuci až každý šestý až sedmý rodič  s dítětem v domácnosti. V dospělé populaci mělo exekuce „jen“ 9,3 procent, ale časté jsou mezi lidmi v rodičovském věku 30 až 60 let, naopak zřídka se vyskytují u mladších a starších. Z věkové struktury rodičovství lze odhadovat, že exekuci mělo okolo 16 procent rodičů,“ popisuje sociolog Michal Kunc.

A počet exekuovaných rodičů a dětí v bytové nouzi – tedy žijících na ubytovnách, v azylových domech či v extrémně nevyhovujících podmínkách - výrazně souvisí se školní neúspěšností. „Nevyplývá z toho sice, že jde o přímý důsledek bydlení a exekucí, ale zahraniční i některé české výzkumy ukazují, že v rámci chudé populace mají horší úspěšnost ve vzdělávání děti, které žijí v nebytovém bydlení či často mění školy nebo jsou jejich rodiny ve vyšším stresu a izolaci – například kvůli předlužení. Chudoba se do školních problémů neprojevuje číslem na účtu, ale těmito faktory,“ vysvětluje Daniel Prokop.

„V azylových domech či ubytovnách mnohdy chybí základní vybavení pro fungování domácností, jsou tam sdílené koupelny či kuchyně. V případech ubytoven se častěji objevují nemoci, štěnice, švábi. Děti nemají vlastní pokoj, celá rodina žije z pravidla v jedné místnosti. Děti tedy nemají nejen prostor na učení, ale ani na to, aby se normálně vyspaly,“ dodává Klusáček. 

## Problém nejen školství

Výsledky tak potvrzují zjištění mezinárodního srovnání PISA, které dlouhodobě uvádí, že sociální status rodin a škol kvalitu vzdělání českých dětí silně ovlivňuje. 

<left>
<p>„U sociologických analýz silné vztahy nebývají, ale tady je korelace mezi odhadovaným počtem rodičů v exekuci a počtem dětí, které mají vzdělávací problémy, přibližně 0,7 a u bytové nouze okolo 0,6, což je velmi silný vztah,“ vysvětluje Daniel Prokop.</p>

<p>Vliv na neprospívající žáky naopak nemá například rozvodovost nebo dostupnost mateřských škol v jednotlivých regionech.</p>
</left>

Podle sociologů to naznačuje, že obrovské regionální nerovnosti ve vzdělávání nemůže vyřešit školství samo. „Ukazuje to, že se v zatížených krajích musí řešit také problémy dětí v nevzdělávací oblasti,“ říká Prokop.

S těmito problémy úzce souvisí také segregace ve školství, na kterou upozorňuje Agentura pro sociální začleňování. „Opakovaně se o nerovnostech ve vzdělávání mluví i v souvislosti s žáky ze sociálně vyloučeného prostředí. Úroveň vzdělanosti se dokonce generaci od generace snižuje,“ uvádí analýza segregace, která upozorňuje na fenomén některých českých měst, kde rodiče účelově hlásí své děti do vzdálenějších škol, aby nepřišly do styku se sociálně vyloučenými dětmi. 

„Jinou než spádovou nebo nejbližší školu si volí spíše vzdělanější rodiče, v těchto školách někde zůstane větší podíl žáků ze sociálně znevýhodněného prostředí. Ve městech s více školami jsou v obecném povědomí některé školy považované za ‚prestižnější‘ nebo ‚lepší‘, což ovlivňuje volbu opět spíše vzdělanějších rodičů,“ vysvětluje Roman Matouška z Agentury pro sociální začleňování.
 
## Regionálně specifická opatření

Odlišnost problémů si podle Prokopa žádá regionálně specifická opatření. „V extrémně zatížených obcích, kterých jsme identifikovali 28, jsou nutné intervence na všech frontách oddlužení, vytvoření sociálního bydlení a stabilizace rodin, posílení učitelského stavu, nepedagogických pracovníků,“ tvrdí.

<right>Sociologové PAQ Reserach analýzu zpracovali ku příležitosti konference Aspen Institut, za podpory nadace Bader Foundation.</right>

V rámci českého školství dlouhodobě chybí dostatek školních psychologů, speciálních pedagogů, podpůrných asistentů. Problém je ale i v jejich nerovnoměrném rozmístění. „V Karlovarském kraji jsou na základních školách jen jednotky školních psychologů. V Praze má naopak řada škol vlastního školního psychologa,“ upozorňuje Prokop. Tito odborníci by podle něj měli pomáhat v kooperaci s Orgánem sociálně-právní ochrany dětí (OSPOD) jednotlivých obcí, který má za úkol zmíněné problémy řešit.

Nyní se ale podle Prokopa OSPOD často zabývá extrémními případy, což je rozdíl vůči zahraničí, kde se zaměřují na prevenci. „Snaží se odhalit problémy včas. Kontrolují více absence, pracují se školou, aby dítě dohánělo problémy. To tady trochu chybí,“ přibližuje sociolog.

V obcích, kde vzdělání mírně zaostává za sociálními problémy, by podle něj naopak mohl pomoct další bod, který zmiňuje Strategie vzdělávání do roku 2030. To je zavedení středního článku vedení. Nyní totiž školy zřizující obce. Ředitelé jsou přetížení administrativou, protože každý žádá zvlášť o dotační programy a řeší problémy od požární ochrany po IT. Nemají tak čas se věnovat pedagogickému vedení. Pokud by jim někdo pomohl, výuku by to mohlo posílit.