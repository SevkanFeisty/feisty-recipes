import { auth } from "@/auth"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function ProfilPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }

  // Get current week
  const now = new Date()
  const weekNum = getWeekNumber(now)
  const year = now.getFullYear()
  const targetWeekString = `${year}-W${weekNum.toString().padStart(2, '0')}`

  // Weekly plan data (would come from API in real app)
  const weeklyPlan = {
    week_id: targetWeekString,
    plan_name: "Budget Champion",
    score: 82,
    total_cost_dkk: 285,
    supermarkets: ["REMA 1000"],
    days: [
      { day: 1, day_name: "Mandag", meals: [{ recipe_name: "Kyllingekød i Karry", type: "dinner" }], day_total: 57 },
      { day: 2, day_name: "Tirsdag", meals: [{ recipe_name: "Pasta med Kylling og Grønt", type: "dinner" }], day_total: 52 },
      { day: 3, day_name: "Onsdag", meals: [{ recipe_name: "Bolognese med Oksekød", type: "dinner" }], day_total: 48 },
      { day: 4, day_name: "Torsdag", meals: [{ recipe_name: "Lasagne med Bolognese", type: "dinner" }], day_total: 68 },
      { day: 5, day_name: "Fredag", meals: [{ recipe_name: "Æg og Gryde", type: "dinner" }], day_total: 60 },
    ]
  }

  // Grocery list
  const groceryItems = [
    { name: "Hakket kyllingekød", amount: "400g", price: 29, category: "Kød", checked: false },
    { name: "Hakkede tomater", amount: "2 dåser", price: 18, category: "Konserves", checked: false },
    { name: "Kokosmælk", amount: "1 pakke", price: 12, category: "Mejeri", checked: false },
    { name: "Pasta", amount: "500g", price: 8, category: "Tørvarer", checked: false },
    { name: "Hakket oksekød", amount: "400g", price: 25, category: "Kød", checked: false },
    { name: "Mozzarella", amount: "200g", price: 20, category: "Mejeri", checked: false },
    { name: "Æg", amount: "6 stk", price: 12, category: "Mejeri", checked: false },
    { name: "Havregryn", amount: "500g", price: 8, category: "Tørvarer", checked: false },
  ]

  const dayColors = {
    1: { bg: '#DBEAFE', border: '#3B82F6', color: '#93C5FD', label: 'Mandag' },
    2: { bg: '#DCFCE7', border: '#22C55E', color: '#86EFAC', label: 'Tirsdag' },
    3: { bg: '#FEF3C7', border: '#F59E0B', color: '#FCD34D', label: 'Onsdag' },
    4: { bg: '#FEE2E2', border: '#EF4444', color: '#FCA5A5', label: 'Torsdag' },
    5: { bg: '#EDE9FE', border: '#8B5CF6', color: '#C4B5FD', label: 'Fredag' },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Hej, {session.user?.name || 'Bruger'}!</h1>
                <p className="text-emerald-100 text-sm">Velkommen til dit Feisty dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Medlem siden</p>
                <p className="font-semibold text-slate-900">Gratis prøve</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Denne uge</p>
                <p className="font-semibold text-slate-900">{weeklyPlan.days.length} retter</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500">Total pris</p>
                <p className="font-semibold text-emerald-600">{weeklyPlan.total_cost_dkk} kr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Plan Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Denne uges madplan</h2>
                <p className="text-emerald-100 text-sm">{weeklyPlan.plan_name} - Uge {weekNum}</p>
              </div>
              <Link href="/madplan" className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full hover:bg-white/30 transition">
                Se alle →
              </Link>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-5 gap-3">
              {weeklyPlan.days.map((day) => {
                const color = dayColors[day.day]
                const meal = day.meals[0]
                return (
                  <Link 
                    key={day.day} 
                    href={`/opskrifter/${meal?.recipe_name ? slugify(meal.recipe_name) : ''}`}
                    className="group"
                  >
                    <div 
                      className="rounded-xl p-3 text-center border-2 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: color.bg, borderColor: color.border }}
                    >
                      <p className="text-xs font-bold mb-2" style={{ color: color.border }}>{color.label}</p>
                      {meal ? (
                        <p className="text-xs font-medium text-slate-700 line-clamp-2">{meal.recipe_name}</p>
                      ) : (
                        <p className="text-xs text-slate-400">Ingen ret</p>
                      )}
                      <p className="text-xs mt-2 font-semibold" style={{ color: color.border }}>{day.day_total} kr</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Grocery List Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Indkøbsliste</h2>
                <p className="text-teal-100 text-sm">{groceryItems.length} varer - {groceryItems.reduce((s,i)=>s+i.price,0)} kr</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/80 text-sm">REMA 1000</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-2">
              {groceryItems.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition"
                >
                  <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0 cursor-pointer hover:border-emerald-500"></div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.amount} • {item.category}</p>
                  </div>
                  <span className="font-semibold text-slate-700">{item.price} kr</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">I alt</span>
              <span className="text-xl font-bold text-emerald-600">{groceryItems.reduce((s,i)=>s+i.price,0)} kr</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
