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
      <meta name="description" content="Developed by Dan Chanivet" />


      <meta property="og:url" content="https://curriculum-multilanguage.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Multi-language | Curriculum" />
      <meta property="og:description" content="Built with nextjs by Dan Chanivet" />
      <meta property="og:image" content="https://curriculum-multilanguage.vercel.app/opengraph-image.png?90e60d79cae1be6f" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="Built with nextjs by Dan Chanivet" />
      <meta property="twitter:url" content="https://curriculum-multilanguage.vercel.app/" />
      <meta name="twitter:title" content="Multi-language | Curriculum" />
      <meta name="twitter:description" content="Built with nextjs by Dan Chanivet" />
      <meta name="twitter:image" content="https://curriculum-multilanguage.vercel.app/opengraph-image.png?90e60d79cae1be6f">
      </meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
