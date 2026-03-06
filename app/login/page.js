"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Udfyld venligst email og adgangskode");
      setIsLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Kunne ikke logge ind. Tjek dine oplysninger og prøv igen.");
      setIsLoading(false);
      return;
    }

    router.push("/profil");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <img 
              src="/feisty-logo.png" 
              alt="Feisty" 
              className="h-12 w-auto rounded"
              style={{ background: "linear-gradient(135deg, #10b981, #14b8a6)", padding: "4px" }}
            />
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mt-6">Velkommen tilbage</h1>
          <p className="text-slate-600 mt-2">Log ind for at se din madplan</p>
        </div>
 
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {error}
              </div>
            )}
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="din@email.dk"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Adgangskode
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition disabled:opacity-50"
            >
              {isLoading ? "Logger ind..." : "Log ind"}
            </button>
          </form>
 
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              Har du ikke en konto?{" "}
              <Link href="/abonnement" className="text-emerald-600 font-medium hover:underline">
                Opret konto
              </Link>
            </p>
          </div>
        </div>
 
        <p className="text-center text-slate-400 text-sm mt-6">
          Eller fortsæt som gæst til{" "}
          <Link href="/opskrifter" className="text-emerald-600 hover:underline">
            opskrifter
          </Link>
        </p>
      </div>
    </div>
  );
}
