// lib/copy.js
// Jediný zdroj pravdy pro CELÝ viditelný text na landing page.
// Každý text, který si uživatel může na obrazovce přečíst, MUSÍ být tady.

export const copy = {
  metadata: {
    title: "101 Domácích burgerů | Digitální kuchařka",
    description:
      "Digitální kuchařka pro přípravu domácích burgerů. 101 jednoduchých, šťavnatých a chuťově vyladěných receptů, se kterými si doma připravíš naprosto neodolatelné burgery.",
  },

  promoBar: {
    text: "Speciální časově omezená nabídka",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitální kuchařka plná domácích burgerů",
    headline: {
      pre: "101 domácích burgerů, se kterými",
      accent: "ohromíš úplně všechny",
    },
    subheadline:
      "Objev jednoduché, šťavnaté a hrozně dobré recepty na neodolatelné burgery. Bez zbytečného stresování v kuchyni, zbytečného utrácení a závislosti na fast foodech.",
    paragraph:
      "Proměň každé jídlo ve výjimečný okamžik s jednoduchými a chutnými nápady, které jsou jako stvořené pro společné večery s rodinou a přáteli.",
    stats: [
      { value: "101", label: "chutných nápadů" },
      { value: "Domácí", label: "s chutí jako z restaurace" },
    ],
    bullets: [
      "101 rozmanitých receptů",
      "Šťavnaté a na přípravu snadné burgery",
      "Běžně dostupné a obyčejné suroviny",
      "Varianty s hovězím, kuřecím a dalšími",
      "Ideální tipy na večeře a oslavy",
      "Poctivá domácí chuť na úrovni restaurace",
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Balíček 101 Domácích burgerů - Digitální kniha",
    badge: "101 chutných nápadů",
  },

  story: {
    eyebrow: "Skvělé jídlo si nemusíš vždycky jen objednávat",
    headline: {
      pre: "Nemusíš vytáhnout paty z domu, abys zkusil",
      accent: "fakt neskutečně dobrý burger",
    },
    paragraphs: [
      {
        text: "Někdy není problém v tom, že bychom neměli hlad... problém je, že nám chybí nápady, jak připravit něco šťavnatého, jiného, prostě něco s tou chutí, co tě nutí si okamžitě přidat další kousek.",
        style: "default",
      },
      {
        text: "Připraveno doma s naprosto neodolatelnou chutí",
        style: "bold-accent",
      },
    ],
    painsTitle: "Když ti dojdou nápady nebo se ti nechce vymýšlet, dopadne to takhle:",
    pains: [
      "Nakonec vaříš pořád to samé dokola",
      "Burgery se ti vysuší nebo nemají pořádný šmrnc",
      "Nevíš, jak správně zkombinovat omáčky, sýry a přílohy",
      "Objednáváš fast food, i když by sis mohl uvařit mnohem lépe doma",
      "Zůstáváš úplně bez nápadů na večeři nebo na víkend",
    ],
    bridge:
      "Ten hlavní rozdíl spočívá v jasných receptech, chuťově sladěných kombinacích a jednoduchých krocích, díky kterým se z každého obyčejného burgeru stane něco výjimečného.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Domácí burger, připravený k servírování",
  },

  steps: {
    eyebrow: "Jen 3 kroky k dokonalému domácímu požitku",
    headline: {
      pre: "Konečně jednoduchý způsob, jak uvařit",
      accent: "neodolatelné domácí burgery",
      post: "pro celou rodinu",
    },
    subheadline:
      "Užij si šťavnaté, snadné a chuťově bohaté recepty, aniž bys musel z domu, vše si komplikoval nebo jedl pořád to samé.",
    paragraph:
      "Stačí si vybrat recept, držet se pár jednoduchých kroků a vychutnat si jídlo, u kterého si budou všichni chtít přidat.",
    items: [
      {
        number: "01",
        title: "Vyber si burger pro každou příležitost",
        body: "Od rychlé večeře přes týden po víkend s rodinou – budeš mít po ruce spoustu chutných nápadů, jak udělat něco jiného a zbytečně nad tím nedumat.",
      },
      {
        number: "02",
        title: "Připrav domácí recepty plné skvělých chutí",
        body: "Vyzkoušej jednoduché kombinace s masem, kuřecím, sýry, omáčkami a dalšími ingrediencemi a vytvoř šťavnaté burgery s tím pravým domácím nádechem.",
      },
      {
        number: "03",
        title: "Vychutnej si jídlo, které všechny spojí",
        body: "Naservíruj doma neodolatelné burgery a proměň každé jídlo ve skvělý zážitek, o který se podělíš s rodinou nebo kamarády.",
      },
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  benefits: {
    eyebrow: "Více chuti, méně námahy",
    headline: {
      pre: "Co se změní, když máš v ruce",
      accent: "101 nápadů",
      post: "na přípravu burgerů u tebe doma",
    },
    subheadline:
      "Přestaň improvizovat s tím samým dokola a udělej z každého jídla něco poctivého, chutného a pohodového na sdílení.",
    items: [
      {
        title: "Už nikdy nezůstaneš bez nápadu",
        body: "Vždycky najdeš jiný recept, jak uvařit něco dobrého bez zdlouhavého přemýšlení.",
        icon: "sparkles",
      },
      {
        title: "Výjimečnější stolování",
        body: "Z obyčejné večeře se stane chuťový zážitek pro tebe i tvé blízké.",
        icon: "heart",
      },
      {
        title: "Víc chuti i bez chození ven",
        body: "Uděláš si šťavnaté, domácí burgery v kombinacích, které chutnají jak z vyhlášené restaurace.",
        icon: "home",
      },
      {
        title: "Méně starostí v kuchyni",
        body: "Jednoduché recepty, dostupné suroviny a snadný postup krok za krokem.",
        icon: "zap",
      },
      {
        title: "Varianty na každou akci",
        body: "Od rychlé večeře po líný víkend doma nebo večerní posezení s přáteli.",
        icon: "users",
      },
      {
        title: "Konec věčným chutím",
        body: "Když dostaneš neodolatelnou chuť, prostě si ji hned zaženeš sám, bez čekání na rozvoz.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "S touhle kuchařkou přestane být dělání burgerů doma opruz a stane se snadnou cestou, jak",
      accent: "všechny kolem sebe rozmazlit něčím fakt skvělým.",
    },
  },

  features: {
    eyebrow: "Všechno, co potřebuješ k oživení svých burgerů",
    headline: {
      pre: "101 domácích burgerů, se kterými každé jídlo bude",
      accent: "prostě neodolatelné",
    },
    subheadline:
      "Praktická kuchařka s recepty na ty nejšťavnatější a nejrozmanitější burgery plné chuti, bez zbytečných nervů a s variantami pro různé chutě, chvíle i touhy.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Podle nálady",
        title: "Burgery pro každou chuť",
        body: "Objev klasické, krémové, křupavé, pikantní, pořádně naložené nebo i lehčí recepty a vybírej podle toho, na co máš zrovna chuť.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Krok za krokem",
        title: "Příprava, se kterou se neztratíš",
        body: "Postupuj podle jednoduchých instrukcí a sestav každý burger bez složitého tipování množství, kombinací nebo pořadí surovin.",
      },
      {
        emoji: "🥬",
        eyebrow: "Suroviny",
        title: "Rozmanité ingredience a kombinace",
        body: "Využij hovězí, kuřecí, sýry, slaninu, zeleninu, houby, avokádo, okurky a další doplňky k vytvoření úplně nových chutí.",
      },
      {
        emoji: "🔥",
        eyebrow: "Více chuti",
        title: "Omáčky a speciální detaily",
        body: "Dodej svým burgerům pořádný šmrnc domácími dresinky, krémovými omáčkami, BBQ, hořčicí, kořením a detaily, co dělají ten pravý rozdíl.",
      },
      {
        emoji: "🏡",
        eyebrow: "Ke sdílení",
        title: "Nápady na posezení a víkendy",
        body: "Připrav burgery jako stvořené ke sdílení s rodinou, pohoštění přátel nebo prostě pro trošku lepší víkendový oběd doma.",
      },
      {
        emoji: "🚚",
        eyebrow: "Bez dovážky",
        title: "Víc chuti i bez spoléhání na kurýra",
        body: "Zažeň hlad doma s recepty, které jsou bohaté, poctivé a mnohem víc uspokojující než nějaké odfláknuté jídlo narychlo.",
      },
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  carouselSection: {
    eyebrow: "Snadné recepty pro domácí pohodu",
    headline: {
      pre: "Chutné domácí burgery ve",
      accent: "snadných a praktických variantách",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Šťavnatý domácí burger naservírovaný na prkénku" },
      { src: "/carousel/slide-2.webp", alt: "Burger se slaninou a rozteklým sýrem" },
      { src: "/carousel/slide-3.webp", alt: "Rozmanité druhy domácích burgerů" },
      { src: "/carousel/slide-4.webp", alt: "Proces přípravy domácího burgeru" },
    ],
    chips: [
      "RYCHLÁ PŘÍPRAVA",
      "DOSTUPNÉ SUROVINY",
      "POCTIVÁ DOMÁCÍ CHUŤ",
      "IDEÁLNÍ KE SDÍLENÍ",
    ],
    forYouTitle: "„101 Domácích burgerů“ je přímo pro tebe, pokud:",
    forYou: [
      {
        title: "Chceš uvařit něco dobrého bez zbytečných komplikací:",
        body: "snadno pochopitelné recepty, vymyšlené tak, abys udělal parádní burgery bez hodin strávených v kuchyni.",
      },
      {
        title: "Hledáš rychlé nápady, co si dát doma k jídlu:",
        body: "praktické možnosti pro dny, kdy máš na něco chuť, ale nechce se ti moc dlouho vymýšlet, co vařit.",
      },
      {
        title: "Rád rozmazluješ svou rodinu nebo přátele:",
        body: "šťavnaté, domácí a po čertech dobré burgery, o které se podělíte u večeře, o víkendu nebo na oslavě.",
      },
      {
        title: "Chceš rozmanitost, ale žádné složité recepty:",
        body: "kombinace s masem, kuřecím, sýry, omáčkami, zeleninou a přílohami, abyste nejedli pořád to samé dokola.",
      },
      {
        title: "Dáváš přednost domácímu před rozvozem:",
        body: "udělej si doma poctivé, jednoduché a mnohem víc uspokojující burgery, kdykoliv tě přepadne ta správná chuť.",
      },
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    a11yPrev: "Předchozí recept",
    a11yNext: "Další recept",
    a11yDot: "Přejít na recept",
  },

  bonuses: {
    eyebrow: "Časově omezené bonusy navíc",
    headline: {
      pre: "Když si pořídíš",
      accent: "101 Domácích burgerů",
      post: ", získáš jako dárek i tohle",
    },
    intro:
      "Doplň své burgery praktickými průvodci pro přípravu domácích omáček a dresinků, které posunou každý recept o level výš.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Průvodce domácími omáčkami",
        body: "Jednoduché recepty na krémové, BBQ, pikantní a prostě boží omáčky, se kterými budou tvé burgery ještě o kus lepší.",
        priceLabel: "Běžná hodnota:",
        priceValue: "Zahrnuto ZDARMA",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Průvodce domácími omáčkami",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Průvodce domácími dresinky",
        body: "Nauč se připravit praktické a chutné dresinky, které se hodí nejen k burgerům, ale i na hranolky, do salátů a k dalším domácím jídlům.",
        priceLabel: "Běžná hodnota:",
        priceValue: "Zahrnuto ZDARMA",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Průvodce domácími dresinky",
      },
    ],
    outro: {
      pre: "Díky těmhle bonusům dodáš svým burgerům tu chuť navíc, se kterou i obyčejný recept bude působit",
      accent: "mnohem výjimečněji.",
    },
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  recap: {
    eyebrow: "Vše na jednom místě",
    headline: {
      pre: "Tohle všechno získáš pro přípravu",
      accent: "neodolatelných domácích burgerů",
    },
    subheadline:
      "Hlavní kuchařka s recepty plus doplňující průvodci, se kterými dotáhneš burgery k dokonalosti díky skvělým omáčkám, dresinkům a kombinacím.",
    paragraph: "Dneska fakt není o čem dlouze přemýšlet, prostě začni.",
    body: "Získáš přístup k praktické sbírce receptů a nápadů pro ty nejšťavnatější, domácí a jednoduché burgery spolu s bonusovými materiály, které dají každému jídlu ještě víc chuti.",
    highlight:
      "✨ Obsahuje hlavní kuchařku s recepty a speciální bonusy, se kterými vylepšíš své domácí výtvory na maximum.",
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  testimonials: {
    eyebrow: "Hodnocení od lidí, co rádi vaří doma",
    headline: {
      pre: "Podívej se, co říkají ti, kteří už doma sekají",
      accent: "luxusní domácí burgery",
    },
    subheadline:
      "Opravdové zkušenosti lidí, co chtěli víc nápadů, víc chuti a výjimečnější jídla, bez neustálého spoléhání na rozvoz.",
    items: [
      {
        name: "Jana N.",
        role: "Vaří pro celou rodinu",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Strašně se mi to líbí, protože už nedělám pokaždé ten samý burger. Konečně mám nápady, jak je doma udělat pokaždé jinak a mnohem chutněji.",
      },
      {
        name: "Tomáš K.",
        role: "Ideální záležitost na víkendy",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Ty kombinace omáček a příloh jsou fakt pecka. Moje burgery teď chutnají jak z vyhlášené restaurace, ale přitom jsem si je udělal ve vlastní kuchyni.",
      },
      {
        name: "Veronika S.",
        role: "Víc chuti a ušetřeno za dovážku",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Koupila jsem to, protože jsem chtěla přestat tak často objednávat fast food. Teď, když máme na něco podobného chuť, uděláme si super burgery rovnou doma.",
      },
      {
        name: "Jakub V.",
        role: "Jednoduché a praktické recepty",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Recepty se fakt strašně snadno dodržují. Nemusíš být žádný šéfkuchař, prostě si vybereš nápad a za chvilku máš na stole něco hrozně dobrého.",
      },
      {
        name: "Tereza M.",
        role: "Perfektní na grilovačky a posezení",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Baví mě, že tu jsou varianty fakt pro každého. Udělali jsme si s přáteli burgerový večer a úplně všichni si šli pro nášup.",
      },
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Okamžitý přístup" },
      { icon: "mail", text: "Doručení na e-mail" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    starsAlt: "5 z 5 hvězdiček",
  },

  finalCta: {
    eyebrow: "🔥 Speciální časově omezená nabídka",
    headline: {
      pre: "Získej",
      accent: "101 Domácích burgerů",
      post: "se všemi bonusy",
    },
    subheadline:
      "Připravuj šťavnaté, snadné a neskutečně chutné burgery u sebe doma s praktickými recepty na večeře, víkendy, oslavy i na nečekaný hlad.",
    badge: "🎁 Obsahuje kuchařku s recepty + dárkové bonusy",
    productName: {
      pre: "101 Domácích",
      accent: "burgerů",
    },
    productTagline:
      "Jednoduché, chutné a praktické recepty na přípravu burgerů s poctivou chutí jako z tvé oblíbené restaurace.",
    bullets: [
      "Hlavní kuchařka se 101 nápady na domácí burgery",
      "Klasické, krémové, křupavé, pikantní i pořádně nabité recepty",
      "Varianty s hovězím, kuřecím, sýry, slaninou, zeleninou a přílohami",
      "Jednoduchý postup krok za krokem bez zbytečností",
      "Bonus 1: Průvodce domácími omáčkami",
      "Bonus 2: Průvodce domácími dresinky",
      "Nápady pro rychlé večeře, víkendy a posezení s přáteli",
      "Okamžitý přístup k celé digitální knize",
    ],
    closing: {
      pre: "Ideální volba, pokud chceš jíst fakt dobře bez závislosti na rozvozu:",
      body: "budeš mít plno praktických nápadů na přípravu šťavnatých burgerů doma, o které se podělíš s rodinou nebo přáteli.",
    },
    priceOldLabel: "Běžně:",
    priceOld: "1 090 Kč",
    priceNote: "Nabídka platí pouze dnes",
    priceNow: "199",
    priceCurrency: "Kč",
    priceFooter: "Okamžitý digitální přístup k hlavnímu produktu a všem přibaleným bonusům.",
    urgency: "Poslední kusy za tuto speciální cenu",
    discountPct: "82%",
    discountLabel: "SLEVA",
    button: "ANO, CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Bezpečná platba" },
      { icon: "mail", text: "Přístup na e-mail" },
      { icon: "zap", text: "Okamžité doručení" },
    ],
    imageAlt: "Balíček 101 Domácích burgerů se všemi bonusy",
  },

  faq: {
    eyebrow: "Často kladené otázky",
    headline: {
      pre: "Zodpovíme tvoje dotazy, než začneš s",
      accent: "těmi nejlepšími domácími burgery",
    },
    subheadline:
      "Tady jsou ty nejčastější otázky ohledně naší kuchařky s recepty, bonusů a toho, jak se k materiálům dostaneš.",
    items: [
      {
        q: "Jak mi recepty přijdou?",
        a: "Hned po dokončení platby ti přijde na e-mail (ten, který zadáš při nákupu) digitální přístup ke všem receptům.",
      },
      {
        q: "Dá se to číst i na mobilu?",
        a: "Jasně. Kuchařku si otevřeš na mobilu, tabletu nebo na počítači. K prohlížení materiálů ti stačí jen připojení k internetu.",
      },
      {
        q: "Musím být dobrý kuchař?",
        a: "Vůbec ne. Recepty jsme vymysleli tak, aby byly jednoduché, praktické a jasné, i když nemáš v kuchyni zrovna dvakrát velké zkušenosti.",
      },
      {
        q: "Co přesně za své peníze dostanu?",
        a: "Dostaneš hlavní digitální kuchařku „101 Domácích burgerů“ a k tomu i speciální bonusy – průvodce domácími omáčkami a dresinky.",
      },
      {
        q: "Jsou ty recepty nějak složité?",
        a: "Nejsou. Celá pointa je v tom, že si můžeš doma udělat fantastický burger bez zdlouhavých postupů nebo surovin, co se nedají nikde normálně sehnat.",
      },
      {
        q: "Kdy můžu začít?",
        a: "Můžeš začít, jakmile ti přijde přístup do e-mailu. Prostě si jen vybereš recept a jedeš podle návodu.",
      },
    ],
    cta: "CHCI SVÝCH 101 BURGERŮ",
    trust: [
      { icon: "lock", text: "Bezpečná platba" },
      { icon: "mail", text: "Okamžitý přístup" },
      { icon: "burger", text: "Včetně bonusů" },
    ],
  },

  closing: {
    eyebrow: "Začni ve své vlastní kuchyni ještě dnes",
    headline: {
      pre: "Připrav si první várku",
      accent: "domácích burgerů",
      post: "ještě tenhle týden",
    },
    paragraph:
      "Vezmi si kuchařku, vyber si svůj první burger a udělej z každého jídla super chvíli, o kterou se rád podělíš.",
    cta: "CHCI SVÝCH 101 BURGERŮ",
    whatsapp: "Napiš nám na WhatsApp",
    imageAlt: "Domácí burger, připravený k nakousnutí",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitální kuchařka pro přípravu domácích burgerů",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Všechna práva vyhrazena.",
    disclaimer:
      "Tato stránka není nijak spojena, přidružena, schválena ani sponzorována společností Facebook a nebyla společností Facebook žádným způsobem kontrolována, prověřována, schválena ani podporována. Facebook je registrovaná ochranná známka společnosti Meta Platforms, Inc.",
  },
};