import type { Metadata } from "next";
import "./globals.css";
import  Header  from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroBanner from "@/components/ui/HeroBanner";
import { Analytics } from '@vercel/analytics/next';
import HeaderBanner from "@/components/ui/HeaderBanner";
import LiveRadio from "@/components/ui/LiveRadio";

export const metadata: Metadata = {
  title: {
    template: "%s - Hoosier Helpers Senior Care",
    default: "Hoosier Helpers Senior Care",
},
description: "Hoosier Helpers Senior Care proudly serves Orange & Lawrence County, Indiana — providing compassionate, non-medical personal care services so seniors can remain safe and independent at home."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
