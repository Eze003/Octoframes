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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div id="contact-form" className="relative w-full pb-16">
      {/* Primary Color Light Around (Background Glow) - Focused on Top/Sides */}
      {/* Wide base glow for the form frame */}
      <div className="absolute -top-[10%] md:-top-[15%] -inset-x-10 md:-inset-x-20 h-[80%] bg-primary-600/50 blur-[140px] rounded-[60px] opacity-80 animate-pulse pointer-events-none" />
      <div className="absolute top-0 -inset-x-2 md:-inset-x-6 h-[40%] bg-primary-500/40 blur-[80px] rounded-[40px] opacity-90 pointer-events-none" />

      {/* Focused, narrower glow extending UP to the buttons ONLY in the center */}
      <div className="absolute -top-[20%] md:-top-[30%] left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] h-[50%] bg-primary-500/60 blur-[120px] rounded-full opacity-100 pointer-events-none" />

      {/* Flat Tab Frame — same border/shadow as VideoTab but no rotateX */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full rounded-[32px] p-2 md:p-3 border border-[#222] bg-black shadow-[0_0_100px_rgba(88,37,216,0.4)] group"
      >
        {/* Inner Border Container */}
        <div className="relative w-full h-full rounded-3xl border border-[#333] bg-[#050505] overflow-hidden shadow-[inset_0_0_40px_rgba(88,37,216,0.15)]">
          
          {/* Border Bloom - perfectly inner-aligned */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary-500/30 pointer-events-none z-20" />

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
              className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.06] transition-all duration-200"
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
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative w-full py-4 rounded-xl bg-gradient-to-b from-primary-500 to-primary-700 text-white font-semibold text-base tracking-wide border border-white/20 shadow-[0_0_32px_rgba(88,37,216,0.4)] hover:shadow-[0_0_48px_rgba(88,37,216,0.6)] transition-all duration-300 overflow-hidden after:absolute after:inset-0 after:border-t after:border-white/40 after:rounded-[inherit] after:pointer-events-none"
          >
            Submit Now
          </motion.button>
        </form>

        {/* Subtle Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-20" />
        <div className="absolute inset-0 bg-white/[0.01] pointer-events-none z-20" />
        
        </div>
      </motion.div>
    </div>
  );
}
