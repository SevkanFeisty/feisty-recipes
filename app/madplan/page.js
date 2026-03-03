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

// Categories for ingredients
const categories = {
  "Grøntsager": { icon: "🥬", color: "bg-green-100 border-green-300" },
  "Frugt": { icon: "🍎", color: "bg-red-100 border-red-300" },
  "Kød & Fisk": { icon: "🥩", color: "bg-rose-100 border-rose-300" },
  "Mejeri": { icon: "🧀", color: "bg-yellow-100 border-yellow-300" },
  "Tørvarer": { icon: "🥫", color: "bg-amber-100 border-amber-300" },
  "Krydderier": { icon: "🧂", color: "bg-orange-100 border-orange-300" },
  "Frosne": { icon: "🧊", color: "bg-cyan-100 border-cyan-300" },
  "Brød": { icon: "🍞", color: "bg-amber-50 border-amber-200" },
  "Diverse": { icon: "📦", color: "bg-slate-100 border-slate-300" }
};

// Categorize ingredient
function categorizeIngredient(name) {
  const lower = name.toLowerCase();
  
  if (lower.includes('løg') || lower.includes('hvidløg') || lower.includes('gulerod') || lower.includes('porre') || 
      lower.includes('broccoli') || lower.includes('squash') || lower.includes('peberfrugt') || lower.includes('agurk') ||
      lower.includes('tomater') || lower.includes('salat') || lower.includes('avocado') || lower.includes('lime') ||
      lower.includes('basilikum') || lower.includes('koriander') || lower.includes('mynte') || lower.includes('persille')) {
    return "Grøntsager";
  }
  if (lower.includes('ært')) return "Grøntsager";
  if (lower.includes('ris') || lower.includes('pasta') || lower.includes('linser') || lower.includes('kikært') ||
      lower.includes('majs') || lower.includes('bouillon') || lower.includes('tortilla') || lower.includes('pitabrød')) {
    return "Tørvarer";
  }
  if (lower.includes('mælk') || lower.includes('ost') || lower.includes('parmesan') || lower.includes('cremefraiche') ||
      lower.includes('tza tziki') || lower.includes('hummus')) {
    return "Mejeri";
  }
  if (lower.includes('olie') || lower.includes('eddike') || lower.includes('soja')) {
    return "Diverse";
  }
  if (lower.includes('salt') || lower.includes('peber') || lower.includes('karry') || lower.includes('spidskommen') ||
      lower.includes('gurkemeje') || lower.includes('paprika') || lower.includes('laurbær')) {
    return "Krydderier";
  }
  if (lower.includes('falafel')) {
    return "Frosne";
  }
  return "Diverse";
}

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
      { name: "Jasminris", amount: "1 kg", brand: "Tistic", price: 14.95 }
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

// Generate grocery list grouped by category
function generateGroceryList() {
  const categorized = {};
  const multiDay = getMultiDayIngredients();
  const multiDayNames = multiDay.map(m => m.name.toLowerCase());
  
  // Initialize categories
  Object.keys(categories).forEach(cat => {
    categorized[cat] = [];
  });
  
  const seen = new Set();
  
  Object.values(recipesData).forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        const category = categorizeIngredient(ing.name);
        categorized[category].push({
          name: ing.name,
          amount: ing.amount,
          brand: ing.brand,
          price: ing.price,
          days: [recipe.day],
          isMultiDay: multiDayNames.includes(key)
        });
      } else {
        const category = categorizeIngredient(ing.name);
        const existing = categorized[category].find(i => i.name.toLowerCase() === key);
        if (existing && !existing.days.includes(recipe.day)) {
          existing.days.push(recipe.day);
          existing.isMultiDay = true;
        }
      }
    });
  });
  
  // Sort items within each category
  Object.keys(categorized).forEach(cat => {
    categorized[cat].sort((a, b) => {
      if (a.isMultiDay && !b.isMultiDay) return -1;
      if (!a.isMultiDay && b.isMultiDay) return 1;
      return a.name.localeCompare(b.name);
    });
  });
  
  return categorized;
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
  
  const totalPrice = Object.values(groceryList).flat().reduce((sum, item) => sum + item.price, 0);

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
          <p className="mt-1 text-emerald-100 text-sm">{selectedPlan.plan_name} • {totalPrice.toFixed(2)} kr</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6">
        
        {/* Plan Summary Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏪</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Supermarked</div>
              <div className="text-xl font-bold text-slate-900">{selectedPlan.supermarket}</div>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Pris</div>
              <div className="text-xl font-bold text-emerald-600">{totalPrice.toFixed(2)} kr</div>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Score</div>
              <div className="text-xl font-bold text-slate-900">{selectedPlan.score}/100</div>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl mb-2">♻️</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Genbruges</div>
              <div className="text-xl font-bold text-amber-600">{multiDayIngredients.length} varer</div>
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

        {/* Grocery List - By Category */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Indkøbsliste</h2>
            <p className="text-sm text-slate-500 mt-1">Klik for at krydse af</p>
          </div>
          
          {Object.entries(groceryList).map(([category, items]) => {
            if (items.length === 0) return null;
            const catInfo = categories[category];
            
            return (
              <div key={category} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{catInfo.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{category}</h3>
                  <span className="text-xs text-slate-500">({items.length} varer)</span>
                </div>
                
                <div className="space-y-2 pl-2">
                  {items.map((item, idx) => (
                    <label 
                      key={idx} 
                      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all hover:shadow-md ${item.isMultiDay ? 'bg-amber-50 border border-amber-200' : 'bg-slate-50'}`}
                    >
                      <input 
                        type="checkbox" 
                        className="w-6 h-6 rounded-lg border-2 border-slate-300 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-2" 
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${item.isMultiDay ? 'text-amber-700' : 'text-slate-900'}`}>
                            {item.name}
                          </span>
                          {item.isMultiDay && (
                            <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
                              {item.days.length} dage
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
              </div>
            );
          })}

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-900">I alt:</span>
            <span className="text-2xl font-bold text-emerald-600">{totalPrice.toFixed(2)} kr</span>
          </div>
        </div>

        {/* Multi-day ingredients - below grocery list */}
        {multiDayIngredients.length > 0 && (
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">♻️</span>
              <h3 className="text-lg font-bold text-amber-800">Disse ingredienser bruges på flere dage</h3>
            </div>
            <p className="text-sm text-amber-700 mb-4">Køb lidt ekstra af disse varer for at undgå madspild:</p>
            <div className="flex flex-wrap gap-2">
              {multiDayIngredients.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-amber-300 text-amber-700 rounded-full text-sm font-medium">
                  {item.name} → bruges {item.days.length} dage ({item.days.join(', ')})
                </span>
              ))}
            </div>
          </div>
        )}

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
