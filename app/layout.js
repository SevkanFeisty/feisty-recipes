import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Feisty - Danske Opskrifter",
  description: "Klassiske danske opskrifter til hele familien. Fra frikadeller til drømmekage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <style>{`
          html { scroll-behavior: smooth; }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.6s ease-out forwards;
            opacity: 0;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .font-display { font-family: 'Playfair Display', Georgia, serif; }
        `}</style>
      </head>
      <body className="antialiased" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

function TopNav() {
  const navItems = [
    { href: "/", label: "Forside" },
    { href: "/opskrifter", label: "Opskrifter" },
    { href: "/madplan", label: "Madplan" },
    { href: "/abonnement", label: "Abonnement" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-emerald-600">
          <span className="text-2xl">🍽️</span> 
          <span>Feisty</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2 text-slate-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
