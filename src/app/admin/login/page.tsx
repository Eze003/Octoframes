"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setLoading(true);
      localStorage.setItem("admin_authed", "true");
      router.push("/admin");
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(234,116,54,0.35),transparent)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md rounded-[32px] p-2 border border-[#222] bg-black shadow-[0_0_80px_rgba(234,116,54,0.4)]"
      >
        <div className="rounded-3xl border border-primary-500/30 bg-[#050505] shadow-[inset_0_0_40px_rgba(234,116,54,0.15)] p-10">
          <div className="flex flex-col items-center justify-center mb-10">
            <Image src="/logo.svg" alt="Octoframes Logo" width={160} height={160} className="w-40 h-40 object-contain" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-white/40 text-sm mb-8">
            Enter your password to access the dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="••••••••"
                autoFocus
                className={`w-full px-4 py-3.5 bg-white/[0.04] border rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:bg-white/[0.06] transition-all duration-200 ${
                  pwError
                    ? "border-red-500/70 animate-pulse"
                    : "border-white/[0.08] focus:border-primary-500/50"
                }`}
              />
              {pwError && (
                <p className="text-red-400 text-xs mt-1.5">
                  Incorrect password. Try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-3.5 rounded-md bg-gradient-to-b from-primary-500 to-primary-700 text-white font-semibold text-sm border border-white/20 shadow-[0_0_24px_rgba(234,116,54,0.4)] hover:shadow-[0_0_40px_rgba(234,116,54,0.6)] transition-all duration-300 disabled:opacity-60 overflow-hidden after:absolute after:inset-0 after:border-t after:border-white/30 after:rounded-[inherit] after:pointer-events-none"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
