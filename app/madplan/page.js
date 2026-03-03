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

// Recipe data with full ingredient details
const recipesData = {
  "veggie-curry": {
    title: "Veggie Curry",
    day: "Mandag",
    ingredients: [
      { name: "Kokosmælk", amount: "400 ml", brand: "Coco", price: 12.95 },
      { name: "Kikærter", amount: "400 g", brand: "Casablanca", price: 8.95 },
      { name: "Broccoli", amount: "1 stk", brand: "Frugt & Grønt", price: 9.95 },
      { name: "Ærter", amount: "300 g", brand: "Frozen", price: 12.50 },
      { name: "Karrypasta", amount: "290 g", brand: "Blue Dragon", price: 19.95 },
      { name: "Løg", amount: "1 kg", brand: "Frugt & Grønt", price: 8.95 },
      { name: "Hvidløg", amount: "3 fed", brand: "Frugt & Grønt", price: 5.00 },
      { name: "Jasminris", amount: "1 kg", brand: "Tastic", price: 14.95 }
    ]
  },
  "pasta-primavera": {
    title: "Pasta Primavera",
    day: "Tirsdag",
    ingredients: [
      { name: "Pasta", amount: "500 g", brand: "Barilla", price: 9.95 },
      { name: "Hakkede tomater", amount: "400 g", brand: "Mutti", price: 14.95 },
      { name: "Squash", amount: "2 stk", brand: "Frugt & Grønt", price: 10.00 },
      { name: "Peberfrugt", amount: "2 stk", brand: "Frugt & Grønt", price: 12.00 },
      { name: "Broccoli", amount: "1 stk", brand: "Frugt & Grønt", price: 9.95 },
      { name: "Parmesan", amount: "200 g", brand: "Arla", price: 29.95 },
      { name: "Hvidløg", amount: "1 hoved", brand: "Frugt & Grønt", price: 3.00 }
    ]
  },
  "veggie-tacos": {
    title: "Veggie Tacos",
    day: "Onsdag",
    ingredients: [
      { name: "Majs-tortillas", amount: "8 stk", brand: "Santa Maria", price: 18.95 },
      { name: "Majs", amount: "340 g", brand: "Sweet Corn", price: 7.95 },
      { name: "Kikærter", amount: "400 g", brand: "Casablanca", price: 8.95 },
      { name: "Avocado", amount: "2 stk", brand: "Frugt & Grønt", price: 14.00 },
      { name: "Rødløg", amount: "2 stk", brand: "Frugt & Grønt", price: 6.00 },
      { name: "Tomater", amount: "4 stk", brand: "Frugt & Grønt", price: 12.00 },
      { name: "Lime", amount: "2 stk", brand: "Frugt & Grønt", price: 8.00 }
    ]
  },
  "lentil-soup": {
    title: "Linsesuppe",
    day: "Torsdag",
    ingredients: [
      { name: "Røde linser", amount: "500 g", brand: "Bobs Red Mill", price: 19.95 },
      { name: "Gulerødder", amount: "1 kg", brand: "Frugt & Grønt", price: 9.95 },
      { name: "Porrer", amount: "2 stk", brand: "Frugt & Grønt", price: 8.00 },
      { name: "Løg", amount: "1 kg", brand: "Frugt & Grønt", price: 8.95 },
      { name: "Hvidløg", amount: "1 hoved", brand: "Frugt & Grønt", price: 3.00 },
      { name: "Grøntsagsbouillon", amount: "6 stk", brand: "Knorr", price: 15.95 }
    ]
  },
  "falafel-bowl": {
    title: "Falafel Bowl",
    day: "Fredag",
    ingredients: [
      { name: "Falafel", amount: "300 g", brand: "D四个字", price: 22.95 },
      { name: "Hummus", amount: "250 g", brand: "Pulsar", price: 14.95 },
      { name: "Salatmix", amount: "250 g", brand: "Evergreen", price: 12.95 },
      { name: "Agurk", amount: "1 stk", brand: "Frugt & Grønt", price: 5.00 },
      { name: "Tomater", amount: "4 stk", brand: "Frugt & Grønt", price: 12.00 },
      { name: "Pitabrød", amount: "4 stk", brand: "Al Arabi", price: 14.95 }
    ]
  }
};

// Find ingredients used in multiple days
function getMultiDayIngredients() {
  const ingredientCount = {};
  
  Object.values(recipesData).forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase();
      if (!ingredientCount[key]) {
        ingredientCount[key] = { name: ing.name, days: [], count: 0 };
      }
      ingredientCount[key].days.push(recipe.day);
      ingredientCount[key].count++;
    });
  });
  
  return Object.values(ingredientCount).filter(i => i.count > 1);
}

// Generate grocery list with prices
function generateGroceryList() {
  const allIngredients = [];
  const seen = new Set();
  
  Object.values(recipesData).forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        allIngredients.push({
          name: ing.name,
          amount: ing.amount,
          brand: ing.brand,
          price: ing.price,
          days: [recipe.day]
        });
      } else {
        // Add day to existing
        const existing = allIngredients.find(i => i.name.toLowerCase() === key);
        if (existing && !existing.days.includes(recipe.day)) {
          existing.days.push(recipe.day);
        }
      }
    });
  });
  
  return allIngredients.sort((a, b) => {
    // Multi-day items first
    if (a.days.length > 1 && b.days.length === 1) return -1;
    if (a.days.length === 1 && b.days.length > 1) return 1;
    return a.name.localeCompare(b.name);
  });
}

const samplePlan = {
  plan_id: "vegetarian-5day",
  plan_name: "Premium Vegetarian",
  score: 92,
  total_cost_dkk: 189,
  supermarket: "REMA 1000",
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
  const multiDayIngredients = getMultiDayIngredients();
  
  const totalPrice = groceryList.reduce((sum, item) => sum + item.price, 0);

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
        
        {/* Plan Summary Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Supermarket */}
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏪</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Supermarked</div>
              <div className="text-xl font-bold text-slate-900">{selectedPlan.supermarket}</div>
            </div>
            
            {/* Total Cost */}
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Pris</div>
              <div className="text-xl font-bold text-emerald-600">{totalPrice.toFixed(2)} kr</div>
            </div>
            
            {/* Score */}
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Score</div>
              <div className="text-xl font-bold text-slate-900">{selectedPlan.score}/100</div>
            </div>
            
            {/* Multi-day items */}
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl mb-2">♻️</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Genbruges</div>
              <div className="text-xl font-bold text-amber-600">{multiDayIngredients.length} varer</div>
            </div>
          </div>
          
          {/* Multi-day ingredients detail */}
          {multiDayIngredients.length > 0 && (
            <div className="mt-4 pt-4 border-t border-amber-200">
              <div className="text-sm text-amber-800 font-medium mb-2">Disse ingredienser bruges på flere dage:</div>
              <div className="flex flex-wrap gap-2">
                {multiDayIngredients.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                    {item.name} ({item.days.join(', ')})
                  </span>
                ))}
              </div>
            </div>
          )}
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Indkøbsliste</h2>
            <span className="text-sm text-slate-500">Klik for at krydse af</span>
          </div>
          
          <div className="space-y-2">
            {groceryList.map((item, idx) => (
              <label key={idx} className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all hover:shadow-md ${item.days.length > 1 ? 'bg-amber-50 border border-amber-200' : 'bg-slate-50'}`}>
                <input 
                  type="checkbox" 
                  className="w-6 h-6 rounded-lg border-2 border-slate-300 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-2" 
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${item.days.length > 1 ? 'text-amber-700' : 'text-slate-900'}`}>
                      {item.name}
                    </span>
                    {item.days.length > 1 && (
                      <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
                        Bruges {item.days.length} dage
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-500">{item.amount} • {item.brand}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">{item.price.toFixed(2)} kr</div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-900">I alt:</span>
            <span className="text-2xl font-bold text-emerald-600">{totalPrice.toFixed(2)} kr</span>
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
