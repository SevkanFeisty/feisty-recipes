"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for session
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('feisty_session');
      if (session) {
        setIsLoggedIn(true);
      } else {
        // Redirect to login if not logged in
        router.push('/login');
      }
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  // Get current week number
  const now = new Date()
  const weekNum = getWeekNumber(now)
  const year = now.getFullYear()
  const targetWeekString = `${year}-W${weekNum.toString().padStart(2, '0')}`

  // Weekly plan data
  const weeklyPlan = {
    week_id: targetWeekString,
    plan_name: "Budget Champion",
    score: 82,
    total_cost_dkk: 285,
    supermarkets: ["REMA 1000"],
    days: [
      { day: 1, day_name: "Mandag", meals: [{ recipe_name: "Kyllingekød i Karry", type: "dinner" }], day_total: 57 },
      { day: 2, day_name: "Tirsdag", meals: [{ recipe_name: "Pasta med Kylling og Grønt", type: "dinner" }], day_total: 52 },
      { day: 3, day_name: "Onsdag", meals: [{ recipe_name: "Bolognese med Oksekød", type: "dinner" }], day_total: 48 },
      { day: 4, day_name: "Torsdag", meals: [{ recipe_name: "Lasagne med Bolognese", type: "dinner" }], day_total: 68 },
      { day: 5, day_name: "Fredag", meals: [{ recipe_name: "Æg og Gryde", type: "dinner" }], day_total: 60 },
    ]
  }

  // Grocery list
  const groceryItems = [
    { name: "Hakket kyllingekød", amount: "400g", price: 29, category: "Kød", checked: false },
    { name: "Hakkede tomater", amount: "2 dåser", price: 18, category: "Konserves", checked: false },
    { name: "Kokosmælk", amount: "1 pakke", price: 12, category: "Mejeri", checked: false },
    { name: "Pasta", amount: "500g", price: 8, category: "Tørvarer", checked: false },
    { name: "Hakket oksekød", amount: "400g", price: 25, category: "Kød", checked: false },
    { name: "Mozzarella", amount: "200g", price: 20, category: "Mejeri", checked: false },
    { name: "Æg", amount: "6 stk", price: 12, category: "Mejeri", checked: false },
    { name: "Havregryn", amount: "500g", price: 8, category: "Tørvarer", checked: false },
  ]

  const dayColors = {
    1: { bg: '#DBEAFE', border: '#3B82F6', color: '#93C5FD', label: 'Mandag' },
    2: { bg: '#DCFCE7', border: '#22C55E', color: '#86EFAC', label: 'Tirsdag' },
    3: { bg: '#FEF3C7', border: '#F59E0B', color: '#FCD34D', label: 'Onsdag' },
    4: { bg: '#FEE2E2', border: '#EF4444', color: '#FCA5A5', label: 'Torsdag' },
    5: { bg: '#EDE9FE', border: '#8B5CF6', color: '#C4B5FD', label: 'Fredag' },
  }

  const userData = {
    name: "Anders",
    currentPlan: "Premium",
    planPrice: "59 kr",
    weeklyStreak: 3,
    savedThisMonth: 245,
    mealsCooked: 12,
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "madindstillinger", label: "Madindstillinger", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "butikker", label: "Butikker", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "abonnement", label: "Abonnement", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  ];

  const supermarkets = [
    { name: "Netto", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16", selected: true },
    { name: "Føtex", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16", selected: true },
    { name: "Bilka", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16", selected: false },
    { name: "Rema 1000", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16", selected: false },
  ];

  const plans = [
    { id: "free", name: "30 dages prøveperiode", price: "Gratis", features: ["1 uges madplan", "Basale opskrifter", "Simpel indkøbsliste"], popular: false },
    { id: "standard", name: "Standard (halv pris)", price: "25 kr", features: ["Ubegrænset madplan", "Alle opskrifter", "Automatisk indkøbsliste", "Kostvaner"], popular: false },
    { id: "premium", name: "Premium", price: "59 kr", features: ["Alt i Standard", "Tilpasset til dig", "Alle allergener", "Særlige kostbehov"], popular: true },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");
  const [groceryExpanded, setGroceryExpanded] = useState(false);
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

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('feisty_session');
    }
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Hej, {userData.name}!</h1>
                <p className="text-emerald-100 text-sm">Velkommen til dit Feisty dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/konto" className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full hover:bg-white/30 transition">
                Min konto
              </Link>
              <button onClick={logout} className="px-4 py-2 text-white/80 text-sm font-medium hover:text-white transition">
                Log ud
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">uger i træk</p>
                <p className="text-xl font-bold text-slate-900">{userData.weeklyStreak}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">sparet denne måned</p>
                <p className="text-xl font-bold text-emerald-600">{userData.savedThisMonth} kr</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">retter tilberedt</p>
                <p className="text-xl font-bold text-slate-900">{userData.mealsCooked}</p>
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

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Meal Plan Preview */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Næste uges madplan</h2>
                <p className="text-emerald-100 text-sm">Klar mandag morgen</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {weeklyPlan.days.map((day) => {
                    const color = dayColors[day.day];
                    const meal = day.meals[0];
                    return (
                      <div key={day.day} className="flex items-center gap-3">
                        <span 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ backgroundColor: color.border }}
                        >
                          {day.day}
                        </span>
                        <span className="text-slate-700 flex-1">{meal?.recipe_name}</span>
                        <span className="text-sm text-slate-500">{day.day_total} kr</span>
                      </div>
                    );
                  })}
                </div>
                <Link href="/madplan" className="mt-4 block w-full py-3 text-center bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition">
                  Se komplet plan →
                </Link>
              </div>
            </div>

            {/* Grocery List */}
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
                
                <button 
                  onClick={() => setGroceryExpanded(!groceryExpanded)}
                  className="mt-2 text-sm text-emerald-600 font-medium hover:underline"
                >
                  {groceryExpanded ? 'Vis mindre ↑' : `+ ${groceryItems.length - 4} flere varer`}
                </button>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">{checkedCount}/{groceryItems.length} krydset af</span>
                    <span className="font-bold text-emerald-600">{checkedTotal} kr</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(checkedCount / groceryItems.length) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs simplified */}
        {activeTab === "madindstillinger" && (
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
          </div>
        )}

        {activeTab === "butikker" && (
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
              <button onClick={() => setActiveTab("skift-abonnement")} className="w-full py-3 border border-slate-200 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition">
                Skift abonnement
              </button>
            </div>
          </div>
        )}

        {activeTab === "skift-abonnement" && (
          <div className="space-y-6">
            <button onClick={() => setActiveTab("abonnement")} className="text-emerald-600 font-medium hover:underline mb-4">
              ← Tilbage til abonnement
            </button>
            <h3 className="text-xl font-bold text-slate-900">Vælg din plan</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div key={plan.id} className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${plan.popular ? 'border-emerald-500' : 'border-transparent'}`}>
                  {plan.popular && <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">MEST POPULÆR</span>}
                  <h4 className="text-xl font-bold text-slate-900 mt-2">{plan.name}</h4>
                  <div className="mt-2"><span className="text-3xl font-bold text-emerald-600">{plan.price}</span></div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-600"><span className="text-emerald-500">✓</span> {f}</li>))}
                  </ul>
                  <button className={`mt-6 w-full py-3 rounded-full font-semibold transition ${plan.id === 'premium' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'border-2 border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                    {plan.id === 'premium' ? 'Nuværende plan' : 'Vælg denne'}
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

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}
