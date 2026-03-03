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

// Recipe data with full details
const recipesData = {
  "veggie-curry": {
    title: "Veggie Curry",
    subtitle: "Krydret grøntsagscurry med kokosmælk",
    description: "En lækker og mættende vegetarisk curry med masser af grøntsager i en cremet kokossovs.",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e8254?w=800&h=600&fit=crop",
    ingredients: [
      "400 ml kokosmælk",
      "240 g kikærter (dåse)",
      "1 broccolibuket",
      "1 dl grønne ærter",
      "2 spsk karrypasta",
      "1 løg",
      "2 fed hvidløg",
      "Ris til servering"
    ],
    instructions: [
      "Hak løg og hvidløg fint.",
      "Sauter løg i olie til gylden.",
      "Tilsæt karrypasta og hvidløg.",
      "Tilsæt kokosmælk og kikærter.",
      "Tilsæt broccoli og ærter.",
      "Lad simre i 15 minutter.",
      "Server med ris."
    ]
  },
  "pasta-primavera": {
    title: "Pasta Primavera",
    subtitle: "Pastaret med friske grøntsager",
    description: "En klassisk italiensk pastaret med sæsonens grøntsager og parmesan.",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop",
    ingredients: [
      "500 g pasta",
      "400 g hakkede tomater",
      "2 squash",
      "1 peberfrugt",
      "1 broccolibuket",
      "100 g parmesanost",
      "3 fed hvidløg",
      "Olivenolie"
    ],
    instructions: [
      "Kog pasta efter anvisning.",
      "Sauter hvidløg i olie.",
      "Tilsæt grøntsager og steg i 5 min.",
      "Tilsæt tomater og lad simre.",
      "Bland med pasta.",
      "Top med parmesan."
    ]
  },
  "veggie-tacos": {
    title: "Veggie Tacos",
    subtitle: "Mexicanske tacos med grøntsager",
    description: "Farverige tacos med krydrede grøntsager, majs og kikærter.",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop",
    ingredients: [
      "8 majs-tortillas",
      "285 g majs (dåse)",
      "240 g kikærter",
      "1 avocado",
      "1 rødløg",
      "2 tomater",
      "Cilantro",
      "Lime"
    ],
    instructions: [
      "Skær grøntsager i tern.",
      "Varm kikærter og majs.",
      "Lav guacamole af avocado.",
      "Varm tortillas.",
      "Samle tacos med grøntsager.",
      "Top med koriander og lime."
    ]
  },
  "lentil-soup": {
    title: "Linsesuppe",
    subtitle: "Nærende linsesuppe med grøntsager",
    description: "En varmende og sund suppe med røde linser og krydderier.",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
    ingredients: [
      "300 g røde linser",
      "3 gulerødder",
      "2 porrer",
      "1 løg",
      "3 fed hvidløg",
      "1 liter grøntsagsbouillon",
      "1 tsk spidskommen",
      "Cremefraiche"
    ],
    instructions: [
      "Hak grøntsager.",
      "Sauter løg og hvidløg.",
      "Tilsæt gulerødder og porrer.",
      "Tilsæt linser og bouillon.",
      "Krydre med spidskommen.",
      "Lad koge i 25 min.",
      "Server med cremefraiche."
    ]
  },
  "falafel-bowl": {
    title: "Falafel Bowl",
    subtitle: "Proteinrig bowl med falafel og hummus",
    description: "En mættende bowl med sprøde falafel, hummus og frisk salat.",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    ingredients: [
      "300 g falafel",
      "250 g hummus",
      "1 pose salatmix",
      "1 agurk",
      "2 tomater",
      "Pitabrød",
      "Tzatziki"
    ],
    instructions: [
      "Bag falafel efter anvisning.",
      "Skær agurk og tomater.",
      "Anret salat i bunden.",
      "Tilsæt falafel og hummus.",
      "Top med grøntsager.",
      "Servér med pitabrød."
    ]
  }
};

// Full plan data from Anna-Lysa's API
const samplePlan = {
  plan_id: "vegetarian-5day",
  plan_name: "Premium Vegetarian",
  score: 92,
  total_cost_dkk: 189,
  supermarkets: ["REMA 1000"],
  dietary_tags: ["vegetarian"],
  days: [
    { day: 1, day_name: "Monday", recipe_id: "veggie-curry", day_total: 44 },
    { day: 2, day_name: "Tuesday", recipe_id: "pasta-primavera", day_total: 59 },
    { day: 3, day_name: "Wednesday", recipe_id: "veggie-tacos", day_total: 26 },
    { day: 4, day_name: "Thursday", recipe_id: "lentil-soup", day_total: 33 },
    { day: 5, day_name: "Friday", recipe_id: "falafel-bowl", day_total: 36 }
  ],
  grocery_list: {
    "Monday": [
      { name: "Kokosmælk", quantity: "400", unit: "ml", price: 8.95 },
      { name: "Kikærter", quantity: "240", unit: "g", price: 7.86 },
      { name: "Broccoli", quantity: "1", unit: "stk", price: 15 },
      { name: "Ris", quantity: "1", unit: "kg", price: 12 }
    ],
    "Tuesday": [
      { name: "Pasta", quantity: "500", unit: "g", price: 7.66 },
      { name: "Hakkede tomater", quantity: "400", unit: "g", price: 6.37 },
      { name: "Grøntsager", quantity: "1", unit: "pose", price: 25 },
      { name: "Ost", quantity: "200", unit: "g", price: 20 }
    ],
    "Wednesday": [
      { name: "Majs", quantity: "285", unit: "g", price: 7.91 },
      { name: "Agurk", quantity: "1", unit: "stk", price: 10 },
      { name: "Rød peber", quantity: "1", unit: "stk", price: 8.50 }
    ],
    "Thursday": [
      { name: "Linser", quantity: "300", unit: "g", price: 12 },
      { name: "Gulerødder", quantity: "1", unit: "kg", price: 5 },
      { name: "Porrer", quantity: "1", unit: "stk", price: 6.50 }
    ],
    "Friday": [
      { name: "Falafel", quantity: "300", unit: "g", price: 18 },
      { name: "Hummus", quantity: "250", unit: "g", price: 15 },
      { name: "Salatmix", quantity: "1", unit: "pose", price: 12 }
    ]
  },
  leftovers: [
    { from: "Monday", to: "Wednesday", item: "Kikærter" },
    { from: "Monday", to: "Friday", item: "Ris" }
  ]
};

export default function MadplanPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(samplePlan);

  const getDanishDay = (dayName) => {
    const day = days.find(d => d.day_en === dayName);
    return day ? day.name : dayName;
  };

  const getDayColor = (dayName) => {
    const day = days.find(d => d.day_en === dayName);
    return day ? day : days[0];
  };

  const leftoverSavings = selectedPlan.leftovers ? selectedPlan.leftovers.length * 8 : 0;

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
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">♻️</span>
              <span className="font-bold text-amber-600">-{leftoverSavings} kr</span>
            </div>
          </div>
          <div className="flex gap-2">
            {selectedPlan.dietary_tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setWeekOffset(weekOffset - 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">←</button>
          <span className="text-lg font-semibold text-slate-900 min-w-[150px] text-center">
            {weekOffset === 0 ? "Denne uge" : weekOffset === 1 ? "Næste uge" : `${weekOffset} uger frem`}
          </span>
          <button onClick={() => setWeekOffset(weekOffset + 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600">→</button>
        </div>

        {/* Week Grid - CLICKABLE RECIPES */}
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

        {/* Leftover Chain */}
        {selectedPlan.leftovers && selectedPlan.leftovers.length > 0 && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">♻️</span> Sådan genbruger vi rester
            </h2>
            <div className="space-y-2">
              {selectedPlan.leftovers.map((leftover, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">{getDanishDay(leftover.from)}</span>
                  <span className="text-slate-600">→</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">{leftover.item}</span>
                  <span className="text-slate-600">→</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">{getDanishDay(leftover.to)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grocery List */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Indkøbsliste</h2>
          
          {days.map((day) => {
            const dayColor = getDayColor(day.day_en);
            const dayItems = selectedPlan.grocery_list[day.day_en];
            
            return (
              <div key={day.day_en} className="mb-6">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: dayColor.border }}>
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dayColor.color }}></span>
                  {day.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {dayItems && dayItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dayColor.color }}></span>
                      <span className="text-xs text-slate-700 truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex gap-6">
              <span className="font-bold text-slate-900">Total: {selectedPlan.total_cost_dkk} kr</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors shadow-lg text-lg">
            Generér indkøbsliste
          </button>
        </div>
      </main>
    </div>
  );
}
