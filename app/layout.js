import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import ClientNav from "./components/ClientNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Feisty - Danske Opskrifter",
  description: "Klassiske danske opskrifter til hele familien. Spar tid og penge med smarte madplaner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
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
        <ClientNav />
        {children}
      </body>
    </html>
  );
}
