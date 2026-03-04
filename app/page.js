import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Feisty - Din smarte madplan",
  description: "Spar tid og penge med Feisty. Personlige madplaner, automatiske indkøbslister og lækre opskrifter.",
};

export default function HomePage() {
  const features = [
    {
      icon: "📅",
      title: "Ugentlig Madplan",
      desc: "Få en skræddersyet madplan hver uge baseret på dine præferencer",
    },
    {
      icon: "🛒",
      title: "Auto Indkøbsliste",
      desc: "Automatiske indkøbslister med præcise mængder og priser",
    },
    {
      icon: "🥗",
      title: "Lækre Opskrifter",
      desc: "Adgang til hundredvis af opskrifter fra klassisk dansk til international",
    },
    {
      icon: "♻️",
      title: "Reducer Madspild",
      desc: "Smart planlægning der udnytter ingredienser på tværs af dage",
    },
  ];

  const stats = [
    { number: "50+", label: "Opskrifter" },
    { number: "4 uger", label: "Planlægning" },
    { number: "40%", label: "Spar tid" },
    { number: "0 kr", label: "Madspild" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            {/* Logo - LARGER */}
            <div className="mb-8">
              <img 
                src="/feisty-logo.png" 
                alt="Feisty" 
                className="h-32 w-auto mx-auto rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Din smarte madplan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
              Spar tid, penge og reducer madspild med personlige madplaner leveret til dig hver uge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/madplan"
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Se madplan →
              </Link>
              <Link 
                href="/opskrifter"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all border-2 border-white/30"
              >
                Browse opskrifter
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Hvordan Feisty virker
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-stone-50 to-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Kom i gang i 3 trin
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600 mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vælg dine præferencer</h3>
              <p className="text-slate-500">Fortæl os om dine kostvaner, allergier og familie</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600 mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Modtag din madplan</h3>
              <p className="text-slate-500">Hver mandag får du en komplet ugentlig plan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-600 mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Shop & kog</h3>
              <p className="text-slate-500">Med din automatiske indkøbsliste er det nemt</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klar til at smarte din madlavning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start med at se vores ugentlige madplan og indkøbsliste.
          </p>
          <Link 
            href="/madplan"
            className="inline-block px-10 py-5 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all shadow-2xl transform hover:-translate-y-1"
          >
            Se eksempel på madplan →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="/feisty-logo.png" 
                alt="Feisty" 
                className="h-10 w-auto rounded-lg"
                style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
              />
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
