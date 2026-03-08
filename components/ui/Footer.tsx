"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { headerData } from "@/Constants/data";
import { SiFacebook } from "react-icons/si";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61587292422062",
      icon: <SiFacebook />,
      name: "Facebook",
    },
  ];

  const quickLinks = headerData.map((item) => ({
    title: item.title,
    href: item.href,
  }));

  const services = [
    { title: "Companionship",        href: "/services/companionship" },
    { title: "Meal Preparation",     href: "/services/meal-preparation" },
    { title: "Medication Reminders", href: "/services/medication-reminders" },
    { title: "Light Housekeeping",   href: "/services/housekeeping" },
    { title: "Bathing Assistance",   href: "/services/bathing" },
    { title: "Toileting Assistance", href: "/services/toileting" },
  ];

  return (
    <footer className="mt-auto bg-[#7a1a13] text-white">

      {/* ── Top: Newsletter centered ── */}
      <div className="border-b border-white/10 py-12 text-center">
        <Container>
          <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
          <p className="text-white/60 text-sm mb-6">Stay updated with care tips and company news.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#C0392B] hover:bg-[#e04535] text-white font-semibold text-sm transition whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </Container>
      </div>

      {/* ── Main 4-col grid ── */}
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Logo + Tagline + Social */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.03 }} className="inline-block cursor-pointer">
                <Image
                  src="/escos/hfooter.png"
                  alt="Hoosier Helpers Senior Care"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Hoosier Helpers Senior Care proudly serves Orange &amp; Lawrence County, Indiana —
              providing compassionate, non-medical personal care services so seniors can remain
              safe and independent at home.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#7a1a13] transition"
                >
                  {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    className={`text-sm transition ${
                      pathname === link.href
                        ? "text-white font-semibold"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Contact</h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-base font-semibold mb-1">Phone</p>
                <a
                  href="tel:+18122763322"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  (812) 276-3322
                </a>
              </div>
              <div>
                <p className="text-base font-semibold mb-1">Email</p>
                <a
                  href="mailto:missy@hoosierhelpersseniorcare.com"
                  className="text-sm text-white/70 hover:text-white transition break-all"
                >
                  missy@hoosierhelpersseniorcare.com
                </a>
              </div>
              <div>
                <p className="text-base font-semibold mb-1">Service Area</p>
                <p className="text-sm text-white/70">
                  Bedford, Bloomington<br />& Surrounding Areas
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Hoosier Helpers Senior Care. All Rights Reserved.</p>
            <p>
              Powered by{" "}
              <Link
                href="https://whiteriver.media"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition font-medium"
              >
                White River Media
              </Link>
            </p>
          </div>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;