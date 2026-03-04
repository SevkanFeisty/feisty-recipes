import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Feisty - Din smarte madplan",
  description: "Spar tid og penge med Feisty. Personlige madplaner, automatiske indkøbslister og lækre opskrifter.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/feisty-logo.png" 
              alt="Feisty" 
              className="h-10 w-auto rounded-lg"
              style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/opskrifter" className="text-slate-600 hover:text-emerald-600 font-medium transition">Opskrifter</Link>
            <Link href="/madplan" className="text-slate-600 hover:text-emerald-600 font-medium transition">Madplan</Link>
            <Link href="/profil" className="text-slate-600 hover:text-emerald-600 font-medium transition">Profil</Link>
          </div>
          <Link 
            href="/madplan" 
            className="px-5 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition"
          >
            Kom i gang
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
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
                  href="/madplan" 
                  className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition shadow-lg hover:shadow-xl"
                >
                  Se din madplan
                </Link>
                <Link 
                  href="/opskrifter" 
                  className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition"
                >
                  Browse opskrifter
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
                    <span className="text-2xl">📅</span>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Vælg din plan
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Start med 2 uger for at prøve det af. Der er ingen binding.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free */}
            <div className="border-2 border-slate-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900">30 dages prøveperiode</h3>
              <p className="text-slate-500 text-sm mt-2 mb-4">Proev det af</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">Gratis</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> 1 uges madplan
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Basale opskrifter
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Simpel indkøbsliste
                </li>
              </ul>
              <Link 
                href="/madplan" 
                className="block w-full py-3 text-center border-2 border-slate-200 text-slate-600 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition"
              >
                Proev det af
              </Link>
            </div>
            
            {/* Standard */}
            <div className="border-2 border-emerald-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-slate-900">Standard</h3>
              <p className="text-slate-500 text-sm mt-2 mb-4">For hele familien</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">49 kr</span>
                <span className="text-slate-500">/md</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Ubegranset madplan
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Alle opskrifter
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Automatisk indkøbsliste
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-emerald-500">✓</span> Kostvaner
                </li>
              </ul>
              <Link 
                href="/madplan" 
                className="block w-full py-3 text-center border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition"
              >
                Valg Standard
              </Link>
            </div>
            
            {/* Premium */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">BEDST VALG</span>
              </div>
              <h3 className="text-xl font-bold">Premium</h3>
              <p className="text-emerald-100 text-sm mt-2 mb-4">Skraddersyet losning</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">74 kr</span>
                <span className="text-emerald-100">/md</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-200">✓</span> Alt i Standard
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-200">✓</span> Tilpasset til dig
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-200">✓</span> Alle allergener
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-200">✓</span> Særlige kostbehov
                </li>
                <li className="flex items-center gap-2 text-emerald-200 text-sm">
                  <span className="text-emerald-200">+</span> The Lunchbox add-on: +19 kr/md
                </li>
              </ul>
              <Link 
                href="/madplan" 
                className="block w-full py-3 text-center bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition"
              >
                Kom i gang nu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/feisty-logo.png" 
                alt="Feisty" 
                className="h-8 w-auto rounded"
                style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
              />
              <span className="text-white font-bold">Feisty</span>
            </div>
            <div className="flex gap-8">
              <Link href="/opskrifter" className="text-slate-400 hover:text-white transition">Opskrifter</Link>
              <Link href="/madplan" className="text-slate-400 hover:text-white transition">Madplan</Link>
              <Link href="/profil" className="text-slate-400 hover:text-white transition">Profil</Link>
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
