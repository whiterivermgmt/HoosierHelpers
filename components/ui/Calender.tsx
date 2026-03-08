"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    text: "We start with a free consultation to understand your loved one's unique needs and preferences.",
  },
  {
    num: "02",
    title: "Personalized Care Plan",
    text: "Based on the consultation, we create a tailored care plan that matches their lifestyle and routine.",
  },
  {
    num: "03",
    title: "Ongoing Support",
    text: "Our caregivers provide consistent, compassionate care with regular check-ins and family updates.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative bg-[#7a1a13] py-24 overflow-hidden">

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* ── LEFT: Heading + bullets + image ── */}
          <div className="flex flex-col gap-7 lg:col-span-1">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-white/50 text-xs font-bold tracking-widest uppercase flex items-center gap-1 mb-4">
                <span className="text-[#e05545]">+</span> How It Works
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Reliable Care for<br />Every Stage
              </h2>
              <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
                We tailor our services to meet the unique needs of each
                individual, ensuring comfort and dignity.
              </p>
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {["Always Caring — 7 Days a Week", "Trusted Local Caregivers"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── CENTER: Caregiver image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative h-[420px] lg:col-span-1 flex items-end justify-center"
          >
            <Image
              src="/home/hero6.png"
              alt="Hoosier Helpers Caregiver"
              fill
              className="object-cover object-top rounded-2xl opacity-80"
            />
          </motion.div>

          {/* ── RIGHT: Step cards ── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] rounded-2xl px-7 py-6"
              >
                <p className="text-xs font-bold text-[#C0392B] mb-2 tracking-wider">{step.num}</p>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;