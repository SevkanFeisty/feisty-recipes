import Link from "next/link";
import { recipes, categories } from "../../data/recipes-new";

export const metadata = {
  title: "Opskrifter - Feisty",
  description: "Lækre opskrifter til hele familien. Fra hurtige hverdagsretter til weekend-projekter.",
};

export default function OpskrifterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Banner */}
      <div className="relative py-20 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Opskrifter
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Lækre opskrifter til enhver lejlighed. Vælg en kategori og kom i gang med at lave mad.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 bg-white text-slate-600 border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 shadow-sm hover:shadow-md"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Søg i opskrifter..."
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all shadow-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Recipe Grid - Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe, i) => (
            <Link 
              key={recipe.id} 
              href={`/opskrifter/${recipe.id}`} 
              className="group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <article className="h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-emerald-700 shadow-lg">
                      {recipe.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                    {recipe.subtitle}
                  </p>
                  
                  {/* Time */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {recipe.prepTime} min
                    </span>
                    {recipe.cookTime > 0 && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                        {recipe.cookTime} min
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 px-10 py-8 text-white shadow-2xl">
            <div className="text-left mr-8">
              <h3 className="text-xl font-bold">Mangler du inspiration?</h3>
              <p className="mt-1 text-emerald-100">
                Få en ugentlig madplan leveret.
              </p>
            </div>
            <Link 
              href="/madplan" 
              className="rounded-2xl bg-white px-6 py-3 text-sm font-bold text-emerald-600 hover:bg-emerald-50 transition shadow-lg"
            >
              Se madplan →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
