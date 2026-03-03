import Link from "next/link";

export async function generateStaticParams() {
  const recipes = [
    { id: "frikadeller" },
    { id: "braendende-kaerlighed" },
    { id: "tarteletter" },
    { id: "boefstroganoff" },
    { id: "rugbrod" },
    { id: "hveder" },
    { id: "risalamande" },
    { id: "aeblekage" },
    { id: "drommekage" },
    { id: "leverpostej" },
    { id: "kartoffel" },
    { id: "roedbede" },
  ];
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({ params }) {
  const recipe = getRecipe(params.id);
  return {
    title: `${recipe.title} - Feisty Opskrifter`,
    description: recipe.description,
  };
}

function getRecipe(id) {
  const recipes = {
    frikadeller: {
      title: "Frikadeller",
      subtitle: "Klassiske danske frikadeller med rugbrød og syltede agurker",
      description: "Frikadeller er en elsket nationalret i Danmark. Disse saftige kødboller serveres ofte med rugbrød, syltede agurker og en god remonce.",
      category: "Hovedretter",
      prepTime: "20",
      cookTime: "15",
      servings: 4,
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1200&h=800&fit=crop",
      ingredients: [
        "500g hakket svinekød",
        "1 løg, finthakket",
        "2 æg",
        "3 spsk mel",
        "1 dl mælk",
        "Salt og peber",
        "50g smør til stegning",
      ],
      instructions: [
        "Bland det hakkede kød med det finthakkede løg i en skål.",
        "Tilsæt æg, mel og mælk og rør grundigt.",
        "Krydre med salt og peber efter smag.",
        "Form dejen til små, aflange kødboller med våde hænder.",
        "Steg i rigeligt smør ved medium varme i ca. 3-4 minutter på hver side.",
        "Server varme med rugbrød, syltede agurker og remonce.",
      ],
    },
    "braendende-kaerlighed": {
      title: "Brændende Kærlighed",
      subtitle: "Kartoffelmos med bacon og karamelliserede løg",
      description: "En gammel og meget traditionel dansk ret. Den cremede kartoffelmos toppes med sprødt bacon og søde, karamelliserede løg.",
      category: "Hovedretter",
      prepTime: "15",
      cookTime: "30",
      servings: 4,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=800&fit=crop",
      ingredients: [
        "600g kartofler",
        "1 dl mælk",
        "50g smør",
        "200g bacon i tern",
        "2 store løg",
        "Salt og peber",
        "Frisk persille",
        "Syltede rødbeder til servering",
      ],
      instructions: [
        "Skræl kartofler og kog dem møre i ca. 20 minutter.",
        "Steg bacon sprødt i en pande og læg til side.",
        "Sauter løg i baconfedtet til de er gyldne og karamelliserede.",
        "Hæld vandet fra kartofler og mos dem grundigt.",
        "Tilsæt mælk og smør og krydre med salt og peber.",
        "Anret mos på tallerkener og top med bacon og løg.",
        "Drys med frisk persille og server med syltede rødbeder.",
      ],
    },
    tarteletter: {
      title: "Tarteletter",
      subtitle: "Høns i asparges med brun sovs",
      description: "Tarteletter er en klassisk dansk ret, der ofte serveres ved festlige lejligheder. Sprøde tarteletskaller fyldt med saftigt kyllingekød og asparges i en brun sovs.",
      category: "Hovedretter",
      prepTime: "30",
      cookTime: "30",
      servings: 6,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&h=800&fit=crop",
      ingredients: [
        "1.5 l vand",
        "2 hønsebouillontern",
        "350g kyllingebryst",
        "1 dåse hvide asparges",
        "50g smør",
        "5 spsk mel",
        "2 dl mælk",
        "2 dl kogevand fra kyllingen",
        "Salt og peber",
      ],
      instructions: [
        "Bring vand i kog og opløs hønsebouillon.",
        "Kog kyllingebryst i ca. 20 minutter til de er møre.",
        "Skær kylling i små tern og gem kogevandet.",
        "Smelt smør i en gryde og rør mel i.",
        "Tilsæt mælk og kogevand under omrøring til sovs.",
        "Tilsæt kylling og asparges og varm igennem.",
        "Fyld tarteletter med blandingen og server straks.",
      ],
    },
    boefstroganoff: {
      title: "Bøf Stroganoff",
      subtitle: "Klassisk dansk ret med oksekød i cremet sovs",
      description: "Bøf Stroganoff er en populær dansk hverdagsret. Mørt oksekød i en lækker, cremet sovs med champignoner og løg.",
      category: "Hovedretter",
      prepTime: "20",
      cookTime: "25",
      servings: 4,
      image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1200&h=800&fit=crop",
      ingredients: [
        "500g oksekød i strimler",
        "250g champignoner",
        "2 løg",
        "2 dl cremefraiche",
        "1 dl madlavningsfløde",
        "2 spsk paprika",
        "Salt og peber",
        "Smør til stegning",
      ],
      instructions: [
        "Steg oksekød i portionsvis i smør ved høj varme.",
        "Tag kødet af panden og steg champignoner og løg.",
        "Tilsæt paprika og rør rundt.",
        "Tilsæt cremefraiche og fløde og lad det simre.",
        "Kom kødet tilbage i sovsen og varm igennem.",
        "Krydre med salt og peber.",
        "Server med ris eller pasta.",
      ],
    },
    rugbrod: {
      title: "Rugbrød",
      subtitle: "Hjemmebagt rugbrød med kerner og frø",
      description: "Rugbrød er sandsynligvis det mest berømte brød i Danmark. Fyldt med forskellige kerner og korn - en sund og mættende basis i ethvert køleskab.",
      category: "Brød",
      prepTime: "30",
      cookTime: "60",
      servings: 10,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
      ingredients: [
        "2 dl knækkede rugkerner",
        "2 dl knækkede hvedekerner",
        "2 dl hørfrø",
        "2 dl solsikkekerner",
        "1 spsk maltsirup",
        "8 dl vand",
        "4 dl hvedemel",
        "4 dl rugmel",
        "1 spsk salt",
      ],
      instructions: [
        "Sæt rugkerner, hvedekerner, frø, vand og maltsirup i blød i minimum 8 timer (eller natten over).",
        "Tilsæt mel og salt og rør godt.",
        "Lad dejen hæve i ca. 1,5 time under et viskestykke.",
        "Del i to portioner og hæld i smurte brødforme.",
        "Lad hæve i 1-2 timer til formen er fuld.",
        "Bag ved 180°C (varmluft 160°C) i ca. 1 time.",
        "Afkøl på rist før skæring.",
      ],
    },
    hveder: {
      title: "Hveder",
      subtitle: "Bløde danske hveder med smør",
      description: "Hveder er en traditionel dansk bolle, der typisk spises på hvedegrødspandserensdag. Bløde, luftige og perfekte med smør.",
      category: "Brød",
      prepTime: "45",
      cookTime: "15",
      servings: 8,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
      ingredients: [
        "50g gær",
        "5 dl lunken mælk",
        "150g smør, smeltet",
        "100g sukker",
        "2 æg",
        "1 kg hvedemel",
        "1 tsk salt",
      ],
      instructions: [
        "Opløs gær i lunken mælk.",
        "Tilsæt smeltet smør, sukker og æg og rør rundt.",
        "Tilsæt mel og salt og ælt til en glat dej.",
        "Lad dej hæve i 1 time under et viskestykke.",
        "Form til 8 runde hveder og læg på bageplade.",
        "Lad hæve yderligere 30 minutter.",
        "Bag ved 220°C i 12-15 minutter til gyldne.",
      ],
    },
    risalamande: {
      title: "Risalamande",
      subtitle: "Traditionel dansk risdessert med varm kirsebærsovs",
      description: "Risalamande er den mest berømte og traditionelle danske juledessert. En luftig rispudding med mandler, serveret med varm kirsebærsovs.",
      category: "Dessert",
      prepTime: "30",
      cookTime: "45",
      servings: 8,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&h=800&fit=crop",
      ingredients: [
        "2.25 dl kortkornet ris",
        "1 l mælk",
        "2 vaniljestænger",
        "150g mandler",
        "2 spsk sukker",
        "5 dl piskefløde",
        "1 dl kirsebærsaft",
        "2 dl kirsebær (fra dåse)",
      ],
      instructions: [
        "Kog ris og vand i 2 minutter.",
        "Tilsæt mælk og bring i kog.",
        "Tilsæt vaniljekerner og skaller og smør ved lav varme i ca. 35 minutter.",
        "Afkøl i køleskab (kan laves dagen før).",
        "Skold mandler, pil og hak groft.",
        "Bland mandler i den kolde risengrød.",
        "Pisk fløde til skum og fold forsigtigt i.",
        "Lav sovsen: kog kirsebærsaft og jævn med maizena.",
        "Servér risalamande med kirsebærsovs.",
      ],
    },
    aeblekage: {
      title: "Æblekage",
      subtitle: "Dansk æblekage med flødeskum og kanelsukker",
      description: "En klassisk dansk dessert med æbler og flødeskum. Simpel, nostalgisk og utrolig lækker.",
      category: "Dessert",
      prepTime: "20",
      cookTime: "25",
      servings: 6,
      image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=1200&h=800&fit=crop",
      ingredients: [
        "4 store æbler",
        "2 dl sukker",
        "2.5 dl vand",
        "1 tsk kanel",
        "3 dl piskefløde",
        "Flodeskum",
      ],
      instructions: [
        "Skræl æbler og skær i både.",
        "Kog sukker og vand til en karamel.",
        "Tilsæt æbler og kanel og kog møre i ca. 15 minutter.",
        "Afkøl æblerne.",
        "Pisk fløde til skum.",
        "Anret æbler i lag med flødeskum.",
        "Drys med kanelsukker.",
      ],
    },
    drommekage: {
      title: "Drømmekage",
      subtitle: "Klassisk drømmekage med kokos og chokolade",
      description: "Drømmekage er en af Danmarks mest elskede kager. Den bløde kage med kokos toppes med en blank chokoladeglasur.",
      category: "Dessert",
      prepTime: "20",
      cookTime: "40",
      servings: 8,
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1200&h=800&fit=crop",
      ingredients: [
        "150g smør",
        "200g sukker",
        "4 æg",
        "200g mel",
        "2 tsk bagepulver",
        "100g kokosmel",
        "3 spsk kakao",
        "1 dl mælk",
        "100g mørk chokolade",
      ],
      instructions: [
        "Pisk smør og sukker luftigt.",
        "Tilsæt æg ét ad gangen.",
        "Bland mel, bagepulver og kokos.",
        "Tilsæt melblandingen og mælk.",
        "Hæld halvdelen i en smurt form.",
        "Bland kakao med lidt varm vand og hæld over.",
        "Bag ved 175°C i ca. 35 minutter.",
        "Smelt chokolade og hæld over den afkølede kage.",
      ],
    },
    leverpostej: {
      title: "Leverpostej",
      subtitle: "Hjemmeleverpostej med bacon og champignoner",
      description: "En klassisk dansk leverpostej, der smager langt bedre end den købte. Server på rugbrød med bacon og syltede agurker.",
      category: "Smørrebrød",
      prepTime: "15",
      cookTime: "45",
      servings: 6,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=800&fit=crop",
      ingredients: [
        "500g griselever",
        "200g bacon i tern",
        "2 løg",
        "2 æg",
        "2 dl mælk",
        "1 dl mel",
        "Salt og peber",
        "Laurbærblade",
      ],
      instructions: [
        "Hak lever, bacon og løg fint i en foodprocessor.",
        "Bland med æg, mælk og mel.",
        "Krydre med salt og peber.",
        "Hæld i smurt form og læg laurbærblade på top.",
        "Bag ved 180°C i ca. 45 minutter.",
        "Afkøl og vend ud af formen.",
        "Servér på rugbrød med bacon og syltede agurker.",
      ],
    },
    kartoffel: {
      title: "Kartoffel",
      subtitle: "Kartoffel på rugbrød med rødløg og purløg",
      description: "En simpel og klassisk dansk smørrebrød. Kogte kartofler på rugbrød med rødløg og purløg.",
      category: "Smørrebrød",
      prepTime: "10",
      cookTime: "0",
      servings: 2,
      image: "https://images.unsplash.com/photo-1512054502232-120ea5a0b5f5?w=1200&h=800&fit=crop",
      ingredients: [
        "2 skiver rugbrød",
        "4-5 kogte kartofler",
        "1 rødløg",
        "3-4 syltede agurker",
        "Frisk purløg",
        "Salt og peber",
      ],
      instructions: [
        "Skær kartofler i skiver.",
        "Læg på rugbrød.",
        "Top med tynde rødløgsringe.",
        "Pynt med syltede agurker.",
        "Drys med finthakket purløg.",
        "Krydre med salt og peber.",
      ],
    },
    roedbede: {
      title: "Rødbede",
      subtitle: "Rødbede og æg på rugbrød med dild",
      description: "Frisk og farverig dansk smørrebrød med revet rødbede og spejlæg.",
      category: "Smørrebrød",
      prepTime: "10",
      cookTime: "0",
      servings: 2,
      image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1200&h=800&fit=crop",
      ingredients: [
        "2 skiver rugbrød",
        "2 kogte æg",
        "1 rødbede (revnet)",
        "2 spsk cremefraiche",
        "Frisk dild",
        "Salt og peber",
      ],
      instructions: [
        "Smør cremefraiche på rugbrød.",
        "Skær æg i halve og læg på.",
        "Riv rødbede groft og læg oven på æggene.",
        "Krydre med salt og peber.",
        "Pynt med frisk dild.",
      ],
    },
  };

  return recipes[id] || recipes.frikadeller;
}

export default function RecipeDetailPage({ params }) {
  const recipe = getRecipe(params.id);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Image - Large and prominent like Jamie Oliver */}
      <div className="relative h-72 sm:h-80 lg:h-[500px]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-4 left-4">
          <Link
            href="/opskrifter"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30 transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Alle opskrifter
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 -mt-16 relative z-10">
        {/* Recipe Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              {recipe.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            {recipe.title}
          </h1>
          <p className="mt-2 text-lg text-slate-600">{recipe.subtitle}</p>
          
          <p className="mt-4 text-slate-600 leading-relaxed">{recipe.description}</p>

          {/* Quick Stats - Prominent like Jamie Oliver */}
          <div className="mt-6 flex flex-wrap gap-6 py-4 border-t border-b border-slate-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.prepTime}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">min</div>
              <div className="text-xs text-slate-400">Prep</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.cookTime}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">min</div>
              <div className="text-xs text-slate-400">Kogning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.servings}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">pers.</div>
              <div className="text-xs text-slate-400">Portioner</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients - Clean list */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              Ingredienser
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions - Numbered steps */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Fremgangsmåde
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-emerald-500 text-white rounded-full text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Add to Plan CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Vil du lave denne opskrift?</h3>
              <p className="text-emerald-100 text-sm">Tilføj til din madplan og få en automatisk indkøbsliste</p>
            </div>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition shadow-lg">
              Tilføj til madplan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
