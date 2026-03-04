"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "solo";
  
  const [isLoading, setIsLoading] = useState(false);
  
  const planNames = {
    solo: "Solo",
    family: "Family", 
    premium: "Premium"
  };
  
  const planPrices = {
    solo: "24 kr",
    family: "39 kr",
    premium: "59 kr"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to profile (in real app, would create user and process payment)
    router.push("/profil");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div 
              className="h-12 w-12 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
            >
              <span className="text-white font-bold text-xl">F</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Opret konto</h1>
          <p className="text-slate-600 mt-2">
            Du har valgt <span className="font-semibold text-emerald-600">{planNames[planParam]}</span> - {planPrices[planParam]}/md
          </p>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Fuldt navn
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Anders And"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="din@email.dk"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Adgangskode
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Antal personer i husstanden
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="1">1 person</option>
                <option value="2">2 personer</option>
                <option value="3">3 personer</option>
                <option value="4">4 personer</option>
                <option value="5">5+ personer</option>
              </select>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 text-emerald-500" />
                <span className="text-sm text-slate-600">
                  Jeg accepterer <Link href="#" className="text-emerald-600 hover:underline">handelsbetingelser</Link> og <Link href="#" className="text-emerald-600 hover:underline">privatlivspolitik</Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition disabled:opacity-50"
            >
              {isLoading ? "Opretter konto..." : "Opret konto og start"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Allerede medlem?{" "}
              <Link href="/login" className="text-emerald-600 font-medium hover:underline">
                Log ind
              </Link>
            </p>
          </div>
        </div>

        {/* Trust */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Gratis prøveperiode i 14 dage. Kan til enhver tid opsiges.
        </p>
      </div>
    </div>
  );
}
