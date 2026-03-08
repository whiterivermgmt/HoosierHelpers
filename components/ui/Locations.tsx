"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

const services = [
  {
    title: "Personal Care",
    description: "Compassionate assistance with bathing, grooming, and daily hygiene routines to maintain comfort and dignity.",
    link: "/services",
    linkLabel: "Our Services",
    icon: (
      <svg className="w-10 h-10 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Companionship",
    description: "Meaningful conversation, activities, and social engagement to bring joy and combat loneliness.",
    link: "/services",
    linkLabel: "Our Services",
    icon: (
      <svg className="w-10 h-10 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Home & Wellness",
    description: "Light housekeeping, meal preparation, and medication reminders to keep the home safe and running smoothly.",
    link: "/services",
    linkLabel: "Our Services",
    icon: (
      <svg className="w-10 h-10 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const StaticFeature: React.FC = () => {
  return (
    <section className="bg-[#faf9f7] py-24">
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#C0392B] text-xs font-bold tracking-widest uppercase mb-3 flex items-center justify-center gap-1">
            <span>+</span> What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Care That Enhances Quality of Life
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#f0eeeb] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div>{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.link}
                className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#C0392B] transition-colors mt-2"
              >
                → {service.linkLabel}
              </a>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default StaticFeature;