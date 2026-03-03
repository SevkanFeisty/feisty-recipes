import Link from "next/link";

export const metadata = {
  title: "Opskrifter - Feisty",
  description: "Find klassiske danske opskrifter og internationale favoritter. Fra frikadeller til sushi.",
};

const recipes = [
  // === DANSKE KLASSIKERE - Hovedretter ===
  {
    id: "frikadeller",
    title: "Frikadeller",
    subtitle: "Klassiske danske frikadeller med rugbrød og syltede agurker",
    category: "Hovedretter",
    prepTime: "20",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop",
  },
  {
    id: "braendende-kaerlighed",
    title: "Brændende Kærlighed",
    subtitle: "Kartoffelmos med sprødt bacon og karamelliserede løg",
    category: "Hovedretter",
    prepTime: "15",
    cookTime: "30",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=600&fit=crop",
  },
  {
    id: "tarteletter",
    title: "Tarteletter",
    subtitle: "Høns i asparges med brun sovs - en festlig klassiker",
    category: "Hovedretter",
    prepTime: "30",
    cookTime: "30",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&h=600&fit=crop",
  },
  {
    id: "boefstroganoff",
    title: "Bøf Stroganoff",
    subtitle: "Klassisk dansk ret med oksekød i cremet sovs",
    category: "Hovedretter",
    prepTime: "20",
    cookTime: "25",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
  },
  {
    id: "stegte-soedekartofler",
    title: "Stegte Sødekartofler",
    subtitle: "Sprøde stegte sødekartofler med sukker og kanel",
    category: "Hovedretter",
    prepTime: "10",
    cookTime: "20",
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a2c49?w=800&h=600&fit=crop",
  },

  // === ASIATISK KØKKEN ===
  {
    id: "wok-med-nudler",
    title: "Wok med Nudler",
    subtitle: "Asiatisk inspireret wok med grøntsager og nudler",
    category: "Asiatisk",
    prepTime: "15",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
  },
  {
    id: "karry-suppe",
    title: "Karrysuppe",
    subtitle: "Thailandsk inspireret karrysuppe med kokosmælk",
    category: "Asiatisk",
    prepTime: "15",
    cookTime: "20",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
  },
  {
    id: "sushi-bowl",
    title: "Sushi Bowl",
    subtitle: "Hjemmelavet sushi bowl med laks og avocado",
    category: "Asiatisk",
    prepTime: "20",
    cookTime: "30",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    subtitle: "Klassisk thailandsk pad thai med rejer og peanuts",
    category: "Asiatisk",
    prepTime: "15",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop",
  },
  {
    id: "dumplings",
    title: "Dumplings",
    subtitle: "Hjemmelavede dumplings med svinekød og kål",
    category: "Asiatisk",
    prepTime: "45",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop",
  },

  // === ITALIENSK KØKKEN ===
  {
    id: "pasta-carbonara",
    title: "Pasta Carbonara",
    subtitle: "Klassisk italiensk carbonara med æg, parmesan og bacon",
    category: "Italiensk",
    prepTime: "10",
    cookTime: "20",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop",
  },
  {
    id: "pizza-margherita",
    title: "Pizza Margherita",
    subtitle: "Autentisk italiensk pizza med tomatsauce og mozzarella",
    category: "Italiensk",
    prepTime: "30",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop",
  },
  {
    id: "lasagne",
    title: "Lasagne",
    subtitle: "Klassisk italiensk lasagne med kødsovs og béchamel",
    category: "Italiensk",
    prepTime: "30",
    cookTime: "45",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&h=600&fit=crop",
  },
  {
    id: "risotto",
    title: "Risotto",
    subtitle: "Cremede risotto med parmesan og hvidvin",
    category: "Italiensk",
    prepTime: "10",
    cookTime: "25",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop",
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    subtitle: "Italiensk klassiker med kaffe, mascarpone og kakao",
    category: "Italiensk",
    prepTime: "25",
    cookTime: "0",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop",
  },

  // === BRØD & BAGNING ===
  {
    id: "rugbrod",
    title: "Rugbrød",
    subtitle: "Hjemmebagt rugbrød med kerner og frø",
    category: "Brød",
    prepTime: "30",
    cookTime: "60",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  },
  {
    id: "hveder",
    title: "Hveder",
    subtitle: "Bløde danske hveder - perfekt til hvedegrødspandserensdag",
    category: "Brød",
    prepTime: "45",
    cookTime: "15",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  },
  {
    id: "croissanter",
    title: "Croissanter",
    subtitle: "Hjemmelavede croissanter med smør",
    category: "Brød",
    prepTime: "60",
    cookTime: "20",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
  },

  // === DESSERT ===
  {
    id: "risalamande",
    title: "Risalamande",
    subtitle: "Traditionel dansk risdessert med varm kirsebærsovs",
    category: "Dessert",
    prepTime: "30",
    cookTime: "45",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop",
  },
  {
    id: "aeblekage",
    title: "Æblekage",
    subtitle: "Dansk æblekage med flødeskum og kanelsukker",
    category: "Dessert",
    prepTime: "20",
    cookTime: "25",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&h=600&fit=crop",
  },
  {
    id: "drommekage",
    title: "Drømmekage",
    subtitle: "Klassisk drømmekage med kokos og chokolade",
    category: "Dessert",
    prepTime: "20",
    cookTime: "40",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=800&h=600&fit=crop",
  },

  // === SMØRREBRØD ===
  {
    id: "leverpostej",
    title: "Leverpostej",
    subtitle: "Hjemmeleverpostej med bacon og champignoner",
    category: "Smørrebrød",
    prepTime: "15",
    cookTime: "45",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
  },
  {
    id: "roeabriet",
    title: "Røget Ål",
    subtitle: "Klassisk dansk smørrebrød med røget ål og æg",
    category: "Smørrebrød",
    prepTime: "10",
    cookTime: "10",
    image: "https://images.unsplash.com/photo-1512054502232-120ea5a0b5f5?w=800&h=600&fit=crop",
  },
  {
    id: "toerret-torsk",
    title: "Tørret Torsk",
    subtitle: "Traditionelt dansk smørrebrød med torsk og mayonnaise",
    category: "Smørrebrød",
    prepTime: "10",
    cookTime: "0",
    image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&h=600&fit=crop",
  },
];

const categories = [
  { name: "Alle", slug: "all" },
  { name: "Hovedretter", slug: "hovedretter" },
  { name: "Asiatisk", slug: "asiatisk" },
  { name: "Italiensk", slug: "italiensk" },
  { name: "Brød", slug: "brod" },
  { name: "Dessert", slug: "dessert" },
  { name: "Smørrebrød", slug: "smorrebrod" },
];

export default function OpskrifterPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="relative h-56 bg-gradient-to-r from-emerald-600 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight font-display">Opskrifter</h1>
            <p className="mt-2 text-lg text-emerald-100">Klassiske danske retter og internationale favoritter</p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-emerald-200 bg-white text-slate-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 shadow-sm hover:shadow-md"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Søg i opskrifter..."
              className="w-full px-5 py-3 pl-12 rounded-full border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe, i) => (
            <Link key={recipe.id} href={`/opskrifter/${recipe.id}`} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-slate-700 shadow-sm">
                      {recipe.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                    {recipe.subtitle}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.prepTime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      {recipe.cookTime} min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-white shadow-xl">
            <div className="text-left">
              <h3 className="text-lg font-semibold">Mangler du en opskrift?</h3>
              <p className="mt-1 text-sm text-emerald-100">
                Vi tilføjer løbende nye klassiske danske retter.
              </p>
            </div>
            <button className="ml-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-50">
              Foreslå en opskrift
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
