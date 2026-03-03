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
  "Kød & Fisk": { icon: "🥩", color: "bg-rose-100 border-rose-300" },
  "Mejeri": { icon: "🧀", color: "bg-yellow-100 border-yellow-300" },
  "Tørvarer": { icon: "🥫", color: "bg-amber-100 border-amber-300" },
  "Krydderier": { icon: "🧂", color: "bg-orange-100 border-orange-300" },
  "Brød": { icon: "🍞", color: "bg-amber-50 border-amber-200" },
  "Diverse": { icon: "📦", color: "bg-slate-100 border-slate-300" }
};

// Categorize ingredient
function categorizeIngredient(name) {
  const lower = name.toLowerCase();
  
  if (lower.includes('løg') || lower.includes('hvidløg') || lower.includes('gulerod') || lower.includes('porre') || 
      lower.includes('broccoli') || lower.includes('squash') || lower.includes('peberfrugt') || lower.includes('agurk') ||
      lower.includes('tomater') || lower.includes('salat') || lower.includes('avocado') || lower.includes('lime') ||
      lower.includes('basilikum') || lower.includes('koriander') || lower.includes('mynte') || lower.includes('persille') ||
      lower.includes('champignon') || lower.includes('grøntsager') || lower.includes('grønt')) {
    return "Grøntsager";
  }
  if (lower.includes('ris') || lower.includes('pasta') || lower.includes('linser') || lower.includes('kikært') ||
      lower.includes('majs') || lower.includes('bouillon') || lower.includes('tortilla') || lower.includes('pitabrød') ||
      lower.includes('mel') || lower.includes('boller')) {
    return "Tørvarer";
  }
  if (lower.includes('mælk') || lower.includes('ost') || lower.includes('parmesan') || lower.includes('cremefraiche') ||
      lower.includes('fløde') || lower.includes('yoghurt') || lower.includes('smør')) {
    return "Mejeri";
  }
  if (lower.includes('hakket') || lower.includes('kød') || lower.includes('bacon') || lower.includes('gris') ||
      lower.includes('kalv') || lower.includes('mørbrad') || lower.includes('fisk')) {
    return "Kød & Fisk";
  }
  if (lower.includes('olie') || lower.includes('eddike') || lower.includes('soja')) {
    return "Diverse";
  }
  if (lower.includes('salt') || lower.includes('peber') || lower.includes('karry') || lower.includes('spidskommen') ||
      lower.includes('gurkemeje') || lower.includes('paprika') || lower.includes('laurbær') || lower.includes('æg')) {
    return "Krydderier";
  }
  return "Diverse";
}

// Get current ISO week string
function getCurrentISOWeek() {
  const now = new Date();
  const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  return { year: d.getUTCFullYear(), week: weekNum, weekString: `${d.getUTCFullYear()}-W${weekNum.toString().padStart(2, '0')}` };
}

// Week 10 data (current week) - from vegetarian-5day.json
const week10Plan = {
  week_id: "2026-W10",
  plan_id: "vegetarian-5day",
  plan_name: "Premium Vegetarian",
  start_date: "2026-03-02",
  score: 92,
  total_cost_dkk: 189,
  supermarkets: ["REMA 1000"],
  days: [
    {
      day: 1, day_name: "Monday",
      meals: [{ type: "dinner", recipe_name: "Veggie Curry", servings: 2 }],
      grocery_list: [
        {name: "Kokosmælk", quantity: 400, unit: "ml", store: "REMA 1000", price: 8.95},
        {name: "Kikærter", quantity: 240, unit: "g", store: "REMA 1000", price: 7.86},
        {name: "Broccoli", quantity: 1, unit: "stk", store: "Frugt & Grønt", price: 15.00},
        {name: "Ris", quantity: 1, unit: "kg", store: "REMA 1000", price: 12.00}
      ],
      day_total: 44
    },
    {
      day: 2, day_name: "Tuesday",
      meals: [{ type: "dinner", recipe_name: "Pasta Primavera", servings: 2 }],
      grocery_list: [
        {name: "Pasta", quantity: 500, unit: "g", store: "REMA 1000", price: 9.95},
        {name: "Hakkede tomater", quantity: 400, unit: "g", store: "REMA 1000", price: 14.95},
        {name: "Grøntsager", quantity: 1, unit: "pose", store: "REMA 1000", price: 25.00},
        {name: "Parmesan", quantity: 200, unit: "g", store: "Arla", price: 29.95}
      ],
      day_total: 59
    },
    {
      day: 3, day_name: "Wednesday",
      meals: [{ type: "dinner", recipe_name: "Veggie Tacos", servings: 2 }],
      grocery_list: [
        {name: "Majs-tortillas", quantity: 8, unit: "stk", store: "Santa Maria", price: 18.95},
        {name: "Majs", quantity: 285, unit: "g", store: "REMA 1000", price: 7.95},
        {name: "Kikærter", quantity: 240, unit: "g", store: "REMA 1000", price: 7.86},
        {name: "Avocado", quantity: 1, unit: "stk", store: "Frugt & Grønt", price: 8.00}
      ],
      day_total: 26
    },
    {
      day: 4, day_name: "Thursday",
      meals: [{ type: "dinner", recipe_name: "Linsesuppe", servings: 2 }],
      grocery_list: [
        {name: "Røde linser", quantity: 300, unit: "g", store: "REMA 1000", price: 12.00},
        {name: "Gulerødder", quantity: 1, unit: "kg", store: "Frugt & Grønt", price: 9.95},
        {name: "Porrer", quantity: 2, unit: "stk", store: "Frugt & Grønt", price: 8.00},
        {name: "Løg", quantity: 1, unit: "kg", store: "Frugt & Grønt", price: 8.95}
      ],
      day_total: 33
    },
    {
      day: 5, day_name: "Friday",
      meals: [{ type: "dinner", recipe_name: "Falafel Bowl", servings: 2 }],
      grocery_list: [
        {name: "Falafel", quantity: 300, unit: "g", store: "REMA 1000", price: 22.95},
        {name: "Hummus", quantity: 250, unit: "g", store: "Pulsar", price: 14.95},
        {name: "Salatmix", quantity: 1, unit: "pose", store: "REMA 1000", price: 12.95},
        {name: "Agurk", quantity: 1, unit: "stk", store: "Frugt & Grønt", price: 5.00}
      ],
      day_total: 36
    }
  ]
};

// Week 11 data (next week) - from standard-5day-danish.json
const week11Plan = {
  week_id: "2026-W11",
  plan_id: "standard-5day-danish",
  plan_name: "Standard Danish (5 days)",
  start_date: "2026-03-09",
  score: 85,
  total_cost_dkk: 320,
  supermarkets: ["REMA 1000"],
  days: [
    {
      day: 1, day_name: "Monday",
      meals: [{ type: "dinner", recipe_name: "Boller i Karry", servings: 4 }],
      grocery_list: [
        {name: "Hakket gris og kalv", quantity: 400, unit: "g", store: "REMA 1000", price: 29.00},
        {name: "Løg", quantity: 1, unit: "stk", store: "Frugt & Grønt", price: 3.00},
        {name: "Æg", quantity: 6, unit: "stk", store: "REMA 1000", price: 12.00},
        {name: "Mel", quantity: 500, unit: "g", store: "REMA 1000", price: 5.00},
        {name: "Mælk", quantity: 1, unit: "l", store: "Arla", price: 10.00},
        {name: "Karry", quantity: 1, unit: "pk", store: "Santa Maria", price: 20.00},
        {name: "Ris", quantity: 400, unit: "g", store: "REMA 1000", price: 8.00}
      ],
      day_total: 87
    },
    {
      day: 2, day_name: "Tuesday",
      meals: [{ type: "dinner", recipe_name: "Mørbradgryde", servings: 4 }],
      grocery_list: [
        {name: "Grismørbrad", quantity: 600, unit: "g", store: "REMA 1000", price: 60.00},
        {name: "Bacon", quantity: 100, unit: "g", store: "REMA 1000", price: 15.00},
        {name: "Champignoner", quantity: 250, unit: "g", store: "Frugt & Grønt", price: 20.00},
        {name: "Fløde", quantity: 2, unit: "dl", store: "Arla", price: 15.00},
        {name: "Pasta", quantity: 500, unit: "g", store: "Barilla", price: 9.95}
      ],
      day_total: 120
    },
    {
      day: 3, day_name: "Wednesday",
      meals: [{ type: "dinner", recipe_name: "Stegt Flæsk", servings: 4 }],
      grocery_list: [
        {name: "Flæsk", quantity: 600, unit: "g", store: "REMA 1000", price: 45.00},
        {name: "Kartofler", quantity: 1, unit: "kg", store: "Frugt & Grønt", price: 10.00},
        {name: "Persille", quantity: 1, unit: "bundt", store: "Frugt & Grønt", price: 8.00}
      ],
      day_total: 63
    },
    {
      day: 4, day_name: "Thursday",
      meals: [{ type: "dinner", recipe_name: "Kylling i Curry", servings: 4 }],
      grocery_list: [
        {name: "Kyllingebryst", quantity: 600, unit: "g", store: "REMA 1000", price: 40.00},
        {name: "Kokosmælk", quantity: 400, unit: "ml", store: "REMA 1000", price: 12.00},
        {name: "Ananas", quantity: 1, unit: "dåse", store: "REMA 1000", price: 15.00},
        {name: "Curry", quantity: 1, unit: "pk", store: "Santa Maria", price: 18.00}
      ],
      day_total: 85
    },
    {
      day: 5, day_name: "Friday",
      meals: [{ type: "dinner", recipe_name: "Fiskefrikadeller", servings: 4 }],
      grocery_list: [
        {name: "Fiskefars", quantity: 400, unit: "g", store: "REMA 1000", price: 35.00},
        {name: "Kartofler", quantity: 1, unit: "kg", store: "Frugt & Grønt", price: 10.00},
        {name: "Remoulade", quantity: 1, unit: "glas", store: "REMA 1000", price: 18.00},
        {name: "Citron", quantity: 1, unit: "stk", store: "Frugt & Grønt", price: 5.00}
      ],
      day_total: 68
    }
  ]
};

// Map weeks to plans
const weeklyPlans = {
  "2026-W10": week10Plan,
  "2026-W11": week11Plan
};

// Generate grocery list from weekly plan
function generateGroceryList(weeklyPlan) {
  if (!weeklyPlan || !weeklyPlan.days) return { categorized: {}, total: 0, multiDay: [] };
  
  const allIngredients = [];
  const seen = new Set();
  const multiDayIngredients = [];
  
  weeklyPlan.days.forEach(day => {
    if (day.grocery_list) {
      day.grocery_list.forEach(item => {
        const key = item.name.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          allIngredients.push({
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
            store: item.store || 'Generic',
            price: item.price || 0,
            days: [day.day_name]
          });
        } else {
          const existing = allIngredients.find(i => i.name.toLowerCase() === key);
          if (existing && !existing.days.includes(day.day_name)) {
            existing.days.push(day.day_name);
            if (existing.days.length > 1 && !multiDayIngredients.includes(existing)) {
              multiDayIngredients.push(existing);
            }
          }
        }
      });
    }
  });
  
  // Categorize
  const categorized = {};
  Object.keys(categories).forEach(cat => {
    categorized[cat] = [];
  });
  
  allIngredients.forEach(ing => {
    const category = categorizeIngredient(ing.name);
    categorized[category].push(ing);
  });
  
  // Sort: multi-day items first
  Object.keys(categorized).forEach(cat => {
    categorized[cat].sort((a, b) => {
      if (a.days.length > 1 && b.days.length === 1) return -1;
      if (a.days.length === 1 && b.days.length > 1) return 1;
      return a.name.localeCompare(b.name);
    });
  });
  
  const total = allIngredients.reduce((sum, item) => sum + (item.price || 0), 0);
  
  return { categorized, total, multiDay: multiDayIngredients };
}

export default function MadplanPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  
  // Limit navigation to ±2 weeks from current
  const goToNextWeek = () => {
    if (weekOffset < 2) setWeekOffset(weekOffset + 1);
  };
  
  const goToPrevWeek = () => {
    if (weekOffset > -2) setWeekOffset(weekOffset - 1);
  };
  
  // Get current ISO week info
  const currentWeekInfo = getCurrentISOWeek();
  const currentWeekString = currentWeekInfo.weekString;
  
  // Calculate target week
  const targetWeekNum = currentWeekInfo.week + weekOffset;
  const targetYear = currentWeekInfo.year + Math.floor((targetWeekNum - 1) / 52);
  const adjustedWeekNum = ((targetWeekNum - 1) % 52) + 1;
  const targetWeekString = `${targetYear}-W${adjustedWeekNum.toString().padStart(2, '0')}`;
  
  // Get the plan for this week
  const weeklyPlan = weeklyPlans[targetWeekString] || null;
  const groceryData = weeklyPlan ? generateGroceryList(weeklyPlan) : { categorized: {}, total: 0, multiDay: [] };

  // Calculate week label
  const getWeekLabel = () => {
    if (weekOffset === 0) return `Uge ${currentWeekInfo.week} - ${currentWeekInfo.year}`;
    if (weekOffset === 1) return `Næste uge (Uge ${adjustedWeekNum})`;
    if (weekOffset === -1) return `Sidste uge (Uge ${adjustedWeekNum})`;
    return `Uge ${adjustedWeekNum} ${targetYear}`;
  };

  const getDanishDayName = (dayName) => {
    const map = {
      'Monday': 'Mandag', 'Tuesday': 'Tirsdag', 'Wednesday': 'Onsdag',
      'Thursday': 'Torsdag', 'Friday': 'Fredag', 'Saturday': 'Lørdag', 'Sunday': 'Søndag'
    };
    return map[dayName] || dayName;
  };

  const getDayColor = (dayName) => {
    const day = days.find(d => d.day_en === dayName);
    return day || days[0];
  };

  // No plan found
  if (!weeklyPlan) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-6">
          <div className="mx-auto max-w-7xl px-4 text-center text-white">
            <h1 className="font-display text-2xl font-bold">Madplan</h1>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-red-800 mb-2">Ingen madplan tilgængelig</h2>
            <p className="text-red-600">Der er ikke uploadet en madplan for {targetWeekString} endnu.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="font-display text-2xl font-bold">Madplan</h1>
          <p className="mt-1 text-emerald-100 text-sm">{weeklyPlan.plan_name} • {weeklyPlan.total_cost_dkk} kr</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6">
        
        {/* Plan Summary Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏪</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Supermarked</div>
              <div className="text-xl font-bold text-slate-900">{weeklyPlan.supermarkets?.join(', ') || 'Ikke specificeret'}</div>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Pris</div>
              <div className="text-xl font-bold text-emerald-600">{groceryData.total.toFixed(2)} kr</div>
            </div>
            
            <div className="text-center p-4 bg-emerald-50 rounded-xl">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Score</div>
              <div className="text-xl font-bold text-slate-900">{weeklyPlan.score}/100</div>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-xl">
              <div className="text-3xl mb-2">♻️</div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Genbruges</div>
              <div className="text-xl font-bold text-amber-600">{groceryData.multiDay.length} varer</div>
            </div>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button 
            onClick={goToPrevWeek} 
            disabled={weekOffset <= -2}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${weekOffset <= -2 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white shadow-sm text-slate-600 hover:bg-slate-50'}`}
          >
            ←
          </button>
          <div className="text-lg font-semibold text-slate-900 min-w-[200px] text-center">
            {getWeekLabel()}
          </div>
          <button 
            onClick={goToNextWeek} 
            disabled={weekOffset >= 2}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${weekOffset >= 2 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white shadow-sm text-slate-600 hover:bg-slate-50'}`}
          >
            →
          </button>
        </div>

        {/* Week Grid */}
        <div className="grid grid-cols-5 gap-2 mb-8">
          {weeklyPlan.days.map((dayData, idx) => {
            const dayColor = getDayColor(dayData.day_name);
            const meal = dayData.meals?.[0];
            
            // Calculate date
            const startDate = new Date(weeklyPlan.start_date);
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + idx);
            const dateString = `${dayDate.getDate()}/${dayDate.getMonth() + 1}`;
            
            return (
              <div key={dayData.day} className="bg-white rounded-xl shadow-sm overflow-hidden border-2" style={{ borderColor: dayColor.border }}>
                <div className="py-2 px-1 text-center font-bold text-sm" style={{ backgroundColor: dayColor.bg, color: dayColor.border }}>
                  <div>{getDanishDayName(dayData.day_name)}</div>
                  <div className="text-xs opacity-75">{dateString}</div>
                </div>
                
                <div className="divide-y divide-slate-100">
                  {meal ? (
                    <div className="p-3">
                      <span className="text-xs text-slate-400 block mb-1">Aftensmad</span>
                      <span className="text-sm font-medium text-emerald-600 block">
                        {meal.recipe_name}
                      </span>
                      <span className="text-xs text-slate-400 mt-1 block">Klik for opskrift →</span>
                    </div>
                  ) : (
                    <div className="p-3">
                      <span className="text-xs text-slate-400 block">Ingen ret planlagt</span>
                    </div>
                  )}
                  <div className="p-2 bg-slate-50">
                    <span className="text-xs font-bold" style={{ color: dayColor.border }}>
                      {dayData.day_total} kr
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-day ingredients */}
        {groceryData.multiDay.length > 0 && (
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">♻️</span>
              <h3 className="text-lg font-bold text-amber-800">Disse ingredienser bruges på flere dage</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {groceryData.multiDay.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-amber-300 text-amber-700 rounded-full text-sm font-medium">
                  {item.name} → {item.days.length} dage
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Grocery List */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Indkøbsliste</h2>
            <p className="text-sm text-slate-500 mt-1">Klik for at krydse af</p>
          </div>
          
          {Object.entries(groceryData.categorized).map(([category, items]) => {
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
                  {items.map((item, idx) => {
                    // Get colors for each day this ingredient is used
                    const dayColors = item.days.map(d => getDayColor(d));
                    
                    return (
                    <label 
                      key={idx} 
                      className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all hover:shadow-md ${item.days.length > 1 ? 'bg-amber-50 border border-amber-200' : 'bg-slate-50'}`}
                    >
                      <input type="checkbox" className="w-6 h-6 rounded-lg border-2 border-slate-300 text-emerald-500 focus:ring-emerald-500" />
                      {/* Day color dots */}
                      <div className="flex gap-1 flex-shrink-0">
                        {dayColors.map((color, cIdx) => (
                          <span key={cIdx} className="w-3 h-3 rounded-full" style={{ backgroundColor: color.color }}></span>
                        ))}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${item.days.length > 1 ? 'text-amber-700' : 'text-slate-900'}`}>
                            {item.name}
                          </span>
                          {item.days.length > 1 && (
                            <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
                              {item.days.length} dage
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-500">{item.quantity} {item.unit} • {item.store}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">{item.price.toFixed(2)} kr</div>
                      </div>
                    </label>
                    )})}
                </div>
              </div>
            );
          })}

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-slate-900">I alt:</span>
            <span className="text-2xl font-bold text-emerald-600">{groceryData.total.toFixed(2)} kr</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg text-lg">
            Generér indkøbsliste
          </button>
        </div>
      </main>
    </div>
  );
}
