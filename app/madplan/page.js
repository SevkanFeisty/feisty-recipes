"use client";

import { useState } from "react";
import Link from "next/link";

export default function MadplanPage() {
  const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
  const meals = ['Morgenmad', 'Frokost', 'Aftensmad'];
  
  const [weekOffset, setWeekOffset] = useState(0);
  const [mealPlan, setMealPlan] = useState({});

  const sampleRecipes = [
    { id: "frikadeller", title: "Frikadeller", category: "Hovedret" },
    { id: "rugbrod", title: "Rugbrød", category: "Brød" },
    { id: "risalamande", title: "Risalamande", category: "Dessert" },
    { id: "braendende-kaerlighed", title: "Brændende Kærlighed", category: "Hovedret" },
  ];

  const getWeekLabel = (offset) => {
    if (offset === 0) return "Denne uge";
    if (offset === 1) return "Næste uge";
    return `${offset} uger frem`;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="font-display text-3xl font-bold">Madplan</h1>
          <p className="mt-2 text-emerald-100">Planlæg ugens måltider</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button 
            onClick={() => setWeekOffset(weekOffset - 1)}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50"
          >
            ←
          </button>
          <span className="text-lg font-semibold text-slate-900 min-w-[150px] text-center">
            {getWeekLabel(weekOffset)}
          </span>
          <button 
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50"
          >
            →
          </button>
        </div>

        {/* Week Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
          {days.map((day) => (
            <div key={day} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Day Header */}
              <div className="bg-emerald-500 text-white py-3 text-center">
                <span className="font-semibold">{day}</span>
              </div>
              
              {/* Meals */}
              <div className="divide-y divide-slate-100">
                {meals.map((meal) => {
                  const mealKey = `${day}-${meal}`;
                  const plannedMeal = mealPlan[mealKey];
                  
                  return (
                    <div key={meal} className="p-3 hover:bg-emerald-50 transition-colors">
                      <span className="block text-xs text-slate-400 mb-1">{meal}</span>
                      {plannedMeal ? (
                        <div className="flex items-center justify-between">
                          <Link 
                            href={`/opskrifter/${plannedMeal.id}`}
                            className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                          >
                            {plannedMeal.title}
                          </Link>
                          <button 
                            onClick={() => {
                              const newPlan = { ...mealPlan };
                              delete newPlan[mealKey];
                              setMealPlan(newPlan);
                            }}
                            className="text-slate-400 hover:text-red-500"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <button className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                          <span>+</span> Tilføj
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors shadow-lg">
            Generér indkøbsliste
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            Gem madplan
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
            Udskriv
          </button>
        </div>

        {/* Quick Add Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Hurtig tilføj</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sampleRecipes.map((recipe) => (
              <button
                key={recipe.id}
                onClick={() => {
                  const mealKey = "Mandag-Aftensmad";
                  setMealPlan({ ...mealPlan, [mealKey]: recipe });
                }}
                className="p-3 bg-white rounded-xl shadow-sm text-left hover:shadow-md transition-shadow"
              >
                <span className="block font-medium text-slate-900">{recipe.title}</span>
                <span className="text-xs text-slate-500">{recipe.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">21</div>
            <div className="text-sm text-slate-500">Måltider planlagt</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">~350 kr</div>
            <div className="text-sm text-slate-500">Estimeret pris</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">2</div>
            <div className="text-sm text-slate-500">Rester genbrugt</div>
          </div>
        </div>
      </main>
    </div>
  );
}
