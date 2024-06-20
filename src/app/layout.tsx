import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multilanguage | Curriculum",
  description: "Built with nextjs by Dan Chanivet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Multi-language | Curriculum</title>
      <meta name="description" content="Read my CV in multiple languages as fast as like a thunder" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
