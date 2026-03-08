"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

const testimonials = [
  {
    title: "Life-Enriching Support",
    text: "Hoosier Helpers transformed my father's life. The caregivers are kind, attentive, and truly compassionate. I am so grateful for their dedication and support during this time.",
    name: "Henry Thompson",
    initials: "HT",
  },
  {
    title: "Heartfelt Companionship",
    text: "The companionship my grandmother receives has been life-changing. She now enjoys daily activities and conversations, which have greatly improved her mood and overall well-being.",
    name: "Sophia Martinez",
    initials: "SM",
  },
  {
    title: "Outstanding Experience",
    text: "Our experience with Hoosier Helpers has been outstanding. The caregivers genuinely care about their clients, making a positive impact on our family's life. Thank you!",
    name: "Michael Donovan",
    initials: "MD",
  },
  {
    title: "Always Dependable",
    text: "Their availability has been a lifesaver. The caregivers provide reliable support every day, ensuring my mother feels safe and secure. I can't express how much their care means to us.",
    name: "Olivia Reynolds",
    initials: "OR",
  },
  {
    title: "Respectful Care",
    text: "The team is incredible! They treat my father with respect and dignity, ensuring he remains comfortable and engaged throughout the day. Truly exceptional people.",
    name: "James Caldwell",
    initials: "JC",
  },
  {
    title: "Peace of Mind",
    text: "Knowing that my mother is in such capable hands gives our whole family peace of mind. The caregivers are attentive, respectful, and dedicated to ensuring her comfort.",
    name: "Evelyn Harper",
    initials: "EH",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#faf9f7] py-24">
      <Container>

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14 gap-6 flex-wrap"
        >
          <div>
            <p className="text-[#C0392B] text-xs font-bold tracking-widest uppercase flex items-center gap-1 mb-3">
              <span>+</span> Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Real Experiences, Real Results
            </h2>
          </div>
          <Link
            href="/faq"
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#C0392B] text-white text-sm font-semibold hover:bg-[#e04535] transition shadow-md"
          >
            More Testimonials
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#f0eeeb] rounded-2xl p-8 flex flex-col gap-4"
            >
              {/* Quote mark */}
              <div className="text-[#C0392B] text-4xl font-serif leading-none">"</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200 mt-2">
                <div className="w-10 h-10 rounded-full bg-[#C0392B]/20 flex items-center justify-center text-[#C0392B] text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ContactSection;