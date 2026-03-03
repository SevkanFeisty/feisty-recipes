export const metadata = {
  title: "Madplan - Feisty",
  description: "Planlæg dine måltider for ugen",
};

export default function MadplanPage() {
  const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
  const meals = ['Morgenmad', 'Frokost', 'Aftensmad'];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-3xl font-bold">Madplan</h1>
          <p className="mt-2 text-emerald-100">Planlæg ugens måltider</p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Week Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
          {days.map((day) => (
            <div key={day} className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3 text-center">{day}</h3>
              <div className="space-y-2">
                {meals.map((meal) => (
                  <div key={meal} className="p-2 bg-slate-50 rounded-lg text-center">
                    <span className="block text-xs text-slate-500">{meal}</span>
                    <button className="text-emerald-600 text-sm hover:text-emerald-700">
                      + Tilføj
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Generate List Button */}
        <div className="text-center">
          <button className="rounded-full bg-emerald-500 px-8 py-3 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg">
            Generér indkøbsliste
          </button>
        </div>
      </main>
    </div>
  );
}
