"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

const currentWeek = getWeekNumber(new Date());
const currentYear = new Date().getFullYear();

// REAL meal plans from Arnold's data
const week11Data = {
  week_id: "2026-W11",
  plan_name: "Budget Champion",
  type: "single",
  score: 95,
  total_cost_dkk: 125,
  supermarkets: ["REMA 1000"],
  days: [
    { day: 1, day_name: "Mandag", day_name_en: "Monday", meals: [{ recipe_name: "Kyllingekød i Karry", recipe_id: "kylling-i-karry" }], day_total: 29 },
    { day: 2, day_name: "Tirsdag", day_name_en: "Tuesday", meals: [{ recipe_name: "Pasta med Kylling", recipe_id: "pasta-med-kylling", leftover: true }], day_total: 10 },
    { day: 3, day_name: "Onsdag", day_name_en: "Wednesday", meals: [{ recipe_name: "Bolognese med Oksekød", recipe_id: "bolognese-med-oksekod" }], day_total: 37 },
    { day: 4, day_name: "Torsdag", day_name_en: "Thursday", meals: [{ recipe_name: "Lasagne med Bolognese", recipe_id: "lasagne-med-bolognese", leftover: true }], day_total: 11 },
    { day: 5, day_name: "Fredag", day_name_en: "Friday", meals: [{ recipe_name: "Æg og Gryde", recipe_id: "aeg-og-gryde" }], day_total: 8 },
  ],
  // REAL grocery list from Arnold's data
  grocery: [
    { name: "Hakket kyllingekød", amount: "400g", price: 29, days: [1], category: "Kød" },
    { name: "Hakket oksekød", amount: "400g", price: 29, days: [3], category: "Kød" },
    { name: "Pasta", amount: "800g", price: 15.32, days: [2, 3], category: "Tørvarer" },
    { name: "Hakkede tomater", amount: "800g", price: 8, days: [1, 3], category: "Konserves" },
    { name: "Gulerødder", amount: "200g", price: 4, days: [2, 5], category: "Grøntsager" },
    { name: "Æg", amount: "4 stk", price: 8, days: [5], category: "Mejeri" },
    { name: "Pastaplaner", amount: "200g", price: 5, days: [4], category: "Tørvarer" },
    { name: "Mozzarella", amount: "100g", price: 6, days: [4], category: "Mejeri" },
  ]
};

const week12Data = {
  week_id: "2026-W12",
  plan_name: "Family Favorites",
  type: "family",
  score: 92,
  total_cost_dkk: 285,
  supermarkets: ["REMA 1000"],
  days: [
    { day: 1, day_name: "Mandag", day_name_en: "Monday", meals: [{ recipe_name: "Boller i Karry", recipe_id: "boller-i-karry" }], day_total: 87 },
    { day: 2, day_name: "Tirsdag", day_name_en: "Tuesday", meals: [{ recipe_name: "Mørbradgryde", recipe_id: "morbradgryde" }], day_total: 95 },
    { day: 3, day_name: "Onsdag", day_name_en: "Wednesday", meals: [{ recipe_name: "Stegt Flæsk", recipe_id: "stegt-flaesk" }], day_total: 63 },
    { day: 4, day_name: "Torsdag", day_name_en: "Thursday", meals: [{ recipe_name: "Kylling i Curry", recipe_id: "kylling-curry" }], day_total: 45 },
    { day: 5, day_name: "Fredag", day_name_en: "Friday", meals: [{ recipe_name: "Frikadeller", recipe_id: "frikadeller" }], day_total: 55 },
  ],
  grocery: [
    { name: "Hakket svinekod", amount: "500g", price: 25, days: [1], category: "Kød" },
    { name: "Hakket oksekød", amount: "500g", price: 35, days: [1], category: "Kød" },
    { name: "Svinemørbrad", amount: "600g", price: 45, days: [2], category: "Kød" },
    { name: "Champignons", amount: "250g", price: 15, days: [2], category: "Grøntsager" },
    { name: "Fløde", amount: "3 dl", price: 15, days: [2], category: "Mejeri" },
    { name: "Stegt flæsk", amount: "800g", price: 35, days: [3], category: "Kød" },
    { name: "Kartofler", amount: "1 kg", price: 12, days: [3], category: "Grøntsager" },
    { name: "Persille", amount: "1 bdt", price: 8, days: [3], category: "Krydderier" },
    { name: "Kyllingebryst", amount: "500g", price: 30, days: [4], category: "Kød" },
    { name: "Yoghurt", amount: "2 dl", price: 10, days: [4], category: "Mejeri" },
    { name: "Kokosmælk", amount: "4 dl", price: 15, days: [4], category: "Mejeri" },
    { name: "Æg", amount: "6 stk", price: 15, days: [5], category: "Mejeri" },
    { name: "Løg", amount: "4 stk", price: 8, days: [1, 2], category: "Grøntsager" },
  ]
};

const allPlans = {
  "2026-W11": week11Data,
  "2026-W12": week12Data,
};

const dayColors = {
  1: { bg: '#DBEAFE', border: '#3B82F6', label: 'Mandag', dot: '#3B82F6' },
  2: { bg: '#DCFCE7', border: '#22C55E', label: 'Tirsdag', dot: '#22C55E' },
  3: { bg: '#FEF3C7', border: '#F59E0B', label: 'Onsdag', dot: '#F59E0B' },
  4: { bg: '#FEE2E2', border: '#EF4444', label: 'Torsdag', dot: '#EF4444' },
  5: { bg: '#EDE9FE', border: '#8B5CF6', label: 'Fredag', dot: '#8B5CF6' },
};

export default function ProfilPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState(`${currentYear}-W${currentWeek.toString().padStart(2, '0')}`);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('feisty_session');
      if (!session) {
        router.push('/login');
      } else {
        setIsLoggedIn(true);
      }
    }
    setLoading(false);
  }, [router]);

  const availableWeeks = Object.keys(allPlans).sort();
  const validSelectedWeek = availableWeeks.includes(selectedWeek) ? selectedWeek : availableWeeks[0];
  const currentWeekIdx = availableWeeks.indexOf(validSelectedWeek);
  const canGoPrev = currentWeekIdx > 0;
  const canGoNext = currentWeekIdx < availableWeeks.length - 1;
  const plan = allPlans[validSelectedWeek];

  // Dynamic grocery items from the plan
  const groceryItems = plan?.grocery || [];

  const [checkedItems, setCheckedItems] = useState(groceryItems.map(() => false));

  useEffect(() => {
    setCheckedItems(groceryItems.map(() => false));
  }, [selectedWeek]);

  const toggleItem = (index) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const checkedTotal = groceryItems.reduce((sum, item, i) => checkedItems[i] ? sum + item.price : sum, 0);

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('feisty_session');
    }
    router.push('/login');
  };

  if (loading) {
    return <div className="min-h-screen bg-stone-50 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div></div>;
  }

  if (!isLoggedIn) return null;

  const prevWeek = canGoPrev ? availableWeeks[currentWeekIdx - 1] : null;
  const nextWeek = canGoNext ? availableWeeks[currentWeekIdx + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Min madplan</h1>
              <p className="text-emerald-100 text-sm mt-1">Uge {plan?.week_id?.replace('2026-W', '') || ''} - {plan?.plan_name || ''}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => prevWeek && setSelectedWeek(prevWeek)} disabled={!canGoPrev} className={`p-2 rounded-full ${canGoPrev ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-white/10 text-white/40 cursor-not-allowed'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="px-4 py-2 bg-white/20 text-white font-medium rounded-full">{selectedWeek.replace('2026-', '')}</span>
              <button onClick={() => nextWeek && setSelectedWeek(nextWeek)} disabled={!canGoNext} className={`p-2 rounded-full ${canGoNext ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-white/10 text-white/40 cursor-not-allowed'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>
              </div>
              <div><p className="text-xs text-slate-500">Supermarked</p><p className="font-semibold text-slate-900">{plan?.supermarkets?.[0]}</p></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
              </div>
              <div><p className="text-xs text-slate-500">Total Pris</p><p className="font-semibold text-emerald-600">{plan?.total_cost_dkk} kr</p></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <div><p className="text-xs text-slate-500">Score</p><p className="font-semibold text-slate-900">{plan?.score}/100</p></div>
            </div>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {plan?.days?.map((day) => {
            const color = dayColors[day.day];
            const meal = day.meals?.[0];
            return (
              <Link key={day.day} href={meal ? `/opskrifter/${meal.recipe_id}` : '#'} className="group">
                <div className="rounded-xl p-4 text-center border-2 transition-all group-hover:scale-105" style={{ backgroundColor: color.bg, borderColor: color.border }}>
                  <p className="text-sm font-bold mb-2" style={{ color: color.border }}>{color.label}</p>
                  {meal ? <><p className="text-sm font-medium text-slate-700 line-clamp-2">{meal.recipe_name}</p>
                  {meal.leftover && <p className="text-xs text-emerald-600 mt-1 font-medium">Rest fra dag {day.day - 1}</p>}</> : <p className="text-sm text-slate-400">Ingen ret</p>}
                  <p className="text-sm mt-2 font-semibold" style={{ color: color.border }}>{day.day_total} kr</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Grocery List - REAL DATA */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div><h2 className="text-lg font-bold text-white">Indkøbsliste</h2><p className="text-teal-100 text-sm">{groceryItems.length} varer - {groceryItems.reduce((s,i)=>s+i.price,0).toFixed(2)} kr</p></div>
              <span className="text-white/80 text-sm">{plan?.supermarkets?.[0]}</span>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              {groceryItems.map((item, i) => (
                <label key={i} className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer ${checkedItems[i] ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}>
                  {/* Multiple color dots for multiple days */}
                  <div className="flex gap-1 flex-shrink-0">
                    {item.days.map((d, idx) => (
                      <div key={idx} className="w-3 h-3 rounded-full" style={{ backgroundColor: dayColors[d]?.dot }}></div>
                    ))}
                  </div>
                  <input type="checkbox" checked={checkedItems[i]} onChange={() => toggleItem(i)} className="w-5 h-5 rounded border-2 border-slate-300 text-emerald-500" />
                  <span className={checkedItems[i] ? 'line-through text-slate-400 flex-1' : 'text-slate-700 flex-1'}>{item.name}</span>
                  <span className="text-sm text-slate-500">{item.amount}</span>
                  <span className="font-semibold">{item.price.toFixed(2)} kr</span>
                </label>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between">
              <span className="text-slate-500">{checkedCount}/{groceryItems.length} krydset af</span>
              <span className="text-xl font-bold text-emerald-600">{checkedTotal.toFixed(2)} kr</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/konto" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-full hover:border-emerald-500 hover:text-emerald-600 transition">Min konto</Link>
          <button onClick={logout} className="px-6 py-3 text-slate-500 font-medium hover:text-slate-700 transition">Log ud</button>
        </div>
      </main>
    </div>
  );
}
