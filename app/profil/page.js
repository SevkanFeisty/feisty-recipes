"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Demo mode
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [groceryExpanded, setGroceryExpanded] = useState(false);

  // Sample grocery items
  const groceryItems = [
    { name: "Hakket kød", amount: "400g", price: 29, checked: false },
    { name: "Kyllingebryst", amount: "600g", price: 40, checked: false },
    { name: "Kartofler", amount: "1kg", price: 10, checked: false },
    { name: "Peberfrugt", amount: "2stk", price: 24, checked: false },
    { name: "Løg", amount: "2stk", price: 6, checked: false },
    { name: "Hvidløg", amount: "1hoved", price: 5, checked: false },
    { name: "Fløde", amount: "2dl", price: 15, checked: false },
    { name: "Pasta", amount: "500g", price: 10, checked: false },
  ];

  const [checkedItems, setCheckedItems] = useState(groceryItems.map(() => false));

  const toggleItem = (index) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const checkedTotal = groceryItems.reduce((sum, item, i) => 
    checkedItems[i] ? sum + item.price : sum, 0
  );

  const userData = {
    name: "Anders",
    currentPlan: "Premium",
    planPrice: "74 kr",
    nextDelivery: "Mandag 9. marts",
    weeklyStreak: 3,
    savedThisMonth: 245,
    mealsCooked: 12,
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "madindstillinger", label: "Madindstillinger", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "butikker", label: "Butikker", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "abonnement", label: "Abonnement", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  ];

  const supermarkets = [
    { name: "Netto", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", selected: true },
    { name: "Føtex", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", selected: true },
    { name: "Bilka", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", selected: false },
    { name: "Rema 1000", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", selected: false },
  ];

  // Plan data
  const plans = [
    {
      id: "free",
      name: "Gratis",
      price: "0 kr",
      period: "for evigt",
      features: ["1 uges madplan", "Basale opskrifter", "Simpel indkøbsliste"],
      popular: false,
    },
    {
      id: "standard",
      name: "Standard",
      price: "49 kr",
      period: "md",
      features: ["Ubegrænset madplan", "Alle opskrifter", "Automatisk indkøbsliste", "Kostvaner"],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "74 kr",
      period: "md",
      features: ["Alt i Standard", "Tilpasset til dig", "Alle allergener", "Særlige kostbehov"],
      popular: true,
    },
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
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition"
              >
                Log ud
              </button>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <svg className="w-8 h-8 text-orange-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <div className="text-2xl font-bold text-slate-900">{userData.weeklyStreak}</div>
              <div className="text-sm text-slate-500">uger i træk</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <svg className="w-8 h-8 text-emerald-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-2xl font-bold text-emerald-600">{userData.savedThisMonth} kr</div>
              <div className="text-sm text-slate-500">sparet denne måned</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
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
                <button 
                  onClick={() => router.push('/madplan')}
                  className="mt-4 block w-full py-3 text-center bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition"
                >
                  Se komplet plan →
                </button>
              </div>
            </div>

            {/* Grocery List - Interactive */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Indkøbsliste</h2>
                <p className="text-teal-100 text-sm">{groceryItems.length} varer • {groceryItems.reduce((s,i)=>s+i.price,0)} kr</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {groceryItems.slice(0, groceryExpanded ? 8 : 4).map((item, i) => (
                    <label 
                      key={i} 
                      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${checkedItems[i] ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}
                    >
                      <input 
                        type="checkbox" 
                        checked={checkedItems[i]}
                        onChange={() => toggleItem(i)}
                        className="w-5 h-5 rounded border-2 border-slate-300 text-emerald-500 focus:ring-emerald-500"
                      />
                      <div className="flex-1">
                        <span className={checkedItems[i] ? 'line-through text-slate-400' : 'text-slate-700'}>
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500">{item.amount}</span>
                      <span className="font-medium">{item.price} kr</span>
                    </label>
                  ))}
                </div>
                
                {/* Show more / less */}
                <button 
                  onClick={() => setGroceryExpanded(!groceryExpanded)}
                  className="mt-2 text-sm text-emerald-600 font-medium hover:underline"
                >
                  {groceryExpanded ? 'Vis mindre ↑' : `+ ${groceryItems.length - 4} flere varer`}
                </button>

                {/* Progress */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">{checkedCount}/{groceryItems.length} krydset af</span>
                    <span className="font-bold text-emerald-600">{checkedTotal} kr</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all"
                      style={{ width: `${(checkedCount / groceryItems.length) * 100}%` }}
                    />
                  </div>
                </div>
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
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "dashboard" && (
            <div className="grid md:grid-cols-2 gap-6">
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

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Dine butikker</h3>
                <div className="flex gap-3">
                  {supermarkets.filter(s => s.selected).map((store) => (
                    <div key={store.name} className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={store.icon} />
                      </svg>
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
                    placeholder="F.eks. Jeg kan ikke lide koriander, foretrækker mindre salt..."
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
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Nuværende plan</p>
                      <h3 className="text-2xl font-bold">{userData.currentPlan}</h3>
                      <p className="text-emerald-100">{userData.planPrice}/md</p>
                    </div>
                    <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Aktiv</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-600">✓ Ubegrænset madplan</div>
                  <div className="flex items-center gap-3 text-slate-600">✓ Alle opskrifter</div>
                  <div className="flex items-center gap-3 text-slate-600">✓ Tilpasset kost</div>
                </div>

                <button 
                  onClick={() => setActiveTab("skift-abonnement")}
                  className="w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition"
                >
                  Skift abonnement
                </button>
              </div>
            </div>
          )}

          {/* Change Subscription View */}
          {activeTab === "skift-abonnement" && (
            <div className="space-y-6">
              <button 
                onClick={() => setActiveTab("abonnement")}
                className="text-emerald-600 font-medium hover:underline mb-4"
              >
                ← Tilbage til abonnement
              </button>
              
              <h3 className="text-xl font-bold text-slate-900">Vælg din plan</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all ${plan.popular ? 'border-emerald-500' : 'border-transparent'}`}
                  >
                    {plan.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full">
                        MEST POPULÆR
                      </span>
                    )}
                    <h4 className="text-xl font-bold text-slate-900 mt-2">{plan.name}</h4>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-emerald-600">{plan.price}</span>
                      <span className="text-slate-500">/{plan.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="text-emerald-500">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <button 
                      className={`mt-6 w-full py-3 rounded-full font-semibold transition ${
                        plan.id === 'pro' 
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                          : 'border-2 border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {plan.id === 'pro' ? 'Nuværende plan' : 'Vælg denne'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  // GUEST VIEW
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
