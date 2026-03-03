import Link from "next/link";

export default function SushiBowlPage() {
  const recipe = {
    title: "Sushi Bowl",
    subtitle: "Hjemmelavet sushi bowl med laks og avocado",
    description: "En sushi-bowl (poke bowl) med perfekt krydret ris, frisk laks, avocado og alle dine yndlings-toppings.",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=800&fit=crop",
    ingredients: [
      "400 g sushiris",
      "400 g frisk laks",
      "2 modne avocadoer",
      "1 agurk",
      "2 forårsløg",
      "3 spsk sojasauce",
      "1 spsk sesamolie",
      "1 tsk wasabi",
      "Sesamfrø",
      "Sushi-nori (ark)"
    ],
    instructions: [
      "Kog sushiris efter anvisning og lad køle af.",
      "Skær laks i tern og avocado i skiver.",
      "Skær agurk i halvmåner og forårsløg i ringe.",
      "Bland sojasauce med sesamolie og wasabi.",
      "Anret ris i bunden af skåle.",
      "Læg laks, avocado og agurk ovenpå.",
      "Drys med forårsløg og sesamfrø.",
      "Server med sojasauce-blandingen."
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <Link href="/opskrifter" className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30">
            ← Tilbage til opskrifter
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{recipe.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{recipe.subtitle}</p>
          <p className="mt-4 text-slate-600 leading-relaxed">{recipe.description}</p>

          <div className="mt-6 flex flex-wrap gap-6 py-4 border-t border-b border-slate-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.prepTime}</div>
              <div className="text-xs text-slate-500">Prep</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.cookTime}</div>
              <div className="text-xs text-slate-500">Kogning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{recipe.servings}</div>
              <div className="text-xs text-slate-500">Personer</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">📝 Ingredienser</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">👩‍🍳 Fremgangsmåde</h2>
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
      </main>
    </div>
  );
}
