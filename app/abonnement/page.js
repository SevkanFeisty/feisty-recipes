import Link from "next/link";

export const metadata = {
  title: "Abonnement - Feisty",
  description: "Vælg dit Feisty abonnement og tilføj The Lunchbox til frokostplanlægning",
};

export default function AbonnementPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center text-white">
          <h1 className="font-display text-4xl font-bold">Vælg din plan</h1>
          <p className="mt-3 text-xl text-emerald-100 max-w-2xl mx-auto">
            Start med 2 uger for at prøve det af. Der er ingen binding.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Pricing Cards - Same as front page */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Solo - 24 kr */}
          <div className="group border-2 border-slate-200 rounded-3xl p-6 transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900">Solo</h3>
            <p className="text-slate-500 text-sm mt-2 mb-4">For dig der bor alene</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">24 kr</span>
              <span className="text-lg font-normal text-slate-500">/md</span>
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> 1 uges madplan
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Alle opskrifter
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Indkøbsliste
              </li>
            </ul>
            <Link href="/register?plan=solo" className="w-full block py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition text-center">
              Vælg Solo
            </Link>
            <label className="mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-emerald-50 transition">
              <input type="checkbox" className="w-5 h-5 rounded border-2 border-slate-300 text-emerald-500" />
              <span className="text-sm text-slate-600">The Lunchbox +14 kr</span>
            </label>
          </div>
          
          {/* Family - 39 kr */}
          <div className="group border-2 border-slate-200 rounded-3xl p-6 transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900">Family</h3>
            <p className="text-slate-500 text-sm mt-2 mb-4">For hele familien</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-slate-900">39 kr</span>
              <span className="text-lg font-normal text-slate-500">/md</span>
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Ubegrænset madplan
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Alle opskrifter
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Automatisk indkøbsliste
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="text-emerald-500">✓</span> Kostvaner
              </li>
            </ul>
            <Link href="/register?plan=family" className="w-full block py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition text-center">
              Vælg Family
            </Link>
            <label className="mt-4 flex items-center gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-emerald-50 transition">
              <input type="checkbox" className="w-5 h-5 rounded border-2 border-slate-300 text-emerald-500" />
              <span className="text-sm text-slate-600">The Lunchbox +14 kr</span>
            </label>
          </div>
          
          {/* Premium - 59 kr */}
          <div className="group bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-6 text-white transition-all hover:shadow-xl hover:shadow-emerald-300 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">MEST POPULÆR</span>
            </div>
            <h3 className="text-xl font-bold">Premium</h3>
            <p className="text-emerald-100 text-sm mt-2 mb-4">Skræddersyet løsning</p>
            <div className="mb-4">
              <span className="text-4xl font-bold">59 kr</span>
              <span className="text-emerald-100">/md</span>
            </div>
            <ul className="space-y-2 mb-6 flex-grow">
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <span className="text-emerald-200">✓</span> Alt i Family
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <span className="text-emerald-200">✓</span> Tilpasset til dig
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <span className="text-emerald-200">✓</span> Alle allergener
              </li>
              <li className="flex items-center gap-2 text-emerald-100 text-sm">
                <span className="text-emerald-200">✓</span> Særlige kostbehov
              </li>
            </ul>
            <Link href="/register?plan=premium" className="w-full block py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition text-center">
              Vælg Premium
            </Link>
            <label className="mt-4 flex items-center gap-3 p-3 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition">
              <input type="checkbox" className="w-5 h-5 rounded border-2 border-white/30 text-emerald-400" />
              <span className="text-sm text-white">The Lunchbox +14 kr</span>
            </label>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Ofte stillede spørgsmål</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Kan jeg opsige når som helst?</h3>
              <p className="text-slate-600 text-sm">Ja, du kan opsige dit abonnement når du vil. Der er ingen bindingsperiode.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Hvordan fungerer The Lunchbox?</h3>
              <p className="text-slate-600 text-sm">The Lunchbox tilføjer frokost til din ugentlige plan og genbruger ingredienser fra aftensmaden.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Kan jeg skifte plan senere?</h3>
              <p className="text-slate-600 text-sm">Ja, du kan opgradere eller nedgradere dit abonnement når som helst.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Hvilke supermarkeder dækker i?</h3>
              <p className="text-slate-600 text-sm">Vi dækker Netto, Føtex, Bilka, Rema 1000, Aldi og flere.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
