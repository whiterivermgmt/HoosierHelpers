"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";

const CTABanner: React.FC = () => {
  return (
    <section className="bg-[#faf9f7] py-16">
      <Container>
        <div className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-center">

          {/* Background image */}
          <Image
            src="/home/hero4.jpg"
            alt="Hoosier Helpers Senior Care"
            fill
            className="object-cover object-center brightness-[0.4]"
          />

          {/* Red tint overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#7a1a13]/80 via-[#7a1a13]/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full px-10 sm:px-14 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              <p className="text-white/60 text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                <span className="text-[#e05545]">+</span> Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Your Journey Begins Here
              </h2>
              <div className="flex flex-row gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="px-7 py-3 rounded-full bg-[#C0392B] text-white font-semibold text-sm hover:bg-[#e04535] transition shadow-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#C0392B] transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Have questions or need assistance? Our dedicated team is here to
                help you every step of the way. Reach out today and let's start
                a conversation.
              </p>

              {/* Review badge */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["M", "J", "S", "R"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white bg-[#C0392B]/60 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                  <p className="text-white/60 text-xs">4.9 Google Review</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;