"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function RegisterForm() {
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
    
    // Create demo session
    if (typeof window !== 'undefined') {
      localStorage.setItem('feisty_session', JSON.stringify({
        user: { name: "Demo Bruger", email: "demo@feisty.dk" },
        plan: planParam,
        loggedIn: true
      }));
    }
    
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Fuldt navn</label>
              <input 
                type="text" 
                name="name" 
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition"
                placeholder="F.eks. Anders And"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition"
                placeholder="din@email.dk"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Adgangskode</label>
              <input 
                type="password" 
                name="password" 
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition disabled:opacity-50"
              >
                {isLoading ? "Opretter konto..." : "Opret konto og betal"}
              </button>
            </div>
          </form>
          
          <p className="text-center text-slate-500 text-sm mt-6">
            Allerede medlem? <Link href="/login" className="text-emerald-600 hover:underline">Log ind</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
