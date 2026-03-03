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

// Recipe data with full details + normalized ingredients for grocery list
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
      "2 spsk olivenolie",
      "1 tsk gurkemeje",
      "400 g ris",
      "Salt og peber"
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
      "1 rød peberfrugt",
      "1 broccolibuket",
      "100 g parmesanost",
      "3 fed hvidløg",
      "3 spsk olivenolie",
      "Frisk basilikum",
      "Salt og peber"
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
      "240 g kikærter (dåse)",
      "1 avocado",
      "1 rødløg",
      "2 tomater",
      "1 håndfuld cilantro",
      "1 lime",
      "1 tsk spidskommen",
      "1 tsk paprika",
      "Salt og peber"
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
      "1 tsk gurkemeje",
      "2 laurbærblade",
      "2 spsk olivenolie",
      "Cremefraiche",
      "Frisk persille"
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
      "1 pose blandet salat",
      "1 agurk",
      "2 tomater",
      "1 rødløg",
      "4 pitabrød",
      "150 g tzatziki",
      "Olivenolie",
      "Frisk mynte"
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

// Generate grocery list from all recipes
function generateGroceryList(recipes) {
  const groceryMap = new Map();
  
  // Ingredients that can be reused across days (leftovers)
  const reusableItems = ['kikærter', 'løg', 'hvidløg', 'olivenolie', 'salt', 'peber', 'ris'];
  
  // Track which days each ingredient appears in
  const ingredientDays = new Map();
  
  Object.entries(recipes).forEach(([recipeId, recipe]) => {
    recipe.ingredients.forEach(ing => {
      // Normalize ingredient name (remove quantities, lowercase)
      const normalizedName = ing.toLowerCase()
        .replace(/\d+[gmlkdl]?\s*/g, '')
        .replace(/dåse|pose|buket|fed|stk|håndfuld/g, '')
        .trim();
      
      // Find base ingredient name
      const baseName = normalizedName.split(' ').slice(-2).join(' ');
      
      if (!ingredientDays.has(baseName)) {
        ingredientDays.set(baseName, []);
      }
      ingredientDays.get(baseName).push({ recipe: recipe.title, day: getDanishDayForRecipe(recipeId) });
      
      if (!groceryMap.has(baseName)) {
        groceryMap.set(baseName, {
          original: ing,
          baseName,
          days: [],
          recipes: [],
          isReusable: reusableItems.some(item => baseName.includes(item))
        });
      }
      groceryMap.get(baseName).days.push(getDanishDayForRecipe(recipeId));
      groceryMap.get(baseName).recipes.push(recipe.title);
    });
  });
  
  return Array.from(groceryMap.values()).sort((a, b) => {
    // Put reusable/leftover items first
    if (a.isReusable && !b.isReusable) return -1;
    if (!a.isReusable && b.isReusable) return 1;
    return a.baseName.localeCompare(b.baseName);
  });
}

function getDanishDayForRecipe(recipeId) {
  const dayMap = {
    'veggie-curry': 'Mandag',
    'pasta-primavera': 'Tirsdag',
    'veggie-tacos': 'Onsdag',
    'lentil-soup': 'Torsdag',
    'falafel-bowl': 'Fredag'
  };
  return dayMap[recipeId] || 'Ukendt';
}

// Full plan data
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
  ]
};

export default function MadplanPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(samplePlan);
  
  // Generate grocery list from actual recipes
  const groceryList = generateGroceryList(recipesData);

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
          <button onClick={() => setWeekOffset(weekOffset - 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50">←</button>
          <span className="text-lg font-semibold text-slate-900 min-w-[150px] text-center">
            {weekOffset === 0 ? "Denne uge" : weekOffset === 1 ? "Næste uge" : `${weekOffset} uger frem`}
          </span>
          <button onClick={() => setWeekOffset(weekOffset + 1)} className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50">→</button>
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

        {/* Grocery List - FROM ACTUAL RECIPES */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Indkøbsliste</h2>
          <p className="text-sm text-slate-500 mb-6">Baseret på alle opskrifter i denne uges madplan</p>
          
          {/* Leftover/Reusable highlight */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-amber-600">♻️</span>
              <span className="font-semibold text-amber-800">GenbrugeLse</span>
            </div>
            <p className="text-sm text-amber-700">
              Disse ingredienser kan købes i større mængder og bruges på tværs af flere dage - spar penge og undgå madspild!
            </p>
          </div>

          <div className="space-y-6">
            {groceryList.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-xl ${item.isReusable ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'}`}>
                <div className="flex items-start gap-3">
                  {/* Leftover indicator */}
                  {item.isReusable && (
                    <span className="text-lg" title="Kan genbruges">♻️</span>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${item.isReusable ? 'text-emerald-700' : 'text-slate-900'}`}>
                        {item.original}
                      </span>
                      {item.isReusable && (
                        <span className="text-xs bg-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">
                          Genbrug
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Bruges på: {item.days.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex gap-6">
              <span className="font-bold text-slate-900">Total ingredienser: {groceryList.length}</span>
              <span className="font-bold text-emerald-600">Estimeret pris: ~{selectedPlan.total_cost_dkk} kr</span>
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
