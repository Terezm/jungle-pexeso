import React, { useState } from "react";
import "./info.css";

export const Info = () => {
  const animals = [
    {
      name: "Delfín",
      description:
        "Delfíni jsou inteligentní mořskí savci, kteří jsou známí svou hravostí a sociálním chováním. Mají hladké tělo s dlouhou špičatou hlavou a ploutvemi.",
      habitat:
        "Delfíni se vyskytují ve všech oceánech a mořích po celém světě. Žijí ve skupinách nazývaných hejna a přizpůsobují se různým prostředím, včetně teplých tropických vod i chladnějších oblastí.",
      diet: "Delfíni jsou masožravci a jejich strava se skládá převážně z ryb a korýšů. Jsou dobří lovci a využívají echolokaci k nalezení potravy.",
    },
    {
      name: "Žirafa",
      description:
        "Žirafa je obrovský býložravý savčí druh, který je známý svou vysokou krkem a unikátním vzorem na srsti. Jejich dlouhé nohy a krk jim umožňují dosahovat listí na stromech.",
      habitat:
        "Žirafy obývají převážně savany, louky a otevřené lesy. Jsou rozšířené v několika afrických zemích a vyhledávají oblasti s dostatečnou zelení k příjmu potravy.",
      diet: "Žirafy se živí převážně listím z vyšších větví stromů. Jejich dlouhý jazyk až 45 cm jim umožňuje dosáhnout na větve a vytrhat listy a mladé výhonky.",
    },

    {
      name: "Slon",
      description:
        "Sloni jsou velcí savci s charakteristickým chobotem a dlouhými kly. Jsou známí svou inteligencí, silou a sociálním chováním. Patří mezi největší suchozemské živočichy na světě.",
      habitat:
        "Sloni žijí v různých typech prostředí, včetně lesů, savan, bažin a pouští. Obývají různé části Afriky a Asie, ačkoli některé druhy jsou ohrožené.",
      diet: "Sloni jsou býložravci a jejich strava se skládá převážně z trávy, listí, větví a plodů stromů. Jsou známí tím, že dokáží konzumovat velké množství potravy denně.",
    },
    {
      name: "Gorila",
      description:
        "Gorily jsou velcí primáti se silným tělem a velkými svalnatými rameny. Jsou příbuzné s člověkem a jsou známé svou sílou a mírumilovným chováním. Patří mezi největší žijící primáty.",
      habitat:
        "Gorily obývají lesy a horské oblasti v Africe. Žijí ve skupinách nazývaných tlupy a vyhledávají oblasti s dostatečnou potravou a úkrytem.",
      diet: "Gorily jsou převážně býložravci a jejich strava se skládá z listí, výhonků, plodů a stonků. V některých případech mohou konzumovat i hmyz nebo jiné menší živočichy.",
    },
    {
      name: "Hroch",
      description:
        "Hroši jsou velcí, těžcí savci s masivním tělem a širokou tlamou. Jsou známí svou obrovskou silou a schopností žít jak na souši, tak ve vodě. Patří mezi nejnebezpečnější zvířata v Africe.",
      habitat:
        "Hroši obývají řeky, jezera, bažiny a přilehlé pastviny v subsaharské Africe. Potřebují dostatek vody, aby si udrželi své tělesné teploty a potravu.",
      diet: "Hroši jsou býložravci a jejich strava se skládá převážně z trávy, listí, plodů a bylin. Potřebují konzumovat velké množství potravy, protože jsou velká a těžká zvířata.",
    },
    {
      name: "Panda",
      description:
        "Pandy jsou černobílé medvědy s charakteristickými kruhovými skvrnami na jejich těle. Jsou symboly ochrany přírody a jsou známé svou klidnou povahou. Patří mezi ohrožené druhy.",
      habitat:
        "Pandy žijí v horských oblastech Číny, včetně bambusových lesů a horských pralesů. Jsou adaptovány na život ve vlhkém a chladném klimatu.",
      diet: "Pandy jsou převážně býložravci a jejich strava se skládá téměř výhradně z bambusu. Konzumují velké množství bambusu denně a jsou dobře přizpůsobeni stravitelství rostlinné stravy.",
    },
    {
      name: "Zebra",
      description:
        "Zebry jsou středně velcí savečci s charakteristickým pruhovaným kožichem. Jsou známé svou rychlostí a elegantním vzhledem. Patří mezi ikonická africká zvířata.",
      habitat:
        "Zebry se vyskytují v různých typech prostředí, včetně savan, stepí, lesů a horských oblastí. Obývají různé části Afriky, od jihu kontinentu po východní a západní oblasti.",
      diet: "Zebry jsou býložravci a jejich strava se skládá převážně z trávy, listí, výhonků a kůry stromů. Mají přizpůsobené zuby a žaludek, které jim umožňují strávit drsnou rostlinnou stravu.",
    },
    {
      name: "Bílý tygr",
      description:
        "Bílí tygři jsou vzácná varianta tygrů, kteří mají bílou srst s tmavými pruhy. Jsou to velcí a silní šelmy, které jsou obdivovány pro svou krásu. Bílí tygři jsou známí především z indické populace.",
      habitat:
        "Bílí tygři žijí v různých typech prostředí, včetně lesů, džunglí a bažinatých oblastí. Obývají různé části Indie, kde mají přizpůsobenou životní prostředí.",
      diet: "Bílí tygři jsou masožravci a jejich strava se skládá převážně z masa. Loví a konzumují různé druhy zvířat, včetně jelenů, prasat, kopytníků a menších savců.",
    },
    {
      name: "Mořská želva",
      description:
        "Mořské želvy jsou velké plazi, kteří se přizpůsobili životu ve vodě. Jsou známé svým dlouhým životním cyklem a migracemi na dlouhé vzdálenosti. Existuje několik druhů mořských želv, jako například kareta, zelená želva nebo kožatka.",
      habitat:
        "Mořské želvy obývají oceány a moře po celém světě. Při hnízdění vyhledávají pláže, kde klade svá vejce. Během migrace mohou pokrýt velké vzdálenosti a navštěvovat různé oblasti.",
      diet: "Mořské želvy jsou většinou býložravci, kteří se živí mořskými řasami, medúzami, mořskými rostlinami a další vegetací. Některé druhy žerou také mořské plže, korýše a ryby.",
    },
    {
      name: "Lev",
      description:
        "Lvi jsou velcí a silní šelmy s charakteristickou hřívou u samců. Jsou známí svou sílou, hlasitým řevem a sociálním chováním. Jsou to výborní lovci a patří mezi nejznámější africká zvířata.",
      habitat:
        "Lvi se vyskytují v různých typech prostředí, včetně savan, suchých oblastí a lesů. Obývají různé části Afriky, zejména subsaharskou oblast.",
      diet: "Lvi jsou masožravci a jejich strava se skládá převážně z masa. Loví a konzumují různá zvířata, včetně antilop, zebří, buvolů a dalších kopytníků.",
    },

    {
      name: "Gepard",
      description:
        "Gepardi jsou štíhlí a rychlí šelmy s charakteristickými černými skvrnami na svém zlatém kožichu. Jsou nejrychlejšími suchozemskými živočichy a mají výjimečnou schopnost dosáhnout vysokých rychlostí při honu na kořist.",
      habitat:
        "Gepardi obývají otevřené prostředí, včetně savan, stepí a hustých keřovitých oblastí. Vyskytují se v různých částech Afriky a malé části Íránu.",
      diet: "Gepardi jsou masožravci a jejich strava se skládá převážně z menších a středně velkých zvířat. Loví převážně antilopy, gazely a zajíce.",
    },
    {
      name: "Koala",
      description:
        "Koalové jsou malí savci s tlustou chlupatou srstí a velkými okrouhlými ušima. Jsou známí svou leností a výhradním stravováním eukalyptových listů. Jsou endemické pro Austrálii.",
      habitat:
        "Koalové obývají lesy a eukalyptové háje v Austrálii. Jsou specializovaní na stromový život a většinu času tráví v korunách stromů.",
      diet: "Koalové jsou býložravci a jejich strava se skládá výhradně z eukalyptových listů. Mají přizpůsobený trávicí systém, který jim umožňuje strávit těžce stravitelnou stravu a získat z ní potřebné živiny.",
    },
    {
      name: "Vlk",
      name: "Vlk",
      description:
        "Vlci jsou středně velcí šelmy, které žijí v rodinných smečkách. Jsou známé svou inteligencí, vytrvalostí a loveckými schopnostmi. Vlci mají silný sociální systém a komunikační dovednosti.",
      habitat:
        "Vlci se vyskytují ve různých typech prostředí, včetně lesů, hor a tundry. Obývají různé části Evropy, Asie a Severní Ameriky.",
      diet: "Vlci jsou masožravci a jejich strava se skládá převážně z masa. Loví a konzumují různá zvířata, včetně jelenů, losů, zajíců a menších savců.",
    },
    {
      name: "Klokan",
      description:
        "Klokani jsou středně velcí savečci, kteří se vyznačují svou schopností skákat pomocí zadních končetin. Jsou známí svou adaptací na život v australské buši a svým charakteristickým vzhledem.",
      habitat:
        "Klokani obývají různé části Austrálie, včetně lesů, stepí a savan. Jsou specializovaní na suchozemský život a dokážou se přizpůsobit různým prostředím.",
      diet: "Klokani jsou býložravci a jejich strava se skládá převážně z rostlinného materiálu. Konzumují trávu, byliny, listy a větvičky. Jsou také přizpůsobeni k životu v suchých oblastech, kde získávají vodu z potravy.",
    },
    {
      name: "Chameleon",
      description:
        "Chameleon je ještěr s unikátní schopností měnit barvu své kůže. Jsou známí svou dlouhou lepkavou jazykou, kterou používají k lovu hmyzu. Chameleoni mají také výjimečně pohyblivé oči a schopnost se maskovat ve svém prostředí.",
      habitat:
        "Chameleoni se vyskytují v různých prostředích, včetně tropických deštných lesů, savan a pouští. Obývají různé části Afriky, Madagaskaru, Blízkého východu a jižní Evropy.",
      diet: "Chameleoni jsou hlavně hmyzožravci. Loví různý hmyz, jako jsou mouchy, kobylky a švábi. Někteří druhy chameleonů mohou také konzumovat menší plazy a ovoce.",
    },

    {
      name: "Medvěd hnědý",
      description:
        "Medvěd hnědý je velký a silný savec ze skupiny medvědů. Jsou to všežravci, kteří mají hustou srst a charakteristický hrb na zádech. Medvědi hnědí jsou rozšíření v různých částech Evropy, Asie a Severní Ameriky.",
      habitat:
        "Medvědi hnědí obývají různá prostředí, včetně lesů, hor, tundry a pobřežních oblastí. Mají velký areál rozšíření a jejich přizpůsobivost jim umožňuje obývat různé typy habitatů.",
      diet: "Medvědi hnědí jsou všežravci a jejich strava je velmi rozmanitá. Konzumují různé druhy potravy, včetně ryb, hmyzu, bobulí, ořechů, trávy, kořínků a občas i malých savců.",
    },

    {
      name: "Kočka domácí",
      description:
        "Kočka domácí je malý savec ze skupiny koček. Jsou známé svou elegance, nezávislostí a loveckými schopnostmi. Kočky domácí jsou často chovány jako domácí mazlíčci a mají různé plemena s různými vzhledy a charakteristikami.",
      habitat:
        "Kočky domácí jsou rozšířeny po celém světě a přizpůsobily se životu v blízkosti lidí. Původně pocházejí z divokých koček, které obývají různá prostředí, včetně lesů, stepí a horských oblastí.",
      diet: "Kočky domácí jsou masožravci a jejich strava se skládá převážně z masa. V přírodě loví menší zvířata, jako jsou myši a ptáci. V domácnostech jsou krmeny komerčním krmivem pro kočky.",
    },

    {
      name: "Bizon",
      description:
        "Bizon je velký savec z čeledi turovitých. Jsou známí svým masivním tělem, silnými rohy a hustým kožichem. Bisoni mají důležitou historickou a kulturní hodnotu v Severní Americe, kde byli kdysi divoce rozšířeni.",
      habitat:
        "Bisoni obývali širokou škálu prostředí, včetně prérií, lesů a vřesovišť. Dnes jsou bisoni převážně omezeni na chráněné rezervace a národní parky, zejména v Severní Americe.",
      diet: "Bisoni jsou býložravci a jejich strava se skládá převážně z trávy a jiných rostlin. Jsou přizpůsobeni ke životu na pastvinách a dokáží se pohybovat v hledání potravy po rozsáhlých oblastech.",
    },

    {
      name: "Krokodýl nilský",
      description:
        "Krokodýl nilský je velký plaz se silným tělem a dlouhými čelistmi. Jsou známí svou agresivitou a loveckými schopnostmi. Krokodýli nilští žijí v blízkosti vodních toků a bažin v různých částech Afriky.",
      habitat:
        "Krokodýli nilští obývají sladkovodní prostředí, včetně řek, jezer a močálů. Jsou často nalezeni v deltách řek a mangrovových porostech. Potřebují dostatek vody a slunečního tepla pro regulaci tělesné teploty.",
      diet: "Krokodýli nilští jsou masožravci a jejich strava se skládá převážně z masa. Loví a konzumují různá zvířata, včetně ryb, ptáků, savců a občas i větších kořisti, jako jsou antilopy.",
    },
    {
      name: "Puma",
      description:
        "Puma, známá také jako horský lev, je velká kočkovitá šelma s pohyblivým tělem a silnými svaly. Jsou známé svou mrštností a loveckými schopnostmi. Pumy se vyskytují v různých typech prostředí od hor až po deštné lesy.",
      habitat:
        "Pumy obývají různé části Ameriky, včetně Severní a Jižní Ameriky. Jsou přizpůsobivé a mohou se vyskytovat v různých prostředích, včetně lesů, hor, prérií a bažin.",
      diet: "Pumy jsou masožravci a jejich strava se skládá převážně z masa. Loví různé druhy zvířat, včetně jelena, králíka, divokých prasat a jiných menších savců. Jsou efektivními lovci díky své rychlosti a obratnosti.",
    },
    {
      name: "Kapybara",
      description:
        "Kapybara je největší žijící hlodavec na světě. Mají robustní tělo, krátké nohy a charakteristickou plochou hlavu. Kapybary jsou sociální a často žijí ve skupinách u vodních toků, jako jsou řeky, jezera a bažiny.",
      habitat:
        "Kapybary obývají různá prostředí v Jižní Americe, včetně tropických deštných lesů, močálů a pobřežních oblastí. Jsou dobře přizpůsobeni životu ve vodě a potřebují přístup k vodě pro ochlazování a koupání.",
      diet: "Kapybary jsou býložravci a jejich strava se skládá převážně z rostlin. Konzumují různé druhy vegetace, včetně trávy, bylin a vodních rostlin. Jsou také známé svým stravitelným trávicím systémem, který jim umožňuje zpracovávat vlákninu.",
    },

    {
      name: "Surikata",
      description:
        "Surikata, také známá jako surikata africká, je malý savec žijící v pouštních oblastech Jižní Afriky. Jsou to společenská zvířata, která žijí v rodinných skupinách a spolupracují při hledání potravy a střežení teritoria.",
      habitat:
        "Surikaty obývají pouštní oblasti a polopouště v jižní Africe. Vyžadují suché a slunné prostředí s dostatečným množstvím úkrytů, jako jsou skalní štěrbiny a norové systémy.",
      diet: "Surikaty jsou masožravci a jejich strava se skládá převážně z hmyzu, jako jsou termity a kobylky. Konzumují také menší obratlovce, vejce a plody. Jsou známé svým pozorovacím chováním, kdy se zvedají na zadní nohy a sledují okolí.",
    },
    {
      name: "Tukan",
      description:
        "Tukan je středně velký pták s výrazným zobákem a pestrobarevným peřím. Jsou známé svou exotickou krásou a charakteristickým vzhledem. Tukani se vyskytují v tropických lesích Střední a Jižní Ameriky.",
      habitat:
        "Tukani obývají různé druhy tropických lesů, včetně deštných lesů, mangrovových porostů a savan. Vyžadují stromovou vegetaci a přístup k ovoci, které tvoří jejich hlavní stravu.",
      diet: "Tukani jsou ovocní ptáci a jejich strava se skládá převážně z ovoce. Konzumují také semena, hmyz a malé obratlovce. Mají silný zobák, který jim pomáhá rozbit ovoce a získat potravu.",
    },
    {
      name: "Tučňák císařský",
      description:
        "Tučňák císařský je největší druh tučňáka a známý svým charakteristickým vzhledem. Mají černobílé peří a žluté znaky na hlavě. Tučňáci císařští žijí na antarktickém kontinentu a v okolních mořích.",
      habitat:
        "Tučňáci císařští obývají převážně antarktické regiony. Hnízdí na pevninských ledových šelfech a potravu loví v mořích v okolí. Jsou odolní vůči extrémním teplotám a žijí v těsné komunitě s ostatními tučňáky.",
      diet: "Tučňáci císařští jsou masožravci a jejich strava se skládá převážně z krilu, ryb a jiných mořských organismů. Loví potravu pod ledem a dokáží se ponořit do velkých hloubek v moři.",
    },
    {
      name: "Kobra indická",
      description:
        "Kobra indická je jedovatý had žijící v Indii a dalších částech jižní Asie. Jsou známé svou charakteristickou rozevíratelnou chřípí a výstražnou schopností zvednout přední část těla do vzduchu. Kobra indická je jedním z nejznámějších hadů na světě.",
      habitat:
        "Kobry indické obývají různá prostředí, včetně lesů, trávníků, polí a zemědělských oblastí. Často se vyskytují poblíž lidských obydlí, protože jsou přitahovány potravou a úkrytem.",
      diet: "Kobry indické jsou masožravci a jejich strava se skládá převážně z menších obratlovců, jako jsou malí savci, ptáci a hadi. Jsou jedovaté a používají svůj jed k paralyzování kořisti.",
    },
    {
      name: "Plameňák růžový",
      description:
        "Plameňák růžový je velký vodní pták s dlouhými nohama a charakteristickým zakřiveným zobákem. Jsou známé svou výraznou růžovou barvou peří a společenským chováním. Plameňáci růžoví žijí v různých částech světa a často se vyskytují ve slaných nebo sladkovodních oblastech.",
      habitat:
        "Plameňáci růžoví obývají různá prostředí, včetně slaných jezer, bažin a mělkých pobřežních vod. Hnízdí v koloniích a vyžadují dostatek potravy ve formě malých vodních organismů, jako jsou korýši a malé ryby.",
      diet: "Plameňáci růžoví jsou filtrující ptáci a jejich strava se skládá převážně z malých vodních organismů, které filtrují ze sedimentu. Mají speciální anatomické adaptace, které jim umožňují oddělovat potravu od vody.",
    },
    {
      name: "Tapír",
      description:
        "Tapír je velký býložravý savec s robustním tělem, krátkými nohami a charakteristickým prodlouženým chobotem. Tapíři se vyskytují v různých částech Střední a Jižní Ameriky. Jsou známí svou neohrožeností a přizpůsobivostí ve vodním a suchozemském prostředí.",
      habitat:
        "Tapíři obývají různé typy prostředí, včetně tropických deštných lesů, bažinatých oblastí, prérií a horských lesů. Potřebují přístup k vodě pro ochlazování a koupání.",
      diet: "Tapíři jsou býložravci a jejich strava se skládá převážně z listí, výhonků, plodů a vodních rostlin. Mají silné čelisti, které jim umožňují konzumovat i tvrdší rostlinnou potravu.",
    },
    {
      name: "Jaguár",
      description:
        "Jaguár je velká kočkovitá šelma s krátkým a silným tělem, charakteristickými skvrnami a silnou čelistí. Jaguáři se vyskytují v různých částech Ameriky, včetně tropických deštných lesů a savan. Jsou známí svou sílou a loveckými schopnostmi.",
      habitat:
        "Jaguáři obývají různé druhy prostředí, včetně deštných lesů, bažinatých oblastí, pobřežních oblastí a horských oblastí. Jsou výbornými plavci a loví jak na souši, tak ve vodě.",
      diet: "Jaguáři jsou masožravci a jejich strava se skládá převážně z masa. Loví různé druhy zvířat, včetně jelenů, pekari, opic, ryb a kapybar. Jsou velmi dobří lovci a často používají překvapivý útok na svou kořist.",
    },
    {
      name: "Nosorožec",
      description:
        "Nosorožci jsou obrovská suchozemská zvířata se silným tělem a velkými rohy na nose. Patří mezi největší suchozemské savce na světě.",
      habitat:
        "Nosorožci obývají různé druhy prostředí, včetně savan, lesů a bažin. Jsou přizpůsobeni životu ve vyšších oblastech i v nížinách.",
      diet: "Jejich strava se skládá převážně z rostlin. Zásadní část jejich jídelníčku tvoří tráva, větve, listy a plody stromů.",
    },
    {
      name: "Černý panter",
      description:
        "Černý panter je označení pro formu leoparda nebo jaguára s černým zbarvením srsti. Oba druhy mají přirozeně rozmanité skvrnité zbarvení, ale u černých panterů je tato skvrnitost téměř neviditelná. Tmavé zbarvení srsti je způsobeno genetickou mutací nazývanou melanismus.",
      habitat:
        "Černí panterové obývají různé druhy prostředí, včetně tropických deštných lesů, bažinatých oblastí a horských oblastí. Mají široký rozsah výskytu, který zahrnuje různé části Asie, Afriky a Ameriky.",
      diet: "Černí panterové jsou masožravci a jejich strava zahrnuje různé druhy zvířat, jako jsou opice, jeleni, prasata, ptáci a malí savci. Jsou vynikajícími lovci a využívají svou šikovnost a skrytý přístup k překvapení své kořisti.",
    },
  ];

  return (
    <div>
      <h1>Zvířata</h1>
      {animals.map((animal, index) => (
        <div key={index}>
          <h2>Jméno:{animal.name}</h2>
          <p>Popis:{animal.description}</p>
          <p>Místo výskytu: {animal.habitat}</p>
          <p>Strava: {animal.diet}</p>
        </div>
      ))}
    </div>
  );
};
