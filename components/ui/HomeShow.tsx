"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHeart,
  FaUserFriends,
  FaPills,
  FaBroom,
  FaBath,
  FaHome,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBath size={22} />,
    title: "Personal Care",
    text: "Assistance with daily tasks such as bathing, dressing, and grooming to maintain dignity and comfort.",
    tags: ["Assistance", "Hygiene"],
    href: "/services",
  },
  {
    icon: <FaUserFriends size={22} />,
    title: "Companionship",
    text: "Meaningful social interaction and friendly visits to reduce feelings of loneliness and isolation.",
    tags: ["Assistance", "Wellness"],
    href: "/services",
  },
  {
    icon: <FaPills size={22} />,
    title: "Medication Reminders",
    text: "Timely reminders ensuring medications are taken correctly and on schedule, every day.",
    tags: ["Assistance", "Safety"],
    href: "/services",
  },
  {
    icon: <FaBroom size={22} />,
    title: "Light Housekeeping",
    text: "Laundry, dishes, vacuuming, and tidying to keep the home clean, safe, and comfortable.",
    tags: ["Assistance", "Home"],
    href: "/services",
  },
  {
    icon: <FaHome size={22} />,
    title: "Meal Preparation",
    text: "Nutritious, home-cooked meals tailored to dietary needs — from grocery shopping to clean-up.",
    tags: ["Assistance", "Nutrition"],
    href: "/services",
  },
  {
    icon: <FaHeart size={22} />,
    title: "Toileting Assistance",
    text: "Compassionate and confidential support maintaining comfort, hygiene, and dignity throughout the day.",
    tags: ["Assistance", "Care"],
    href: "/services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const HomeContests: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ── Parallax Background ── */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover brightness-[0.3]"
        style={{ backgroundImage: "url('/home/hero.jpg')" }}
      />
      {/* Red tint overlay */}
      <div className="absolute inset-0 bg-[#7a1a13]/50" />

      {/* ── Content ── */}
      <div className="relative z-10">
        <Container>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-3 flex items-center justify-center gap-1">
              <span className="text-[#e05545]">+</span> Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Your Well-Being, Our Priority
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#faf9f7] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow"
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-[#C0392B] flex items-center justify-center text-white shrink-0">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.text}
                </p>

                {/* Tags */}
                <div className="flex gap-4 text-xs text-gray-400">
                  {service.tags.map((tag, t) => (
                    <span key={t} className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[#C0392B] transition-colors"
                >
                  → Learn More
                </Link>
              </motion.div>
            ))}
          </div>

        </Container>
      </div>

    </section>
  );
};

export default HomeContests;