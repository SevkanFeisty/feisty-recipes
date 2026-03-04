import { Inter, Playfair_Display } from "next/font/google";
import { auth, signOut } from "@/auth"
import Link from "next/link"
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Feisty - Danske Opskrifter",
  description: "Klassiske danske opskrifter til hele familien. Spar tid og penge med smarte madplaner.",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  
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
          .font-display { font-family: 'Playfair Display', Georgia, serif; }
        `}</style>
      </head>
      <body className="antialiased min-h-screen bg-white">
        <TopNav session={session} />
        {children}
      </body>
    </html>
  );
}

async function TopNav({ session }) {
  const navItems = [
    { href: "/", label: "Forside" },
    { href: "/opskrifter", label: "Opskrifter" },
    { href: "/abonnement", label: "Abonnement" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center py-2">
          <Link href="/">
            <img src="/feisty-logo.png" alt="Feisty" className="h-14 w-auto rounded-lg" style={{background: 'linear-gradient(to right, #10b981, #14b8a6)'}} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors"
            >
              {item.label}
            </Link>
          ))}
          
          {session ? (
            <div className="flex items-center gap-2 ml-4">
              <Link
                href="/profil"
                className="px-4 py-2 text-sm font-medium bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
              >
                Min profil
              </Link>
              <form action={async () => {
                "use server"
                await signOut()
              }}>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Log ud
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 ml-4 text-sm font-medium bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Log ind
            </Link>
          )}
        </nav>
        
        <div className="flex items-center gap-2 md:hidden">
          {session ? (
            <Link href="/profil" className="p-2 text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          ) : (
            <Link href="/login" className="p-2 text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
