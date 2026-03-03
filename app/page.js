import Link from "next/link";

export const metadata = {
  title: "Feisty - Danske Opskrifter",
  description: "Klassiske danske opskrifter til hele familien. Spar tid og penge med smarte madplaner.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern with overlay */}
      <section className="relative h-[550px] lg:h-[650px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop" 
            alt="Delicious Danish food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/90 text-white text-sm font-semibold rounded-full mb-4 animate-fade-up">
              ✨ Danske Opskrifter
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-up delay-100 font-display">
              Lækker mad, <br/>
              <span className="text-emerald-400">hver dag.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-lg animate-fade-up delay-200">
              Klassiske danske opskrifter til hele familien. Planlæg dine måltider, 
              spar penge, og undgå madspild.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link 
                href="/opskrifter" 
                className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl"
              >
                Se opskrifter
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/madplan" 
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
              >
                Opret madplan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean cards */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-up">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Smart Madplan</h3>
              <p className="mt-2 text-slate-600">Planlæg ugens måltider på forhånd og slip for "hvad skal vi have?"</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-up delay-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Auto Indkøbsliste</h3>
              <p className="mt-2 text-slate-600">Få en komplet indkøbsliste baseret på din madplan</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-up delay-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mindre Madspild</h3>
              <p className="mt-2 text-slate-600">Brug rester smart og undgå at smide mad ud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes - Image focused */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900">Populære Opskrifter</h2>
            <p className="mt-2 text-slate-600">Vores mest elskede klassiske danske retter</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe, i) => (
              <Link key={recipe.id} href={`/opskrifter/${recipe.id}`} className="group animate-fade-up" style={{animationDelay: `${i * 0.1}s`}}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{recipe.time}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/opskrifter" 
              className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Se alle opskrifter 
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white">Klar til at komme i gang?</h2>
          <p className="mt-3 text-lg text-emerald-100 max-w-2xl mx-auto">
            Opret din gratis madplan i dag og få styr på ugens måltider
          </p>
          <div className="mt-8">
            <Link 
              href="/abonnement" 
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Vælg dit abonnement
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-600 to-teal-600 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/feisty-logo.png" alt="Feisty" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-sm">
              © 2026 Feisty. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const featuredRecipes = [
  {
    id: "frikadeller",
    title: "Frikadeller",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=450&fit=crop",
  },
  {
    id: "braendende-kaerlighed",
    title: "Brændende Kærlighed",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=450&fit=crop",
  },
  {
    id: "rugbrod",
    title: "Rugbrød",
    time: "90 min",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=450&fit=crop",
  },
  {
    id: "tarteletter",
    title: "Tarteletter",
    time: "60 min",
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&h=450&fit=crop",
  },
];
