"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("indstillinger");

  const tabs = [
    { id: "indstillinger", label: "Indstillinger", icon: "⚙️" },
    { id: "madindstillinger", label: "Madindstillinger", icon: "🍽️" },
    { id: "butikker", label: "Butikker", icon: "🏪" },
    { id: "abonnement", label: "Abonnement", icon: "💳" },
  ];

  const supermarkets = [
    { name: "Netto", logo: "🛒", selected: true },
    { name: "Føtex", logo: "🏪", selected: true },
    { name: "Bilka", logo: "🛍️", selected: false },
    { name: "Rema 1000", logo: "💚", selected: false },
    { name: "Aldi", logo: "🇩🇪", selected: false },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
          <div className="mx-auto max-w-7xl px-4 text-center text-white">
            <h1 className="font-display text-3xl font-bold">Profil</h1>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-12">
          <div className="max-w-md mx-auto">
            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">Velkommen til Feisty</h2>
                <p className="text-slate-600 mt-2">Log ind for at få adgang til alle funktioner</p>
              </div>

              {/* Benefits */}
              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-slate-900 mb-3">Med en konto får du:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> 7-dages madplan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> Automatisk indkøbsliste
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> Spar op til 40% på indkøb
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> Mindre madspild
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="din@email.dk"
                    className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Adgangskode</label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
                >
                  Log ind
                </button>
              </form>

              <div className="mt-4 text-center space-y-2">
                <a href="#" className="block text-sm text-emerald-600 hover:text-emerald-700">
                  Opret konto
                </a>
                <a href="#" className="block text-sm text-slate-500 hover:text-slate-600">
                  Glemt adgangskode?
                </a>
              </div>
            </div>

            {/* Guest CTA */}
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">Eller fortsæt som gæst</p>
              <Link 
                href="/opskrifter"
                className="inline-flex items-center px-6 py-3 border border-slate-200 bg-white text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors"
              >
                Se opskrifter
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Logged in view
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">👤</span>
          </div>
          <h1 className="font-display text-3xl font-bold">Din Profil</h1>
          <p className="mt-2 text-emerald-100">Bruger siden 2026</p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-4">
                <span className="text-sm text-slate-600">Tema</span>
                <button 
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="w-12 h-6 bg-emerald-500 rounded-full p-1 transition-colors"
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${theme === "dark" ? "translate-x-6" : ""}`} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      activeTab === tab.id 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>

              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
              >
                <span>🚪</span>
                <span className="text-sm font-medium">Log ud</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "indstillinger" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Indstillinger</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Navn</label>
                    <input 
                      type="text" 
                      defaultValue="Anders And"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      defaultValue="anders@feisty.dk"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      defaultValue="+45 12 34 56 78"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors">
                    Gem ændringer
                  </button>
                </div>
              </div>
            )}

            {activeTab === "madindstillinger" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Madindstillinger</h2>
                
                <div className="space-y-6">
                  {/* Household Size */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Husstandsstørrelse</label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, 5, 6].map((size) => (
                        <button
                          key={size}
                          className="w-12 h-12 rounded-full border-2 border-slate-200 font-semibold text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary Preferences */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Kostvaner</label>
                    <div className="flex flex-wrap gap-2">
                      {["Normal", "Vegetarisk", "Vegansk", "Low-carb", "Keto"].map((diet) => (
                        <button
                          key={diet}
                          className="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                        >
                          {diet}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Allergies */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Allergener</label>
                    <div className="flex flex-wrap gap-2">
                      {["Gluten", "Laktose", "Nødder", "Æg", "Soja", "Fisk"].map((allergy) => (
                        <button
                          key={allergy}
                          className="px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
                        >
                          {allergy} ✕
                        </button>
                      ))}
                      <button className="px-4 py-2 rounded-full border border-dashed border-slate-300 text-sm font-medium text-slate-500 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                        + Tilføj
                      </button>
                    </div>
                  </div>

                  {/* Custom Dietary Needs - Premium Feature */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Særlige kostbehov
                      <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full">PRO</span>
                    </label>
                    <textarea
                      placeholder="F.eks. Jeg kan ikke lide koriander, foretrækker less salt, elsker asiatisk mad..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-2">
                      Vi tilpasser din madplan baseret på dine specifikke ønsker.
                    </p>
                  </div>

                  <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors">
                    Gem indstillinger
                  </button>
                </div>
              </div>
            )}

            {activeTab === "butikker" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Dine Butikker</h2>
                <p className="text-slate-600 mb-6">Vælg hvilke supermarkeder du handler i. Vi finder de bedste tilbud til dig.</p>
                
                <div className="space-y-3">
                  {supermarkets.map((store) => (
                    <div 
                      key={store.name}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{store.logo}</span>
                        <span className="font-medium text-slate-900">{store.name}</span>
                      </div>
                      <button 
                        onClick={() => store.selected = !store.selected}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                          store.selected ? "bg-emerald-500" : "bg-slate-300"
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${store.selected ? "translate-x-6" : ""}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "abonnement" && (
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Abonnement</h2>
                
                {/* Current Plan */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Nuværende plan</p>
                      <h3 className="text-2xl font-bold">Feisty Pro</h3>
                      <p className="text-emerald-100">99 kr/måned</p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Aktiv</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span> Ubegrænsede madplaner
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span> Alle opskrifter
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span> Kostbegrænsninger
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span> Prioriteret support
                  </div>
                </div>

                <button className="w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors">
                  Administrer abonnement
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
