"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { FaHeart, FaHandsHelping, FaStar, FaUserFriends } from "react-icons/fa";

const values = [
  {
    icon: <FaHeart size={16} />,
    title: "Compassion",
    text: "We believe in treating every client with kindness and empathy, ensuring they feel valued and respected in every interaction.",
  },
  {
    icon: <FaHandsHelping size={16} />,
    title: "Integrity",
    text: "We uphold the highest standards of honesty and transparency in our services. Trust is essential in caregiving.",
  },
  {
    icon: <FaStar size={16} />,
    title: "Excellence",
    text: "We are committed to delivering the highest quality of care. Our team continuously seeks improvement and innovation.",
  },
  {
    icon: <FaUserFriends size={16} />,
    title: "Empathy",
    text: "We listen, understand, and connect with each client's needs, delivering care with a compassionate, human touch.",
  },
];

const WhyRSServices: React.FC = () => {
  return (
    <section className="bg-[#faf9f7] py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: About Us ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <p className="text-[#C0392B] text-xs font-bold tracking-widest uppercase flex items-center gap-1">
              <span>+</span> About Us
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Building Trust, One<br />Family at a Time
            </h2>

            {/* Body */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Hoosier Helpers Senior Care provides compassionate, expert support to
              ensure seniors live with dignity and independence. Our tailored care
              programs enhance comfort and safety across Orange &amp; Lawrence County.
            </p>

            {/* CTA */}
            <div>
              <a
                href="/about"
                className="inline-block px-7 py-3 rounded-full bg-[#C0392B] text-white text-sm font-semibold hover:bg-[#e04535] transition shadow-md"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-4 border-t border-gray-200 mt-2">
              <div>
                <p className="text-2xl font-extrabold text-gray-900">1+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">50+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Families Served</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gray-900">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Dedicated Care</p>
              </div>
            </div>

            {/* Photo mosaic */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative h-44 rounded-2xl overflow-hidden shadow-md"
              >
                <Image src="/home/hero2.jpg" alt="Senior Care" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-44 rounded-2xl overflow-hidden shadow-md mt-6"
              >
                <Image src="/home/hero3.jpg" alt="Senior Care" fill className="object-cover object-top" />
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Caring with Purpose ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden min-h-[580px]"
          >
            {/* Background image */}
            <Image
              src="/home/hero5.jpg"
              alt="Caring with Purpose"
              fill
              className="object-cover brightness-[0.35]"
            />

            {/* Overlay content */}
            <div className="relative z-10 p-10 flex flex-col h-full justify-between min-h-[580px]">
              <div>
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase flex items-center gap-1 mb-4">
                  <span>+</span> Our Values
                </p>
                <h3 className="text-3xl font-extrabold text-white mb-8">
                  Caring with Purpose
                </h3>

                {/* Values list */}
                <div className="flex flex-col divide-y divide-white/10">
                  {values.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="py-5 flex gap-4 items-start"
                    >
                      <div className="flex items-center gap-2 text-[#e05545] shrink-0 pt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white font-bold text-sm underline underline-offset-2">
                          {value.title}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {value.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default WhyRSServices;