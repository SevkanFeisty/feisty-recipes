import { recipes } from "../../../data/recipes-new";
import Link from "next/link";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) return { title: "Opskrift ikke fundet" };
  return { title: `${recipe.title} - Feisty`, description: recipe.subtitle };
}

export default function RecipePage({ params }) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Opskrift ikke fundet</h1>
          <Link href="/opskrifter" className="text-emerald-600 hover:underline">
            ← Tilbage til opskrifter
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
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
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-3">
            {recipe.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{recipe.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{recipe.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-4 py-4 border-t border-b border-slate-100">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-700">{recipe.prepTime} min</span>
            </div>
            {recipe.cookTime > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span className="text-slate-700">{recipe.cookTime} min</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-slate-700">{recipe.servings} personer</span>
              </div>
            )}
          </div>
        </div>

        {/* Note about ingredients */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
          <p className="text-emerald-700 text-center">
            Denne opskrift er en del af din madplan. Komplette ingredienser og fremgangsmåde findes i din ugentlige madplan.
          </p>
          <Link href="/profil" className="mt-4 block w-full py-3 text-center bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition">
            Se i min madplan →
          </Link>
        </div>

        <div className="text-center mb-8">
          <Link href="/opskrifter" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition">
            Se flere opskrifter →
          </Link>
        </div>
      </main>
    </div>
  );
}
