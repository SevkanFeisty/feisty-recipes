import Link from "next/link";

export const metadata = {
  title: "Feisty - Danske Opskrifter",
  description: "Klassiske danske opskrifter til hele familien. Spar tid og penge med smarte madplaner.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop" 
            alt="Delicious Danish food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-4">
              ✨ Danske Opskrifter
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Lækker mad, <br/>
              <span className="text-emerald-400">hver dag.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Klassiske danske opskrifter til hele familien. Planlæg dine måltider, 
              spar penge, og undgå madspild med smarte madplaner.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/opskrifter" 
                className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30"
              >
                Se opskrifter
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/madplan" 
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20"
              >
                Opret madplan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Smart Madplan</h3>
              <p className="mt-2 text-slate-600">Planlæg ugens måltider på forhånd og slip for "hvad skal vi have?"</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛒</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Auto Indkøbsliste</h3>
              <p className="mt-2 text-slate-600">Få en komplet indkøbsliste baseret på din madplan</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Mindre Madspild</h3>
              <p className="mt-2 text-slate-600">Brug rester smart og undgå at smide mad ud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Populære Opskrifter</h2>
            <p className="mt-2 text-slate-600">Vores mest elskede klassiske danske retter</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/opskrifter/${recipe.id}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
          <h2 className="text-3xl font-bold text-white">Klar til at komme i gang?</h2>
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
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-xl font-bold text-white">Feisty</span>
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
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=450&fit=crop",
  },
  {
    id: "rugbrod",
    title: "Rugbrød",
    time: "90 min",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=450&fit=crop",
  },
  {
    id: "risalamande",
    title: "Risalamande",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=450&fit=crop",
  },
];
