"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const countries = [
  "United Kingdom",
  "United States",
  "Nigeria",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "UAE",
  "South Africa",
  "Other",
];

const companyTypes = [
  "Startup",
  "SaaS / Tech",
  "Creative Agency",
  "E-commerce",
  "Healthcare",
  "Fintech",
  "Education",
  "Content Creator",
  "Freelancer",
  "Other",
];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        companyType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact-form" className="relative w-full pb-16">
      {/* Sharp 'Neon' Backlight - Synchronized with Tab 3D Perspective */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 0.35,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-4 -inset-x-1.5 h-[75%] bg-primary-500 blur-[25px] rounded-[35px] pointer-events-none"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 0.2,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-6 -inset-x-1 h-[70%] bg-primary-400 blur-[15px] rounded-[32px] pointer-events-none"
      />

      {/* Main Container (The Tab Frame) - Straight Animation */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "center bottom" }}
        className="relative w-full rounded-[32px] p-2 md:p-3 border border-gray-800 bg-black shadow-[0_0_100px_rgba(234,116,54,0.3)] group"
      >
        {/* Inner Border Container */}
        <div className="relative w-full h-full rounded-3xl border border-gray-800 bg-[#050505] overflow-hidden shadow-[inset_0_0_40px_rgba(234,116,54,0.15)]">
          {/* Border Bloom - perfectly inner-aligned */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-20" />

          {/* Form body */}
          <form onSubmit={handleSubmit} className="relative z-30 p-8 md:p-12">
            {/* Row 1: First + Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  First name<span className="text-primary-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  required
                  className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Last Name<span className="text-primary-400">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  required
                  className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
            </div>

            {/* Row 2: Email full width */}
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                How can we reach you?<span className="text-primary-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                required
                className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 transition-all duration-200"
              />
            </div>

            {/* Row 3: Country + Company Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Where Are you from?<span className="text-primary-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-gray-400 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select your country...
                    </option>
                    {countries.map((c) => (
                      <option key={c} value={c} className="bg-black text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  What's the type of your company?
                  <span className="text-primary-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="companyType"
                    value={form.companyType}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-gray-400 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    {companyTypes.map((t) => (
                      <option key={t} value={t} className="bg-black text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-2">
                Message<span className="text-primary-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
                rows={5}
                className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit — full width purple button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.01 }}
              whileTap={{ scale: isLoading ? 1 : 0.99 }}
              className="relative w-full py-4 rounded-xl bg-gradient-to-b from-primary-500 to-primary-700 text-white font-semibold text-base tracking-wide border border-white/20 shadow-[0_0_32px_rgba(234,116,54,0.4)] hover:shadow-[0_0_48px_rgba(234,116,54,0.6)] transition-all duration-300 overflow-hidden after:absolute after:inset-0 after:border-t after:border-white/40 after:rounded-[inherit] after:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Submit Now"}
            </motion.button>

            {status === "success" && (
              <p className="mt-4 text-center text-sm text-green-400 font-medium">
                ✓ Message sent! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-400 font-medium">
                ✕ Something went wrong. Please try again.
              </p>
            )}
          </form>

          {/* Subtle Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-white/[0.01] pointer-events-none z-20" />
        </div>
      </motion.div>
    </div>
  );
}
