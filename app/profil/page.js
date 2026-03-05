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

// Day colors
const dayColors = {
  1: { bg: '#DBEAFE', border: '#2563EB', label: 'Mandag', dot: '#2563EB' },
  2: { bg: '#DCFCE7', border: '#16A34A', label: 'Tirsdag', dot: '#16A34A' },
  3: { bg: '#FEF9C3', border: '#CA8A04', label: 'Onsdag', dot: '#CA8A04' },
  4: { bg: '#FEE2E2', border: '#DC2626', label: 'Torsdag', dot: '#DC2626' },
  5: { bg: '#F3E8FF', border: '#9333EA', label: 'Fredag', dot: '#9333EA' },
};

// NEW FORMAT: Week 11 with pack calculation + leftovers + color dots
const week11Data = {
  week_id: "2026-W11",
  plan_name: "Budget Champion",
  type: "single",
  score: 95,
  supermarkets: ["REMA 1000"],
  days: [
    { day: 1, day_name: "Mandag", day_color: "blue", recipe: "Kylling i Karry", uses_leftover: false },
    { day: 2, day_name: "Tirsdag", day_color: "green", recipe: "Pasta med Kylling", uses_leftover: true, leftover_from: "Mandag" },
    { day: 3, day_name: "Onsdag", day_color: "yellow", recipe: "Bolognese med Oksekød", uses_leftover: false },
    { day: 4, day_name: "Torsdag", day_color: "red", recipe: "Lasagne med Bolognese", uses_leftover: true, leftover_from: "Onsdag" },
    { day: 5, day_name: "Fredag", day_color: "purple", recipe: "Æg og Gryde", uses_leftover: false },
  ],
  // NEW FORMAT: Aggregated grocery with pack calculation
  grocery: [
    // Meat - aggregated by days used
    { name: "Hakket kyllingekød", recipeAmount: "400g", packSize: "400g", pricePerPack: 29, packs_needed: 1, total_amount: "400g", total_price: 29, days: [1], day_colors: ["blue"], used_for: "Mandag" },
    { name: "Hakket oksekød", recipeAmount: "500g", packSize: "400g", pricePerPack: 29, packs_needed: 2, total_amount: "800g", total_price: 58, days: [3], day_colors: ["yellow"], used_for: "Onsdag" },
    
    // Pantry - aggregated
    { name: "Pasta", recipeAmount: "900g", packSize: "500g", pricePerPack: 7.66, packs_needed: 2, total_amount: "1000g", total_price: 15.32, days: [2, 3], day_colors: ["green", "yellow"], used_for: "Tirsdag, Onsdag" },
    { name: "Hakkede tomater", recipeAmount: "800g", packSize: "400g", pricePerPack: 6.37, packs_needed: 2, total_amount: "800g", total_price: 12.74, days: [1, 3], day_colors: ["blue", "yellow"], used_for: "Mandag, Onsdag" },
    { name: "Ris", recipeAmount: "400g", packSize: "1kg", pricePerPack: 12, packs_needed: 1, total_amount: "400g", total_price: 12, days: [1], day_colors: ["blue"], used_for: "Mandag" },
    { name: "Kokosmælk", recipeAmount: "200ml", packSize: "400ml", pricePerPack: 8.95, packs_needed: 1, total_amount: "400ml", total_price: 8.95, days: [1], day_colors: ["blue"], used_for: "Mandag" },
    { name: "Tomatpure", recipeAmount: "2 spsk", packSize: "140g", pricePerPack: 6.10, packs_needed: 1, total_amount: "140g", total_price: 6.10, days: [3], day_colors: ["yellow"], used_for: "Onsdag" },
    
    // Dairy
    { name: "Fløde", recipeAmount: "2 dl", packSize: "250ml", pricePerPack: 13.95, packs_needed: 1, total_amount: "250ml", total_price: 13.95, days: [2], day_colors: ["green"], used_for: "Tirsdag" },
    { name: "Mælk", recipeAmount: "5 dl", packSize: "1L", pricePerPack: 10.50, packs_needed: 1, total_amount: "1L", total_price: 10.50, days: [4], day_colors: ["red"], used_for: "Torsdag" },
    { name: "Smør", recipeAmount: "50g", packSize: "200g", pricePerPack: 27.95, packs_needed: 1, total_amount: "200g", total_price: 27.95, days: [4], day_colors: ["red"], used_for: "Torsdag" },
    { name: "Mozzarella", recipeAmount: "200g", packSize: "200g", pricePerPack: 12, packs_needed: 1, total_amount: "200g", total_price: 12, days: [4], day_colors: ["red"], used_for: "Torsdag" },
    { name: "Æg", recipeAmount: "4 stk", packSize: "10 stk", pricePerPack: 12, packs_needed: 1, total_amount: "10 stk", total_price: 12, days: [5], day_colors: ["purple"], used_for: "Fredag" },
    
    // Vegetables - aggregated by days
    { name: "Løg", recipeAmount: "3 stk", packSize: "1kg", pricePerPack: 6, packs_needed: 1, total_amount: "1kg", total_price: 6, days: [1, 3], day_colors: ["blue", "yellow"], used_for: "Mandag, Onsdag" },
    { name: "Hvidløg", recipeAmount: "4 fed", packSize: "2 fed", pricePerPack: 8, packs_needed: 2, total_amount: "4 fed", total_price: 16, days: [1, 2], day_colors: ["blue", "green"], used_for: "Mandag, Tirsdag" },
    { name: "Gulerødder", recipeAmount: "2 stk", packSize: "1kg", pricePerPack: 5, packs_needed: 1, total_amount: "1kg", total_price: 5, days: [3], day_colors: ["yellow"], used_for: "Onsdag" },
    { name: "Cherrytomater", recipeAmount: "200g", packSize: "250g", pricePerPack: 15, packs_needed: 1, total_amount: "250g", total_price: 15, days: [2], day_colors: ["green"], used_for: "Tirsdag" },
    
    // Spices/Condiments - prices unknown
    { name: "Karrypasta", recipeAmount: "2 spsk", packSize: "1 glas", pricePerPack: null, packs_needed: 1, total_amount: "1 glas", total_price: null, days: [1], day_colors: ["blue"], used_for: "Mandag" },
    { name: "Olivenolie", recipeAmount: "2 spsk", packSize: "250ml", pricePerPack: 35, packs_needed: 1, total_amount: "250ml", total_price: 35, days: [1], day_colors: ["blue"], used_for: "Mandag" },
    { name: "Parmesanost", recipeAmount: "50g", packSize: "150g", pricePerPack: null, packs_needed: 1, total_amount: "150g", total_price: null, days: [2], day_colors: ["green"], used_for: "Tirsdag" },
    { name: "Hvedemel", recipeAmount: "4 spsk", packSize: "2kg", pricePerPack: 11.66, packs_needed: 1, total_amount: "2kg", total_price: 11.66, days: [4], day_colors: ["red"], used_for: "Torsdag" },
    { name: "Lasagneplader", recipeAmount: "12 stk", packSize: "12 stk", pricePerPack: null, packs_needed: 1, total_amount: "12 stk", total_price: null, days: [4], day_colors: ["red"], used_for: "Torsdag" },
  ]
};

// Week 12 - Family plan
const week12Data = {
  week_id: "2026-W12",
  plan_name: "Family Favorites",
  type: "family",
  score: 92,
  supermarkets: ["REMA 1000"],
  days: [
    { day: 1, day_name: "Mandag", day_color: "blue", recipe: "Boller i Karry", uses_leftover: false },
    { day: 2, day_name: "Tirsdag", day_color: "green", recipe: "Mørbradgryde", uses_leftover: false },
    { day: 3, day_name: "Onsdag", day_color: "yellow", recipe: "Stegt Flæsk", uses_leftover: false },
    { day: 4, day_name: "Torsdag", day_color: "red", recipe: "Kylling i Curry", uses_leftover: false },
    { day: 5, day_name: "Fredag", day_color: "purple", recipe: "Frikadeller", uses_leftover: false },
  ],
  grocery: []
};

const allPlans = {
  "2026-W11": week11Data,
  "2026-W12": week12Data,
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

  const groceryItems = plan?.grocery || [];
  
  // Calculate totals from packs_needed * pricePerPack
  const totalWithPrice = groceryItems
    .filter(i => i.total_price !== null)
    .reduce((sum, i) => sum + i.total_price, 0);
  
  const itemsWithPrice = groceryItems.filter(i => i.total_price !== null).length;
  const itemsWithoutPrice = groceryItems.filter(i => i.total_price === null).length;

  const [checkedItems, setCheckedItems] = useState(groceryItems.map(() => false));

  useEffect(() => {
    setCheckedItems(groceryItems.map(() => false));
  }, [selectedWeek, groceryItems]);

  const toggleItem = (index) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const checkedTotal = groceryItems.reduce((sum, item, i) => checkedItems[i] && item.total_price ? sum + item.total_price : sum, 0);

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

  // Day color mapping
  const colorMap = {
    blue: '#2563EB',
    green: '#16A34A', 
    yellow: '#CA8A04',
    red: '#DC2626',
    purple: '#9333EA'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-8">
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
              <div><p className="text-xs text-slate-500">Total</p><p className="font-semibold text-emerald-600">{totalWithPrice.toFixed(2)} kr</p></div>
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

        {/* Days Grid - NEW FORMAT with leftover indicator */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {plan?.days?.map((day) => {
            const color = dayColors[day.day];
            return (
              <div key={day.day} className="rounded-xl p-4 text-center border-2 h-full flex flex-col" style={{ backgroundColor: color.bg, borderColor: color.border }}>
                <p className="text-sm font-bold mb-2" style={{ color: color.border }}>{color.label}</p>
                <p className="text-sm font-medium text-slate-700 flex-grow">{day.recipe}</p>
                {day.uses_leftover && (
                  <div className="mt-2 px-2 py-1 bg-emerald-100 rounded-full">
                    <p className="text-xs text-emerald-700 font-medium">med rester fra {day.leftover_from}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Indkøbsliste - NEW FORMAT with pack calculation + color dots */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Indkøbsliste</h2>
                <p className="text-emerald-100 text-sm">{groceryItems.length} varer ({itemsWithPrice} med pris, {itemsWithoutPrice} uden)</p>
              </div>
              <span className="text-white/80 text-sm">{plan?.supermarkets?.[0]}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-2">
              {groceryItems.map((item, i) => (
                <label key={i} className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${checkedItems[i] ? 'bg-emerald-50' : 'hover:bg-slate-50'}`}>
                  {/* Color dots - ONLY for days used */}
                  <div className="flex gap-0.5 flex-shrink-0 w-12">
                    {item.day_colors?.map((color, idx) => (
                      <div key={idx} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colorMap[color] }}></div>
                    ))}
                  </div>
                  
                  <input type="checkbox" checked={checkedItems[i]} onChange={() => toggleItem(i)} className="w-5 h-5 rounded border-2 border-slate-300 text-emerald-500" />
                  
                  <span className={checkedItems[i] ? 'line-through text-slate-400 flex-1' : 'text-slate-700 flex-1'}>
                    {item.name}
                  </span>
                  
                  <span className="text-xs text-slate-500 w-24 text-right">
                    {item.total_amount}
                  </span>
                  
                  <span className={`w-8 text-right font-medium text-xs ${item.total_price ? 'text-emerald-600' : 'text-amber-500'}`}>
                    {item.total_price !== null ? `${item.total_price.toFixed(2)} kr` : '?'}
                  </span>
                </label>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
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
