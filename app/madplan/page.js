"use client";

import { useState } from "react";
import Link from "next/link";

// Get current week number
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

// Current week data
const currentWeek = getWeekNumber(new Date());
const currentYear = new Date().getFullYear();

// Weekly plan data
const weeklyPlan = {
  "2026-W10": {
    week_id: "2026-W10",
    plan_name: "Vegetarisk",
    start_date: "2026-03-02",
    score: 88,
    total_cost_dkk: 245,
    supermarkets: ["REMA 1000"],
    days: [
      { day: 1, day_name: "Mandag", meals: [{ recipe_name: "Veggie Curry", type: "dinner" }], day_total: 49 },
      { day: 2, day_name: "Tirsdag", meals: [{ recipe_name: "Pasta Primavera", type: "dinner" }], day_total: 45 },
      { day: 3, day_name: "Onsdag", meals: [{ recipe_name: "Veggie Tacos", type: "dinner" }], day_total: 52 },
      { day: 4, day_name: "Torsdag", meals: [{ recipe_name: "Linsesuppe", type: "dinner" }], day_total: 38 },
      { day: 5, day_name: "Fredag", meals: [{ recipe_name: "Falafel Bowl", type: "dinner" }], day_total: 61 },
    ]
  },
  "2026-W11": {
    week_id: "2026-W11",
    plan_name: "Standard Danish",
    start_date: "2026-03-09",
    score: 85,
    total_cost_dkk: 320,
    supermarkets: ["REMA 1000"],
    days: [
      { day: 1, day_name: "Mandag", meals: [{ recipe_name: "Boller i Karry", type: "dinner" }], day_total: 87 },
      { day: 2, day_name: "Tirsdag", meals: [{ recipe_name: "Mørbradgryde", type: "dinner" }], day_total: 120 },
      { day: 3, day_name: "Onsdag", meals: [{ recipe_name: "Stegt Flæsk", type: "dinner" }], day_total: 63 },
      { day: 4, day_name: "Torsdag", meals: [{ recipe_name: "Kylling i Curry", type: "dinner" }], day_total: 0 },
      { day: 5, day_name: "Fredag", meals: [{ recipe_name: "Frikadeller", type: "dinner" }], day_total: 0 },
    ]
  }
};

// Day colors - matching profile
const dayColors = {
  1: { bg: '#DBEAFE', border: '#3B82F6', color: '#93C5FD', label: 'Mandag' },
  2: { bg: '#DCFCE7', border: '#22C55E', color: '#86EFAC', label: 'Tirsdag' },
  3: { bg: '#FEF3C7', border: '#F59E0B', color: '#FCD34D', label: 'Onsdag' },
  4: { bg: '#FEE2E2', border: '#EF4444', color: '#FCA5A5', label: 'Torsdag' },
  5: { bg: '#EDE9FE', border: '#8B5CF6', color: '#C4B5FD', label: 'Fredag' },
};

export default function MadplanPage() {
  const [selectedWeek, setSelectedWeek] = useState(`${currentYear}-W${currentWeek.toString().padStart(2, '0')}`);
  
  // Get available weeks
  const availableWeeks = Object.keys(weeklyPlan);
  const weeks = [...availableWeeks].sort();
  
  // Find current week index
  const currentWeekIdx = weeks.indexOf(selectedWeek);
  const canGoPrev = currentWeekIdx > 0;
  const canGoNext = currentWeekIdx < weeks.length - 1;
  
  const plan = weeklyPlan[selectedWeek];

  const prevWeek = canGoPrev ? weeks[currentWeekIdx - 1] : null;
  const nextWeek = canGoNext ? weeks[currentWeekIdx + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Madplan</h1>
              <p className="text-emerald-100 text-sm mt-1">Uge {plan?.week_id?.replace('2026-W', '') || ''} - {plan?.plan_name || ''}</p>
            </div>
            
            {/* Week Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => prevWeek && setSelectedWeek(prevWeek)}
                disabled={!canGoPrev}
                className={`p-2 rounded-full transition ${
                  canGoPrev 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="px-4 py-2 bg-white/20 text-white font-medium rounded-full">
                {selectedWeek.replace('2026-', '')}
              </span>
              
              <button
                onClick={() => nextWeek && setSelectedWeek(nextWeek)}
                disabled={!canGoNext}
                className={`p-2 rounded-full transition ${
                  canGoNext 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Plan Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Supermarked</p>
                <p className="font-semibold text-slate-900">{plan?.supermarkets?.join(', ') || 'REMA 1000'}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Total Pris</p>
                <p className="font-semibold text-emerald-600">{plan?.total_cost_dkk || 0} kr</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Score</p>
                <p className="font-semibold text-slate-900">{plan?.score || 0}/100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Week Days Grid - Same as profile */}
        <div className="grid grid-cols-5 gap-3 mb-8">
          {plan?.days?.map((day) => {
            const color = dayColors[day.day];
            const meal = day.meals?.[0];
            return (
              <Link 
                key={day.day} 
                href={meal ? `/opskrifter/${slugify(meal.recipe_name)}` : '#'}
                className="group"
              >
                <div 
                  className="rounded-xl p-4 text-center border-2 transition-all group-hover:scale-105"
                  style={{ backgroundColor: color.bg, borderColor: color.border }}
                >
                  <p className="text-sm font-bold mb-2" style={{ color: color.border }}>{color.label}</p>
                  {meal ? (
                    <p className="text-sm font-medium text-slate-700 line-clamp-2">{meal.recipe_name}</p>
                  ) : (
                    <p className="text-sm text-slate-400">Ingen ret</p>
                  )}
                  <p className="text-sm mt-2 font-semibold" style={{ color: color.border }}>{day.day_total} kr</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Grocery List Preview */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
            <h2 className="text-lg font-bold text-white">Indkøbsliste</h2>
            <p className="text-teal-100 text-sm">{plan?.supermarkets?.[0] || 'REMA 1000'}</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Hakket kød</p>
                  <p className="text-xs text-slate-500">400g • Kød</p>
                </div>
                <span className="font-semibold text-slate-700">29 kr</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Kyllingebryst</p>
                  <p className="text-xs text-slate-500">600g • Kød</p>
                </div>
                <span className="font-semibold text-slate-700">40 kr</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Kartofler</p>
                  <p className="text-xs text-slate-500">1kg • Grøntsager</p>
                </div>
                <span className="font-semibold text-slate-700">10 kr</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Peberfrugt</p>
                  <p className="text-xs text-slate-500">2stk • Grøntsager</p>
                </div>
                <span className="font-semibold text-slate-700">24 kr</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">I alt</span>
              <span className="text-xl font-bold text-emerald-600">{plan?.total_cost_dkk || 0} kr</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function slugify(text) {
  if (!text) return '';
  return text.toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
