'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeHeroRS: React.FC = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ── Hero ── */}
      <section className="relative w-full h-[480px] md:h-[580px] lg:h-[680px] bg-gray-900 overflow-hidden flex items-center">

        <Image
          src="/home/hero.jpg"
          alt="Hoosier Helpers Senior Care"
          fill
          className="object-cover object-center brightness-[0.45]"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#7a1a13]/85 via-[#7a1a13]/40 to-transparent pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 w-full px-6 sm:px-14 lg:px-32 xl:px-40 max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/70 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"
          >
            <span className="text-[#e05545]">+</span> Hoosier Helpers Senior Care
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Compassionate Care<br />for Quality Lives
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-xs sm:text-sm text-white/75 max-w-sm leading-relaxed"
          >
            Trusted, heart-centered care so seniors can live safely and
            independently at home — serving Bedford, Bloomington &amp; surrounding areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 flex flex-row gap-3"
          >
            <Link
              href="/services"
              className="px-5 py-2.5 bg-[#C0392B] text-white font-semibold rounded-full shadow-lg hover:bg-[#e04535] transition transform hover:-translate-y-1 text-sm"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-[#C0392B] transition transform hover:-translate-y-1 text-sm"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-5 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {["M", "J", "S", "R"].map((letter, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white bg-[#C0392B]/60 flex items-center justify-center text-white text-[10px] font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="text-yellow-400 text-xs">★★★★★</div>
              <p className="text-white/60 text-[10px]">4.9 Google Review</p>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ── Stat Boxes ──
           Mobile: full-width row below hero
           Desktop: absolute pinned to bottom-left of hero
      ── */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-row w-full md:w-auto md:absolute md:-top-[72px] md:left-14 lg:left-32 xl:left-40 md:z-30 divide-x divide-white/20"
        >
          <div className="flex-1 md:flex-none bg-[#C0392B] px-6 py-4 md:min-w-[190px]">
            <div className="flex items-center gap-2 text-white/60 text-[10px] mb-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              Available 7 Days a Week
            </div>
            <p className="text-white font-bold text-sm">Always Here for You</p>
            <p className="text-white/60 text-[10px] mt-0.5">Committed to being there every day</p>
          </div>

          <div className="flex-1 md:flex-none bg-[#a02d20] px-6 py-4 md:min-w-[190px]">
            <div className="flex items-center gap-2 text-white/60 text-[10px] mb-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Trusted &amp; Local
            </div>
            <p className="text-white font-bold text-sm">Certified Caregivers</p>
            <p className="text-white/60 text-[10px] mt-0.5">Background checked &amp; fully insured</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default HomeHeroRS;