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
          <h1 className="font-display text-4xl font-bold">Vælg dit abonnement</h1>
          <p className="mt-3 text-xl text-emerald-100 max-w-2xl mx-auto">
            Få en personlig madplan, der tilpasser sig din families behov. 
            Spar tid, penge og undgå madspild.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Plans */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Standard */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Feisty Standard</h2>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">49 kr/md</span>
            </div>
            <p className="text-slate-600 mb-4">Perfekt til dig der vil prøve Feisty af.</p>
            <p className="mt-2 text-4xl font-bold text-emerald-600">49 kr<span className="text-lg font-normal text-slate-500">/md</span></p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">7-dages madplan</strong>
                  <p className="text-sm">Tilpasset din husstandsstørrelse</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Automatisk indkøbsliste</strong>
                  <p className="text-sm">Baseret på ugens opskrifter</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Danske klassikere</strong>
                  <p className="text-sm">Frikadeller, rugbrød og mere</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Rester genbruges</strong>
                  <p className="text-sm">Mandagsragout → tirsdagslasagne</p>
                </div>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-full bg-slate-900 py-4 text-white font-semibold hover:bg-slate-800 transition">
              Start gratis
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-6 py-2 text-sm font-bold text-white shadow-lg">
              Mest populær
            </div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <h2 className="text-2xl font-bold text-slate-900">Feisty Pro</h2>
            </div>
            <p className="text-slate-600 mb-4">Fuld kontrol over din madplan med kosttilpasning.</p>
            <p className="mt-2 text-4xl font-bold text-emerald-600">74 kr<span className="text-lg font-normal text-slate-500">/md</span></p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Alt i Standard</strong>
                  <p className="text-sm">Inklusive alle basisfunktioner</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Kostbegrænsninger</strong>
                  <p className="text-sm">Vegetarisk, vegansk, keto, low-carb</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Allergen-filtrering</strong>
                  <p className="text-sm">Ingen gluten, laktose, nødder m.m.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Spar op til 40%</strong>
                  <p className="text-sm">På ugens indkøb med tilbud</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Prioriteret support</strong>
                  <p className="text-sm">Hurtig hjælp når du har brug for det</p>
                </div>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-full bg-emerald-500 py-4 text-white font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/30">
              Vælg Pro
            </button>
          </div>
        </div>

        {/* The Lunchbox Add-on */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <h3 className="text-2xl font-bold text-slate-900">The Lunchbox</h3>
                <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">Add-on</span>
              </div>
              <p className="text-slate-600 mb-4">
                Tilføj frokostplanlægning til din madplan. Feisty finder opskrifter 
                og tilbud, der passer til familiens madpakker – så du smider mindre ud 
                og sparer mere.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Ugentlige madpakke-opskrifter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Bruger overskud fra aftensmad
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Separat indkøbsliste til frokost
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Børnevenlige og voksenvenlige muligheder
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right lg:min-w-[200px]">
              <p className="text-3xl font-bold text-emerald-600">+25 kr<span className="text-lg font-normal text-slate-500">/md</span></p>
              <p className="text-sm text-slate-500 mb-4">Tillæg til hovedabonnement</p>
              <button className="w-full lg:w-auto px-6 py-3 rounded-full border-2 border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-500 hover:text-white transition">
                Tilføj The Lunchbox
              </button>
            </div>
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
              <p className="text-slate-600 text-sm">Vi dækker Netto, Føtex, Bilka, Rema 1000, Aldi og flere. Vælg dine foretrukne butikker i profilen.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
