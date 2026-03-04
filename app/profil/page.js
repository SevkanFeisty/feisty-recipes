"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demo
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("dashboard");

  // User data (would come from backend in real app)
  const userData = {
    name: "Anders",
    currentPlan: "Feisty Pro",
    nextDelivery: "Mandag 9. marts",
    weeklyStreak: 3,
    savedThisMonth: 245,
    mealsCooked: 12,
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
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

  // LOGGED IN DASHBOARD VIEW
  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Hej, {userData.name}! 👋</h1>
                  <p className="text-emerald-100">Din næste madplan kommer {userData.nextDelivery}</p>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
                  {userData.currentPlan}
                </span>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-slate-900">{userData.weeklyStreak}</div>
              <div className="text-sm text-slate-500">uger i træk</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold text-emerald-600">{userData.savedThisMonth} kr</div>
              <div className="text-sm text-slate-500">sparet denne måned</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-2">🍳</div>
              <div className="text-2xl font-bold text-slate-900">{userData.mealsCooked}</div>
              <div className="text-sm text-slate-500">retter tilberedt</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Next Week Preview */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Næste uges madplan</h2>
                <p className="text-emerald-100 text-sm">Klar mandag morgen</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">M</span>
                    <span className="text-slate-700">Boller i Karry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-bold text-green-600">T</span>
                    <span className="text-slate-700">Mørbradgryde</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm font-bold text-amber-600">O</span>
                    <span className="text-slate-700">Stegt Flæsk</span>
                  </div>
                </div>
                <Link href="/madplan" className="mt-4 block w-full py-3 text-center bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition">
                  Se komplet plan →
                </Link>
              </div>
            </div>

            {/* Grocery List Preview */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Indkøbsliste</h2>
                <p className="text-teal-100 text-sm">8 varer • 320 kr</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between"><span>400g Hakket kød</span><span>29 kr</span></div>
                  <div className="flex justify-between"><span>600g Kylling</span><span>40 kr</span></div>
                  <div className="flex justify-between"><span>1kg Kartofler</span><span>10 kr</span></div>
                  <div className="flex justify-between"><span>2 peberfrugter</span><span>24 kr</span></div>
                  <div className="text-slate-400 text-xs mt-2">+ 4 flere varer</div>
                </div>
                <button className="mt-4 w-full py-3 text-center border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition">
                  Download liste
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id 
                      ? "bg-emerald-500 text-white" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "dashboard" && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Dietary Preferences */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Dine kostindstillinger</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
                    <span className="text-slate-700">Kosttype</span>
                    <span className="font-medium text-emerald-700">Normal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                    <span className="text-slate-700">Allergener</span>
                    <span className="font-medium text-amber-700">Ingen</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <span className="text-slate-700">Husstand</span>
                    <span className="font-medium text-blue-700">2 personer</span>
                  </div>
                </div>
                <button onClick={() => setActiveTab("madindstillinger")} className="mt-4 w-full py-2 text-center text-emerald-600 font-medium hover:underline">
                  Rediger indstillinger →
                </button>
              </div>

              {/* supermarkets */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Dine butikker</h3>
                <div className="flex gap-3">
                  {supermarkets.filter(s => s.selected).map((store) => (
                    <div key={store.name} className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl" title={store.name}>
                      {store.logo}
                    </div>
                  ))}
                </div>
                <button onClick={() => setActiveTab("butikker")} className="mt-4 w-full py-2 text-center text-emerald-600 font-medium hover:underline">
                  Skift butikker →
                </button>
              </div>
            </div>
          )}

          {activeTab === "madindstillinger" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Madindstillinger</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Kostvaner</label>
                  <div className="flex flex-wrap gap-2">
                    {["Normal", "Vegetarisk", "Vegansk", "Low-carb"].map((diet) => (
                      <button key={diet} className="px-4 py-2 rounded-full border-2 border-emerald-500 bg-emerald-500 text-white text-sm font-medium">
                        {diet}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Særlige kostbehov
                    <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full">PRO</span>
                  </label>
                  <textarea
                    placeholder="F.eks. Jeg kan ikke lide koriander, foretrækker less salt..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={3}
                  />
                </div>

                <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition">
                  Gem ændringer
                </button>
              </div>
            </div>
          )}

          {activeTab === "butikker" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Dine Butikker</h3>
              <div className="space-y-3">
                {supermarkets.map((store) => (
                  <div key={store.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{store.logo}</span>
                      <span className="font-medium text-slate-900">{store.name}</span>
                    </div>
                    <button className={`w-12 h-6 rounded-full p-1 transition-colors ${store.selected ? "bg-emerald-500" : "bg-slate-300"}`}>
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${store.selected ? "translate-x-6" : ""}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "abonnement" && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm">Nuværende plan</p>
                    <h3 className="text-2xl font-bold">{userData.currentPlan}</h3>
                    <p className="text-emerald-100">99 kr/måned</p>
                  </div>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Aktiv</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-600">✓ Ubegrænsede madplaner</div>
                <div className="flex items-center gap-3 text-slate-600">✓ Alle opskrifter</div>
                <div className="flex items-center gap-3 text-slate-600">✓ Kostbegrænsninger</div>
                <div className="flex items-center gap-3 text-slate-600">✓ Særlige kostbehov</div>
              </div>

              <button className="w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition">
                Administrer abonnement
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // GUEST LOGIN VIEW
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="font-display text-3xl font-bold">Profil</h1>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">Velkommen til Feisty</h2>
              <p className="text-slate-600 mt-2">Log ind for at få adgang til alle funktioner</p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-slate-900 mb-3">Med en konto får du:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Personlig madplan hver uge</li>
                <li>✓ Automatisk indkøbsliste</li>
                <li>✓ Adgang til alle opskrifter</li>
                <li>✓ Tilpasning af kostbehov</li>
              </ul>
            </div>

            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition"
            >
              Log ind
            </button>

            <div className="mt-6 text-center">
              <p className="text-slate-600 mb-4">Eller fortsæt som gæst</p>
              <Link 
                href="/opskrifter"
                className="inline-flex items-center px-6 py-3 border border-slate-200 bg-white text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors"
              >
                Se opskrifter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
