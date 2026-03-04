import Link from "next/link";

const multiDayIngredients = ['kikærter', 'løg', 'hvidløg', 'broccoli', 'tomater'];

function isMultiDayIngredient(name) {
  const lower = name.toLowerCase();
  return multiDayIngredients.some(m => lower.includes(m));
}

export default function VeggieTacosPage() {
  const recipe = {
    title: "Veggie Tacos",
    subtitle: "Mexicanske tacos med grøntsager",
    description: "Farverige tacos med krydrede grøntsager, majs og kikærter.",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=800&fit=crop",
    ingredients: [
      { name: "8 majs-tortillas", day: "Onsdag" },
      { name: "285 g majs", day: "Onsdag" },
      { name: "240 g kikærter", day: "Onsdag" },
      { name: "1 avocado", day: "Onsdag" },
      { name: "1 rødløg", day: "Onsdag" },
      { name: "2 tomater", day: "Onsdag" },
      { name: "1 håndfuld cilantro", day: "Onsdag" },
      { name: "1 lime", day: "Onsdag" },
      { name: "1 tsk spidskommen", day: "Onsdag" },
      { name: "1 tsk paprika", day: "Onsdag" }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <Link href="/madplan" className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white hover:bg-white/30">
            ← Tilbage til madplan
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
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">📝</span>
              Ingredienser
            </h2>
            
            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-700">
                <span className="font-medium">Orange ingredienser</span> bruges også på andre dage - køb lidt ekstra! 
              </p>
            </div>
            
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, i) => {
                const isMulti = isMultiDayIngredient(ing.name);
                return (
                  <li key={i} className={`flex items-start gap-3 p-2 rounded-lg ${isMulti ? 'bg-amber-50 border border-amber-200' : ''}`}>
                    <span className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${isMulti ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                    <span className={isMulti ? 'text-amber-700 font-medium' : 'text-slate-700'}>
                      {ing.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">👩‍🍳</span>
              Fremgangsmåde
            </h2>
            <ol className="space-y-4">
              {[
                "Skær grøntsager i tern.",
                "Varm kikærter og majs.",
                "Lav guacamole af avocado.",
                "Varm tortillas.",
                "Samle tacos med grøntsager.",
                "Top med koriander og lime."
              ].map((step, i) => (
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
