// Real Danish recipes from Arnold's meal plans
const recipes = [
  // Week 11 recipes
  {
    id: "kylling-i-karry",
    title: "Kylling i Karry",
    subtitle: "Klassisk dansk kyllingecurry med kokosmælk",
    description: "En cremet og velsmagende kyllingecurry, perfekt til hverdagsmad. Retten stammer fra den klassiske danske karryret.",
    category: "Trending",
    prepTime: "15",
    cookTime: "25",
    servings: 4,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Hakket kyllingekød", quantity: "400", unit: "g" },
      { name: "Hakkede tomater", quantity: "400", unit: "g" },
      { name: "Kokosmælk", quantity: "200", unit: "ml" },
      { name: "Karrypasta", quantity: "2", unit: "spsk" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Olivenolie", quantity: "2", unit: "spsk" },
      { name: "Ris", quantity: "400", unit: "g" }
    ],
    instructions: [
      "Steg kyllingekødet i olie i en stor gryde, indtil det er gyldent.",
      "Tilsæt hakket løg og hvidløg, steg i 2-3 minutter.",
      "Tilsæt karrypasta og hakkede tomater, rør godt rundt.",
      "Hæld kokosmælk i og lad retten simre i 15 minutter.",
      "Kog ris separat og server sammen med retten."
    ]
  },
  {
    id: "boller-i-karry",
    title: "Boller i Karry",
    subtitle: "Traditionelle danske kødboller i karrysovs",
    description: "En elsket dansk klassiker med saftige kødboller i en cremet karrysovs.",
    category: "Comfort",
    prepTime: "30",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Hakket svinekod", quantity: "500", unit: "g" },
      { name: "Æg", quantity: "1", unit: "stk" },
      { name: "Hvedemel", quantity: "2", unit: "spsk" },
      { name: "Mælk", quantity: "1", unit: "dl" },
      { name: "Karry", quantity: "2", unit: "spsk" },
      { name: "Creme Fraiche", quantity: "2", unit: "dl" },
      { name: "Løg", quantity: "1", unit: "stk" }
    ],
    instructions: [
      "Bland hakket kød med æg, mel og mælk til en fars.",
      "Form boller og steg dem gyldne i en pande.",
      "Steg løg og tilsæt karry.",
      "Tilsæt creme fraiche og lad det simre.",
      "Læg bollerne i sovsen og kog i 10 minutter."
    ]
  },
  {
    id: "pasta-med-kylling",
    title: "Pasta med Kylling",
    subtitle: "Cremet pastaret med kylling og grøntsager",
    description: "En hurtig og mættende pastaret perfekt til hverdagen.",
    category: "Hurtig",
    prepTime: "10",
    cookTime: "15",
    servings: 4,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Pasta", quantity: "400", unit: "g" },
      { name: "Kyllingebryst", quantity: "400", unit: "g" },
      { name: "Fløde", quantity: "2", unit: "dl" },
      { name: " Parmesanost", quantity: "50", unit: "g" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Cherrytomater", quantity: "200", unit: "g" },
      { name: "Frisk basilikum", quantity: "1", unit: "håndfuld" }
    ],
    instructions: [
      "Kog pastaen al dente.",
      "Steg kyllingebryst i tern og krydre med salt og peber.",
      "Tilsæt hvidløg og cherrytomater, steg i 2 minutter.",
      "Hæld fløde på og lad det koge lidt ind.",
      "Bland pasta med sovsen og top med parmesan og basilikum."
    ]
  },
  {
    id: "bolognese-med-oksekod",
    title: "Bolognese med Oksekød",
    subtitle: "Klassisk italiensk bolognese med dansk oksekød",
    description: "En rig og velsmagende kødsauce perfekt til pasta.",
    category: "Comfort",
    prepTime: "15",
    cookTime: "45",
    servings: 6,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Hakket oksekød", quantity: "500", unit: "g" },
      { name: "Løg", quantity: "2", unit: "stk" },
      { name: "Gulerødder", quantity: "2", unit: "stk" },
      { name: "Hakkede tomater", quantity: "400", unit: "g" },
      { name: "Tomatpure", quantity: "2", unit: "spsk" },
      { name: "Rødvin", quantity: "1", unit: "dl" },
      { name: "Oksebouillon", quantity: "2", unit: "dl" },
      { name: "Pasta", quantity: "500", unit: "g" }
    ],
    instructions: [
      "Steg hakket oksekød i en stor gryde indtil brunt.",
      "Tilsæt hakket løg og gulerødder, steg i 5 minutter.",
      "Tilsæt tomatpure og steg i 1 minut.",
      "Hæld rødvin og hakkede tomater i, lad det simre i 30 minutter.",
      "Kog pasta og server med bolognese."
    ]
  },
  {
    id: "lasagne-med-bolognese",
    title: "Lasagne med Bolognese",
    subtitle: "Klassisk italiensk lasagne med kødsauce",
    description: "Lagret pastret med bolognese, bechamel og ost.",
    category: "Comfort",
    prepTime: "30",
    cookTime: "45",
    servings: 8,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Bolognese sauce", quantity: "500", unit: "g" },
      { name: "Lasagneplader", quantity: "12", unit: "stk" },
      { name: "Mælk", quantity: "5", unit: "dl" },
      { name: "Smør", quantity: "50", unit: "g" },
      { name: "Hvedemel", quantity: "4", unit: "spsk" },
      { name: "Mozzarella", quantity: "200", unit: "g" },
      { name: "Parmesan", quantity: "100", unit: "g" }
    ],
    instructions: [
      "Lav bechamel sovs: smelt smør, tilsæt mel og mælk.",
      "Læg lasagneplader i et fad.",
      "Skiftevis lag med bolognese, bechamel og ost.",
      "Bag i ovnen ved 200°C i 40-45 minutter.",
      "Lad hvile 10 minutter før servering."
    ]
  },
  {
    id: "spaghetti-bolognese",
    title: "Spaghetti Bolognese",
    subtitle: "Klassisk spaghetti med kødsauce",
    description: "En elsket favorit - spaghetti med rig bolognese sauce.",
    category: "Hurtig",
    prepTime: "10",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Spaghetti", quantity: "400", unit: "g" },
      { name: "Hakket oksekød", quantity: "400", unit: "g" },
      { name: "Hakkede tomater", quantity: "400", unit: "g" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Oregano", quantity: "1", unit: "tsk" },
      { name: "Olivenolie", quantity: "2", unit: "spsk" }
    ],
    instructions: [
      "Kog spaghetti efter anvisningen på pakken.",
      "Steg oksekød i olie, tilsæt løg og hvidløg.",
      "Tilsæt hakkede tomater og oregano, lad det simre.",
      "Bland pasta med sovsen og server."
    ]
  },
  // Week 12 recipes
  {
    id: "frikadeller",
    title: "Frikadeller",
    subtitle: "Traditionelle danske kødboller",
    description: "De klassiske danske frikadeller - saftige og gyldne.",
    category: "Comfort",
    prepTime: "20",
    cookTime: "15",
    servings: 4,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Hakket svinekod", quantity: "500", unit: "g" },
      { name: "Hakket oksekød", quantity: "250", unit: "g" },
      { name: "Æg", quantity: "1", unit: "stk" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvedemel", quantity: "3", unit: "spsk" },
      { name: "Mælk", quantity: "1", unit: "dl" },
      { name: "Persille", quantity: "1", unit: "håndfuld" },
      { name: "Smør", quantity: "25", unit: "g" }
    ],
    instructions: [
      "Bland kød med æg, mel og mælk.",
      "Tilsæt fint hakket løg og persille.",
      "Form små flade boller.",
      "Steg i smør ved middelvarme indtil gyldne på begge sider.",
      "Server med kartofler og brun sovs."
    ]
  },
  {
    id: "stegt-flaesk",
    title: "Stegt Flæsk",
    subtitle: "Sprødt stegt flæsk med persillesovs",
    description: "Danmarks nationalret - sprødt stegt flæsk med kartofler og persillesovs.",
    category: "Comfort",
    prepTime: "10",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Stegt flæsk i skiver", quantity: "800", unit: "g" },
      { name: "Kartofler", quantity: "1", unit: "kg" },
      { name: "Persille", quantity: "1", unit: "bdt" },
      { name: "Smør", quantity: "50", unit: "g" },
      { name: "Hvedemel", quantity: "2", unit: "spsk" },
      { name: "Mælk", quantity: "3", unit: "dl" }
    ],
    instructions: [
      "Kog kartofler og lad dem dampe tørre.",
      "Steg flæsk sprødt på panden.",
      "Lav persillesovs: smelt smør, tilsæt mel og mælk.",
      "Tilsæt finthakket persille.",
      "Server flæsk med kartofler og sovsen."
    ]
  },
  {
    id: "morbradgryde",
    title: "Mørbradgryde",
    subtitle: "Svinemørbrad i cremet svampesovs",
    description: "En klassisk dansk gryderet med mørt svinekød og champignons.",
    category: "Comfort",
    prepTime: "15",
    cookTime: "25",
    servings: 4,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Svinemørbrad", quantity: "600", unit: "g" },
      { name: "Champignons", quantity: "250", unit: "g" },
      { name: "Løg", quantity: "2", unit: "stk" },
      { name: "Fløde", quantity: "3", unit: "dl" },
      { name: "Creme Fraiche", quantity: "1", unit: "dl" },
      { name: "Smør", quantity: "25", unit: "g" },
      { name: "Timian", quantity: "1", unit: "tsk" }
    ],
    instructions: [
      "Skær mørbrad i tykke skiver og brun i smør.",
      "Tilsæt løg og svampe, steg i 3 minutter.",
      "Hæld fløde og creme fraiche på.",
      "Krydre med timian og lad det simre i 15 minutter.",
      "Server med ris eller kartofler."
    ]
  },
  {
    id: "kylling-curry",
    title: "Kylling i Curry",
    subtitle: "Indisk inspireret kyllingecurry",
    description: "Krydret kylling i en aromatisk karrysovs med ris.",
    category: "Trending",
    prepTime: "15",
    cookTime: "25",
    servings: 4,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kyllingebryst", quantity: "500", unit: "g" },
      { name: "Yoghurt", quantity: "2", unit: "dl" },
      { name: "Karry", quantity: "3", unit: "spsk" },
      { name: "Kokosmælk", quantity: "4", unit: "dl" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvidløg", quantity: "3", unit: "fed" },
      { name: "Ingefær", quantity: "2", unit: "cm" },
      { name: "Ris", quantity: "400", unit: "g" }
    ],
    instructions: [
      "Mariner kylling i yoghurt og karry i 30 minutter.",
      "Steg kylling gylden og sæt til side.",
      "Steg løg, hvidløg og ingefær.",
      "Tilsæt kokosmælk og kylling, lad det simre.",
      "Server med kogte ris."
    ]
  },
  {
    id: "fiskefrikadeller",
    title: "Fiskefrikadeller",
    subtitle: "Lette fiskekødboller med remoulade",
    description: "Danske fiskefrikadeller - en let og lækker fiskeret.",
    category: "Hurtig",
    prepTime: "15",
    cookTime: "10",
    servings: 4,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Torskefilet", quantity: "400", unit: "g" },
      { name: "Kartofler", quantity: "300", unit: "g" },
      { name: "Æg", quantity: "1", unit: "stk" },
      { name: "Purløg", quantity: "1", unit: "bdt" },
      { name: "Hvedemel", quantity: "2", unit: "spsk" },
      { name: "Smør", quantity: "25", unit: "g" }
    ],
    instructions: [
      "Kog kartofler og kør til mos.",
      "Blend fisk og bland med mos, æg og mel.",
      "Tilsæt finthakket purløg.",
      "Form boller og steg i smør.",
      "Server med remoulade og citron."
    ]
  },
  {
    id: "braendende-kaerlighed",
    title: "Brændende Kærlighed",
    subtitle: "Kartoffelmos med bacon og stegte log",
    description: "Den klassiske danske comfort food - kartoffelmos med sprødt bacon og karamelliserede løg.",
    category: "Comfort",
    prepTime: "15",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kartofler", quantity: "1", unit: "kg" },
      { name: "Bacon i tern", quantity: "200", unit: "g" },
      { name: "Løg", quantity: "2", unit: "stk" },
      { name: "Smør", quantity: "50", unit: "g" },
      { name: "Mælk", quantity: "1", unit: "dl" },
      { name: "Muskatnød", quantity: "1", unit: "knivspids" }
    ],
    instructions: [
      "Kog kartofler og kør til mos med smør og mælk.",
      "Steg bacon sprødt og læg på tallerken.",
      "Karamellisér løg i baconfedtet.",
      "Læg mos på tallerken, top med bacon og løg.",
      "Drys med muskatnød og server straks."
    ]
  },
  {
    id: "tarteletter",
    title: "Tarteletter",
    subtitle: "Kylling i asparges i butterdejsskaller",
    description: "Klassiske danske tarteletter med kylling, asparges og brun sovs.",
    category: "Comfort",
    prepTime: "20",
    cookTime: "25",
    servings: 6,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kyllingekød", quantity: "400", unit: "g" },
      { name: "Grønne asparges", quantity: "1", unit: "bdt" },
      { name: "Butterdej", quantity: "1", unit: "rulle" },
      { name: "Smør", quantity: "25", unit: "g" },
      { name: "Hvedemel", quantity: "2", unit: "spsk" },
      { name: "Mælk", quantity: "3", unit: "dl" },
      { name: "Æg", quantity: "1", unit: "stk" }
    ],
    instructions: [
      "Kog kylling og skær i tern.",
      "Kog asparges i 2 minutter.",
      "Lav sovs af smør, mel og mælk.",
      "Skær butterdej i forme og bag gyldne.",
      "Fyld med kylling og asparges, hæld sovs over."
    ]
  },
  {
    id: "lentil-soup",
    title: "Linsesuppe",
    subtitle: "Varmende linsegryde med grøntsager",
    description: "En nærende og mættende suppe med røde linser.",
    category: "Vegetarisk",
    prepTime: "10",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Røde linser", quantity: "300", unit: "g" },
      { name: "Gulerødder", quantity: "2", unit: "stk" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Selleri", quantity: "2", unit: "stængler" },
      { name: "Grøntsagsbouillon", quantity: "1", unit: "liter" },
      { name: "Laurbærblade", quantity: "2", unit: "stk" },
      { name: "Timian", quantity: "1", unit: "tsk" }
    ],
    instructions: [
      "Skær grøntsager i tern.",
      "Svits løg og gulerødder i olie.",
      "Tilsæt linser, bouillon og krydderier.",
      "Lad det koge i 25 minutter.",
      "Server med brød."
    ]
  },
  {
    id: "veggie-curry",
    title: "Veggie Curry",
    subtitle: "Krydret grøntsagscurry med kokosmælk",
    description: "En lækker og mættende vegetarisk curry med masser af grøntsager.",
    category: "Vegetarisk",
    prepTime: "15",
    cookTime: "25",
    servings: 4,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e8254?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kokosmælk", quantity: "400", unit: "ml" },
      { name: "Kikærter", quantity: "240", unit: "g" },
      { name: "Broccoli", quantity: "1", unit: "stk" },
      { name: "Grønne ærter", quantity: "1", unit: "dl" },
      { name: "Karrypasta", quantity: "2", unit: "spsk" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Ris", quantity: "400", unit: "g" }
    ],
    instructions: [
      "Steg løg og hvidløg i olie.",
      "Tilsæt karrypasta og steg i 1 minut.",
      "Tilsæt kokosmælk og kikærter.",
      "Tilsæt broccoli og lad det koge i 10 minutter.",
      "Server med kogte ris."
    ]
  },
  {
    id: "falafel-bowl",
    title: "Falafel Bowl",
    subtitle: "Middelhavsbowl med falafel og hummus",
    description: "En frisk og farverig bowl med hjemmelavede falafel.",
    category: "Vegetarisk",
    prepTime: "20",
    cookTime: "15",
    servings: 4,
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kikærter (tørrede)", quantity: "250", unit: "g" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Persille", quantity: "1", unit: "bdt" },
      { name: "Kommen", quantity: "1", unit: "tsk" },
      { name: "Hummus", quantity: "200", unit: "g" },
      { name: "Grøntsager til topping", quantity: "500", unit: "g" }
    ],
    instructions: [
      "Blødlæg kikærter natten over.",
      "Blend kikærter med løg, hvidløg og krydderier.",
      "Form boller og steg gyldne.",
      "Anret med hummus og grøntsager.",
      "Server med pitabrød."
    ]
  },
  {
    id: "pasta-carbonara",
    title: "Pasta Carbonara",
    subtitle: "Klassisk italiensk pasta med æg og bacon",
    description: "Den autentiske romerske carbonara med æggeblomme og parmesan.",
    category: "Hurtig",
    prepTime: "10",
    cookTime: "15",
    servings: 4,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Spaghetti", quantity: "400", unit: "g" },
      { name: "Bacon", quantity: "200", unit: "g" },
      { name: "Æggeblommer", quantity: "4", unit: "stk" },
      { name: "Parmesanost", quantity: "100", unit: "g" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Peber", quantity: "1", unit: "tsk" }
    ],
    instructions: [
      "Kog pasta al dente.",
      "Steg bacon sprødt og tilsæt hvidløg.",
      "Pisk æggeblommer med parmesan og peber.",
      "Bland varm pasta med bacon, tilsæt æggeblanding.",
      "Rør hurtigt så æggene ikke stivner. Server straks."
    ]
  },
  {
    id: "pasta-primavera",
    title: "Pasta Primavera",
    subtitle: "Frisk pasta med forårsgrøntsager",
    description: "En let og frisk pastaret med farverige grøntsager.",
    category: "Hurtig",
    prepTime: "10",
    cookTime: "15",
    servings: 4,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Pasta", quantity: "400", unit: "g" },
      { name: "Broccoli", quantity: "200", unit: "g" },
      { name: "Gulerødder", quantity: "2", unit: "stk" },
      { name: "Ærter", quantity: "150", unit: "g" },
      { name: "Cherrytomater", quantity: "200", unit: "g" },
      { name: "Hvidløg", quantity: "2", unit: "fed" },
      { name: "Olivenolie", quantity: "3", unit: "spsk" },
      { name: "Parmesan", quantity: "50", unit: "g" }
    ],
    instructions: [
      "Kog pasta efter anvisningen.",
      "Skær grøntsager i passende stykker.",
      "Steg hvidløg i olie, tilsæt grøntsager.",
      "Bland pasta med grøntsager.",
      "Server med parmesan og frisk basilikum."
    ]
  },
  {
    id: "veggie-tacos",
    title: "Veggie Tacos",
    subtitle: "Farverige tacos med grøntsager og bønner",
    description: "Vegetariske tacos fyldt med smagfulde grøntsager og bønner.",
    category: "Vegetarisk",
    prepTime: "15",
    cookTime: "10",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Tortillas", quantity: "8", unit: "stk" },
      { name: "Sorte bønner", quantity: "400", unit: "g" },
      { name: "Majs", quantity: "200", unit: "g" },
      { name: "Avocado", quantity: "2", unit: "stk" },
      { name: "Tomater", quantity: "2", unit: "stk" },
      { name: "Løg", quantity: "1", unit: "stk" },
      { name: "Creme Fraiche", quantity: "200", unit: "g" },
      { name: "Chili", quantity: "1", unit: "stk" }
    ],
    instructions: [
      "Varm tortillas i ovnen.",
      "Skær avocado, tomater og chili i tern.",
      "Varm bønner og majs i en gryde.",
      "Fyld tortillas med bønner og grøntsager.",
      "Top med creme fraiche og server."
    ]
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    subtitle: "Cremed indisk kylling i tomatsauce",
    description: "Klassisk indisk curry med mør kylling i en cremet tomatsauce.",
    category: "Trending",
    prepTime: "20",
    cookTime: "30",
    servings: 4,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop",
    ingredients: [
      { name: "Kyllingebryst", quantity: "600", unit: "g" },
      { name: "Yoghurt", quantity: "200", unit: "g" },
      { name: "Hakkede tomater", quantity: "400", unit: "g" },
      { name: "Fløde", quantity: "200", unit: "ml" },
      { name: "Smør", quantity: "50", unit: "g" },
      { name: "Ingefær", quantity: "3", unit: "cm" },
      { name: "Hvidløg", quantity: "4", unit: "fed" },
      { name: "Garam masala", quantity: "2", unit: "spsk" },
      { name: "Karry", quantity: "1", unit: "spsk" },
      { name: "Ris", quantity: "400", unit: "g" }
    ],
    instructions: [
      "Mariner kylling i yoghurt og krydderier i 30 minutter.",
      "Steg kylling gylden og sæt til side.",
      "Smelt smør, tilsæt ingefær og hvidløg.",
      "Tilsæt tomater og krydderier, lad det koge.",
      "Tilsæt fløde og kylling, server med ris."
    ]
  }
];

const categories = [
  { slug: "alle", name: "Alle", icon: "grid" },
  { slug: "trending", name: "Trending", icon: "fire" },
  { slug: "hurtig", name: "Hurtig", icon: "bolt" },
  { slug: "comfort", name: "Comfort", icon: "heart" },
  { slug: "vegetarisk", name: "Vegetarisk", icon: "leaf" },
  { slug: "dessert", name: "Dessert", icon: "cake" },
];

module.exports = { recipes, categories };
