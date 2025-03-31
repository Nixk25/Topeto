import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const ClashGroteskFont = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
});

export const metadata: Metadata = {
  title: "Topeto — Oficiální stránka kapely",
  description:
    "Oficiální web kapely Topeto. Hudba, koncerty, novinky a vše o našem alternativním zvuku. Sleduj nás a nalaď se.",
  keywords: [
    "Topeto",
    "kapela",
    "česká kapela",
    "alternativní hudba",
    "koncerty",
    "hudba",
    "live show",
    "Topeto band",
  ],
  authors: [{ name: "Nicolas Melda", url: "https://nicolasmelda.com" }],
  creator: "Nicolas Melda",
  themeColor: "#3B3B3B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ ${ClashGroteskFont.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
