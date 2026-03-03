export const metadata = {
  title: "Abonnement - Feisty",
  description: "Vælg dit Feisty abonnement",
};

export default function AbonnementPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="text-3xl font-bold">Vælg dit abonnement</h1>
          <p className="mt-2 text-emerald-100">Start med Feisty og spar tid og penge</p>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Standard */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Standard</h2>
            <p className="mt-2 text-3xl font-bold text-emerald-600">74 kr<span className="text-sm font-normal text-slate-500">/md</span></p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ 7-dages madplan</li>
              <li>✓ Indkøbsliste</li>
              <li>✓ Tilbud fra supermarkeder</li>
              <li>✓ Rester og genbrug</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800 transition">
              Vælg Standard
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
              Anbefalet
            </div>
            <h2 className="text-xl font-bold text-slate-900">Pro</h2>
            <p className="mt-2 text-3xl font-bold text-emerald-600">99 kr<span className="text-sm font-normal text-slate-500">/md</span></p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Alt i Standard</li>
              <li>✓ Kostbegrænsninger</li>
              <li>✓ Allergen-filtrering</li>
              <li>✓ Flere opskrifter</li>
            </ul>
            <button className="mt-6 w-full rounded-full bg-emerald-500 py-3 text-white font-semibold hover:bg-emerald-600 transition">
              Vælg Pro
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
