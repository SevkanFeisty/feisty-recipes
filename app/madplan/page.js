"use client";

import { useState } from "react";
import Link from "next/link";

// Pastel colors for each day
const days = [
  { name: 'Mandag', day_en: 'Monday', color: '#93C5FD', bg: '#DBEAFE', border: '#3B82F6' },
  { name: 'Tirsdag', day_en: 'Tuesday', color: '#86EFAC', bg: '#DCFCE7', border: '#22C55E' },
  { name: 'Onsdag', day_en: 'Wednesday', color: '#FCD34D', bg: '#FEF3C7', border: '#F59E0B' },
  { name: 'Torsdag', day_en: 'Thursday', color: '#FCA5A5', bg: '#FEE2E2', border: '#EF4444' },
  { name: 'Fredag', day_en: 'Friday', color: '#C4B5FD', bg: '#EDE9FE', border: '#8B5CF6' },
];

// Recipe data - used in madplan
const recipesData = {
  "veggie-curry": {
    title: "Veggie Curry",
    day: "Mandag",
    ingredients: [
      "400 ml kokosmælk",
      "240 g kikærter",
      "1 broccoli",
      "100 g ærter",
      "2 spsk karrypasta",
      "1 løg",
      "2 fed hvidløg",
      "400 g ris"
    ]
  },
  "pasta-primavera": {
    title: "Pasta Primavera",
    day: "Tirsdag",
    ingredients: [
      "500 g pasta",
      "400 g hakkede tomater",
      "2 squash",
      "1 peberfrugt",
      "1 broccoli",
      "100 g parmesan",
      "3 fed hvidløg"
    ]
  },
  "veggie-tacos": {
    title: "Veggie Tacos",
    day: "Onsdag",
    ingredients: [
      "8 majs-tortillas",
      "285 g majs",
      "240 g kikærter",
      "1 avocado",
      "1 rødløg",
      "2 tomater",
      "1 lime"
    ]
  },
  "lentil-soup": {
    title: "Linsesuppe",
    day: "Torsdag",
    ingredients: [
      "300 g røde linser",
      "3 gulerødder",
      "2 porrer",
      "1 løg",
      "3 fed hvidløg",
      "1 liter boullion"
    ]
  },
  "falafel-bowl": {
    title: "Falafel Bowl",
    day: "Fredag",
    ingredients: [
      "300 g falafel",
      "250 g hummus",
      "1 pose salat",
      "1 agurk",
      "2 tomater",
      "4 pitabrød"
    ]
  }
};

// Generate combined grocery list from all recipes
function generateGroceryList() {
  const allIngredients = [];
  
  Object.values(recipesData).forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      allIngredients.push({
        name: ing,
        day: recipe.day
      });
    });
  });
  
  return allIngredients;
}

const samplePlan = {
  plan_id: "vegetarian-5day",
  plan_name: "Premium Vegetarian",
  score: 92,
  total_cost_dkk: 189,
  days: [
    { day: 1, day_name: "Monday", recipe_id: "veggie-curry", day_total: 44 },
    { day: 2, day_name: "Tuesday", recipe_id: "pasta-primavera", day_total: 59 },
    { day: 3, day_name: "Wednesday", recipe_id: "veggie-tacos", day_total: 26 },
    { day: 4, day_name: "Thursday", recipe_id: "lentil-soup", day_total: 33 },
    { day: 5, day_name: "Friday", recipe_id: "falafel-bowl", day_total: 36 }
  ]
};

export default function MadplanPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(samplePlan);
  const groceryList = generateGroceryList();

  const getDanishDay = (dayName) => {
    const day = days.find(d => d.day_en === dayName);
    return day ? day.name : dayName;
  };

  const getDayColor = (dayName) => {
    const day = days.find(d => d.day_en === dayName);
    return day ? day : days[0];
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="font-display text-2xl font-bold">Madplan</h1>
          <p className="mt-1 text-emerald-100 text-sm">{selectedPlan.plan_name} • {selectedPlan.total_cost_dkk} kr</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Plan Info Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-bold text-slate-900">Score: {selectedPlan.score}/100</span>
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-bold text-emerald-600">{selectedPlan.total_cost_dkk} kr</span>
            </div>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setWeekOffset(weekOffset - 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50">←</button>
          <span className="text-lg font-semibold text-slate-900 min-w-[150px] text-center">
            {weekOffset === 0 ? "Denne uge" : weekOffset === 1 ? "Næste uge" : `${weekOffset} uger frem`}
          </span>
          <button onClick={() => setWeekOffset(weekOffset + 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50">→</button>
        </div>

        {/* Week Grid */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {selectedPlan.days.map((dayData) => {
            const dayColor = getDayColor(dayData.day_name);
            const recipe = recipesData[dayData.recipe_id];
            
            return (
              <div key={dayData.day} className="bg-white rounded-xl shadow-sm overflow-hidden border-2" style={{ borderColor: dayColor.border }}>
                <div className="py-3 text-center font-bold text-sm" style={{ backgroundColor: dayColor.bg, color: dayColor.border }}>
                  {getDanishDay(dayData.day_name)}
                </div>
                
                <div className="divide-y divide-slate-100">
                  {recipe ? (
                    <Link href={`/opskrifter/${dayData.recipe_id}`} className="block p-3 hover:bg-emerald-50 transition-colors">
                      <span className="text-xs text-slate-400 block mb-1">Aftensmad</span>
                      <span className="text-sm font-medium text-emerald-600 hover:text-emerald-700 block">
                        {recipe.title}
                      </span>
                      <span className="text-xs text-slate-400 mt-1 block">Klik for opskrift →</span>
                    </Link>
                  ) : (
                    <div className="p-3">
                      <span className="text-xs text-slate-400 block">Aftensmad</span>
                      <span className="text-xs text-slate-500">+ Tilføj</span>
                    </div>
                  )}
                  <div className="p-2 bg-slate-50">
                    <span className="text-xs font-bold" style={{ color: dayColor.border }}>{dayData.day_total} kr</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grocery List */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Indkøbsliste</h2>
          
          <div className="space-y-4">
            {groceryList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500" />
                <span className="text-slate-700">{item.name}</span>
                <span className="ml-auto text-xs text-slate-400">{item.day}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <span className="font-bold text-slate-900">I alt: {groceryList.length} ingredienser</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg text-lg">
            Generér indkøbsliste
          </button>
        </div>
      </main>
    </div>
  );
}
