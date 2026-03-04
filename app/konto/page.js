"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  // Demo user data
  const user = {
    name: "Anders And",
    email: "anders@example.dk",
    plan: "premium",
    planName: "Premium",
    price: "59 kr",
    household: 2,
    dietaryNeeds: "",
  };

  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: "",
    newPassword: "",
    dietaryNeeds: user.dietaryNeeds,
  });
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleDietarySubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMessage("Tak! Vi har modtaget dine kostbehov. Vi kontakter dig inden for 24 timer med din tilpassede madplan.");
    setSending(false);
  };

  const tabs = [
    { id: "profile", label: "Profil", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 100-14 7 7 0 000 14z" },
    { id: "subscription", label: "Abonnement", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { id: "payment", label: "Betaling", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
    { id: "dietary", label: "Kostbehov", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Min konto</h1>
              <p className="text-emerald-100 text-sm">Administrer din profil og abonnement</p>
            </div>
            <Link href="/profil" className="px-4 py-2 bg-white/20 text-white rounded-full text-sm hover:bg-white/30">
              ← Tilbage til dashboard
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id 
                  ? "bg-emerald-500 text-white" 
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Profiloplysninger</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Fuldt navn</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-medium text-slate-900 mb-4">Skift adgangskode</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nuværende adgangskode</label>
                    <input
                      type="password"
                      value={formData.currentPassword}
                      onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ny adgangskode</label>
                    <input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition">
                Gem ændringer
              </button>
            </form>
          </div>
        )}

        {/* Subscription Tab */}
        {activeTab === "subscription" && (
          <div className="space-y-6 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Nuværende abonnement</h2>
              
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm">Din plan</p>
                    <p className="text-2xl font-bold">{user.planName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{user.price}</p>
                    <p className="text-emerald-100 text-sm">/md</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Medlem siden</span>
                  <span className="text-slate-900">1. marts 2026</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">Næste betaling</span>
                  <span className="text-slate-900">1. april 2026</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Husstand</span>
                  <span className="text-slate-900">{user.household} personer</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4">Skift abonnement</h3>
              <div className="space-y-3">
                {[
                  { name: "Solo", price: "24 kr", active: user.plan === "solo" },
                  { name: "Family", price: "39 kr", active: user.plan === "family" },
                  { name: "Premium", price: "59 kr", active: user.plan === "premium" },
                ].map((p) => (
                  <button
                    key={p.name}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition ${
                      p.active 
                        ? "border-emerald-500 bg-emerald-50" 
                        : "border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    <span className="font-medium text-slate-900">{p.name}</span>
                    <span className="text-slate-600">{p.price}/md</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payment Tab */}
        {activeTab === "payment" && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Betaling</h2>
            
            <div className="border border-slate-200 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                  <svg className="w-8 h-5" viewBox="0 0 32 20" fill="none">
                    <rect width="32" height="20" rx="4" fill="#1A1F71"/>
                    <path d="M12 14L14 6H16L14 14" stroke="white" strokeWidth="1.5"/>
                    <path d="M20 6L17 14L20 11V6Z" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 6L11 14L8 11V6Z" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">•••• •••• •••• 4242</p>
                  <p className="text-sm text-slate-500">Udløber 12/28</p>
                </div>
                <button className="text-emerald-600 text-sm font-medium hover:underline">
                  Rediger
                </button>
              </div>
            </div>

            <button className="w-full py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-emerald-500 transition">
              Tilføj betalingskort
            </button>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <h3 className="font-medium text-slate-900 mb-3">Betalingsoversigt</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Premium</span>
                  <span className="text-slate-900">59 kr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">The Lunchbox</span>
                  <span className="text-slate-900">14 kr</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-100 font-medium">
                  <span className="text-slate-900">Total</span>
                  <span className="text-emerald-600">73 kr/md</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dietary Needs Tab - Premium only */}
        {activeTab === "dietary" && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl">
            {user.plan === "premium" ? (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Kostbehov</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fortæl os om dine kostbehov, allergier eller præferencer. Vi tilpasser din madplan derefter.
                </p>

                {message && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-emerald-700 text-sm">{message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleDietarySubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Dine kostbehov
                    </label>
                    <textarea
                      value={formData.dietaryNeeds}
                      onChange={(e) => setFormData({...formData, dietaryNeeds: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="F.eks.:
- Allergi mod nødder
- Foretrækker vegetarisk
- Kan ikke lide koriander
- Lavt kalorieindtag
- Glutenintolerance"
                    />
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Vigtigt:</strong> Vi læser alle indsendte kostbehov og kontakter dig personligt inden for 24 timer med en tilpasset løsning.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={sending || !formData.dietaryNeeds}
                    className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sender..." : "Send kostbehov"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Kun for Premium-medlemmer</h3>
                <p className="text-slate-500 mb-6">
                  Opgrader til Premium for at få personlige kostbehov tilpasset din madplan.
                </p>
                <Link
                  href="/abonnement"
                  className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition"
                >
                  Opgrader til Premium
                </Link>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
