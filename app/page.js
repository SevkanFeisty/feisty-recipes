import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Feisty - Din smarte madplan",
  description: "Spar tid og penge med Feisty. Personlige madplaner, automatiske indkøbslister og lækre opskrifter.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Fresh og <span className="text-emerald-500">enkel</span> madplan
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg">
                Feisty giver dig skræddersyede madplaner hver uge. Bare følg planen, så handler du ind, og så er du klar til at lave mad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/abonnement" 
                  className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition shadow-lg hover:shadow-xl"
                >
                  Kom i gang
                </Link>
                <Link 
                  href="/opskrifter" 
                  className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition"
                >
                  Se opskrifter
                </Link>
              </div>
            </div>
            
            {/* Illustration placeholder - in production would be custom illustrations */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=800&fit=crop" 
                  alt="Fresh food" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Ugentlig plan</p>
                    <p className="font-bold text-slate-900">Klar til dig</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plan Selector - inspired by Årstiderne */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Find din perfekte madplan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Svar på et par spørgsmål, og vi finder den plan der passer bedst til dig
            </p>
          </div>

          {/* Plan Options Grid - like Årstiderne's box selection */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Budget */}
            <div className="bg-gradient-to-b from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-6 hover:shadow-xl transition cursor-pointer group">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Budget</h3>
              <p className="text-sm text-slate-600 mb-4">Danmarks billigste økologiske madplan</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-amber-600">42 kr</span>
                <span className="text-sm text-slate-500">pr. måltid</span>
              </div>
            </div>

            {/* Vegetar */}
            <div className="bg-gradient-to-b from-green-50 to-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-xl transition cursor-pointer group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vegetar</h3>
              <p className="text-sm text-slate-600 mb-4">Grønne måltider med kant</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-green-600">56 kr</span>
                <span className="text-sm text-slate-500">pr. måltid</span>
              </div>
            </div>

            {/* Family */}
            <div className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-xl transition cursor-pointer group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Familie</h3>
              <p className="text-sm text-slate-600 mb-4">Nemme måltider med smag for alle</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-blue-600">55 kr</span>
                <span className="text-sm text-slate-500">pr. måltid</span>
              </div>
            </div>

            {/* Low Carb */}
            <div className="bg-gradient-to-b from-rose-50 to-white border-2 border-rose-200 rounded-2xl p-6 hover:shadow-xl transition cursor-pointer group">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Light</h3>
              <p className="text-sm text-slate-600 mb-4">Lette måltider med få kalorier</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-rose-600">53 kr</span>
                <span className="text-sm text-slate-500">pr. måltid</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/abonnement" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition"
            >
              Vælg din plan
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Så nemt virker det
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Vælg", desc: "Vælg dine favoritretter og kostvaner" },
              { step: "2", title: "Vi planlægger", desc: "Vi sammensætter din ugentlige madplan" },
              { step: "3", title: "Indkøb", desc: "Få en automatisk indkøbsliste" },
              { step: "4", title: "Kog", desc: "Følg opskrifterne og nyd maden" },
              { step: "5", title: "Nyd", desc: "Spar tid og penge hver uge" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl font-bold text-emerald-600 mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "100+ opskrifter", 
                desc: "Fra klassisk dansk til internationale retter. Alt er testet og velsmagende.",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
              },
              { 
                title: "Automatisk indkøbsliste", 
                desc: "Vi laver listen for dig. Bare følge den i butikken og tjekke varerne af.",
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop"
              },
              { 
                title: "Tilpasset til dig", 
                desc: "Vegetarisk, allergier, familiestorrelse - vi tilpasser planen dine behov.",
                img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&h=400&fit=crop"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={feature.img} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Vælg din plan
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Start med 2 uger for at prøve det af. Der er ingen binding.
          </p>
          
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
        </div>
      </section>

      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/feisty-logo.png" 
                alt="Feisty" 
                className="h-8 w-auto rounded"
                style={{ background: "linear-gradient(135deg, #10b981, #14b8a6)" }}
              />
              <span className="text-white font-bold">Feisty</span>
            </div>
            <div className="flex gap-8">
              <Link href="/" className="text-slate-400 hover:text-white transition">Forside</Link>
              <Link href="/opskrifter" className="text-slate-400 hover:text-white transition">Opskrifter</Link>
              <Link href="/abonnement" className="text-slate-400 hover:text-white transition">Abonnement</Link>
              <Link href="/login" className="text-slate-400 hover:text-white transition">Log ind</Link>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 Feisty. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
