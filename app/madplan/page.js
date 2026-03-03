"use client";

import { useState } from "react";
import Link from "next/link";

export default function MadplanPage() {
  const days = [
    { name: 'Mandag', color: '#3B82F6', bg: 'bg-blue-500' },
    { name: 'Tirsdag', color: '#10B981', bg: 'bg-emerald-500' },
    { name: 'Onsdag', color: '#F59E0B', bg: 'bg-amber-500' },
    { name: 'Torsdag', color: '#EF4444', bg: 'bg-red-500' },
    { name: 'Fredag', color: '#8B5CF6', bg: 'bg-violet-500' },
    { name: 'Lørdag', color: '#EC4899', bg: 'bg-pink-500' },
    { name: 'Søndag', color: '#06B6D4', bg: 'bg-cyan-500' },
  ];
  const meals = ['Morgenmad', 'Frokost', 'Aftensmad'];
  
  const [weekOffset, setWeekOffset] = useState(0);
  const [mealPlan, setMealPlan] = useState({
    'Mandag-Aftensmad': { id: "frikadeller", title: "Frikadeller", category: "Hovedret", ingredients: ['hakket svinekød', 'løg', 'æg', 'mel', 'mælk', 'smør'] },
    'Tirsdag-Aftensmad': { id: "braendende-kaerlighed", title: "Brændende Kærlighed", category: "Hovedret", ingredients: ['kartofler', 'bacon', 'løg', 'smør'] },
    'Onsdag-Aftensmad': { id: "tarteletter", title: "Tarteletter", category: "Hovedret", ingredients: ['kylling', 'asparges', 'mel', 'mælk', 'smør'] },
  });

  // Collect all ingredients with their days
  const [groceryList, setGroceryList] = useState([
    { name: 'Hakket svinekød', days: ['Mandag'], category: 'Kød' },
    { name: 'Løg', days: ['Mandag', 'Tirsdag', 'Onsdag'], category: 'Grøntsager' },
    { name: 'Æg', days: ['Mandag'], category: 'Mejeri' },
    { name: 'Mel', days: ['Mandag', 'Onsdag'], category: 'Tørvarer' },
    { name: 'Mælk', days: ['Mandag', 'Onsdag'], category: 'Mejeri' },
    { name: 'Smør', days: ['Mandag', 'Tirsdag', 'Onsdag'], category: 'Mejeri' },
    { name: 'Kartofler', days: ['Tirsdag'], category: 'Grøntsager' },
    { name: 'Bacon', days: ['Tirsdag'], category: 'Kød' },
    { name: 'Kylling', days: ['Onsdag'], category: 'Kød' },
    { name: 'Asparges', days: ['Onsdag'], category: 'Grøntsager' },
  ]);

  const getWeekLabel = (offset) => {
    if (offset === 0) return "Denne uge";
    if (offset === 1) return "Næste uge";
    return `${offset} uger frem`;
  };

  const getDayColor = (dayName) => {
    const day = days.find(d => d.name === dayName);
    return day ? day.color : '#94A3B8';
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
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
          {days.map((day) => (
            <div key={day.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Day Header */}
              <div className={`${day.bg} text-white py-2 text-center`}>
                <span className="font-semibold text-sm">{day.name}</span>
              </div>
              
              {/* Meals */}
              <div className="divide-y divide-slate-100">
                {meals.map((meal) => {
                  const mealKey = `${day.name}-${meal}`;
                  const plannedMeal = mealPlan[mealKey];
                  
                  return (
                    <div key={meal} className="p-2 hover:bg-slate-50 transition-colors min-h-[60px]">
                      <span className="block text-[10px] text-slate-400 mb-1">{meal}</span>
                      {plannedMeal ? (
                        <Link 
                          href={`/opskrifter/${plannedMeal.id}`}
                          className="text-xs font-medium text-slate-700 hover:text-emerald-600 block"
                        >
                          {plannedMeal.title}
                        </Link>
                      ) : (
                        <button className="text-xs text-emerald-500 hover:text-emerald-600">
                          + Tilføj
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Grocery List with Color Coding */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Indkøbsliste</h2>
            <div className="flex gap-2">
              {days.map((day) => (
                <div key={day.name} className="flex items-center gap-1">
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: day.color }}
                    title={day.name}
                  />
                  <span className="text-xs text-slate-500">{day.name.slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Group by category */}
          {['Kød', 'Mejeri', 'Grøntsager', 'Tørvarer'].map((category) => {
            const items = groceryList.filter(item => item.category === category);
            if (items.length === 0) return null;
            
            return (
              <div key={category} className="mb-6 last:mb-0">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {items.map((item) => (
                    <div 
                      key={item.name} 
                      className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg"
                    >
                      {/* Colored dots for each day */}
                      <div className="flex gap-1 flex-shrink-0">
                        {days.map((day) => (
                          item.days.includes(day.name) ? (
                            <span 
                              key={day.name}
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: day.color }}
                              title={day.name}
                            />
                          ) : null
                        ))}
                      </div>
                      <span className="text-sm text-slate-700 truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Summary */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-500">I alt:</span>
                <span className="font-semibold text-slate-900">{groceryList.length} varer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Estimeret:</span>
                <span className="font-semibold text-emerald-600">~350 kr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
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
      </main>
    </div>
  );
}
