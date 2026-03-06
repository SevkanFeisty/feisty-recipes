"use client";

import { useState } from "react";
import Link from "next/link";
import { recipes, categories } from "../../data/recipes-danish";

export default function OpskrifterPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter recipes
  const filteredRecipes = recipes.filter((recipe) => {
    const categoryMatch = selectedCategory === "all" || 
      recipe.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      recipe.category === categories.find(c => c.slug === selectedCategory)?.name;
    const matchesSearch = recipe.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        recipe.subtitle?.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Banner */}
      <div className="relative py-20 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 overflow-hidden">
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
            {filteredRecipes.length} opskrifter til enhver lejlighed. Vælg en kategori og kom i gang med at lave mad.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter Pills - inspired by Årstiderne */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedCategory === "all"
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-white text-slate-600 border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 shadow-sm hover:shadow-md'
            }`}
          >
            Alle
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(selectedCategory === cat.slug ? "all" : cat.slug)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.slug
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white text-slate-600 border-2 border-emerald-100 hover:border-emerald-500 hover:bg-emerald-50 shadow-sm hover:shadow-md'
              }`}
            >
              {cat.slug === 'comfort' && '🍲'}
              {cat.slug === 'indisk' && '🌶️'}
              {cat.slug === 'italiensk' && '🍝'}
              {cat.slug === 'vegetarisk' && '🥗'}
              {cat.slug === 'hurtig' && '⚡'}
              {cat.slug === 'familiemad' && '👨‍👩‍👧‍👦'}
              {cat.slug === 'trending' && '🔥'}
              {cat.slug === 'classic' && '⭐'}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søg i opskrifter..."
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-slate-100 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all shadow-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="text-center text-slate-500 mb-6">
            Viser {filteredRecipes.length} resultater for "{searchQuery}"
          </p>
        )}

        {/* Recipe Grid - Bento Style */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe, i) => (
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
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {recipe.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {recipe.subtitle}
                    </p>
                    
                    {/* Time info */}
                    <div className="flex items-center gap-4 mt-4 text-xs text-slate-400">
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
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-slate-500 text-lg">Ingen opskrifter fundet</p>
            <p className="text-slate-400 text-sm mt-2">Prøv at søge efter noget andet</p>
          </div>
        )}
      </main>
    </div>
  );
}
