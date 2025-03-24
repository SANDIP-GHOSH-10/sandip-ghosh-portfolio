import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandip Ghosh | Frontend Developer",
  description: "Portfolio of Sandip Ghosh - Frontend Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Sandip Ghosh", "Frontend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sandip Ghosh", url: "https://sandipghosh.com" }],
  openGraph: {
    title: "Sandip Ghosh | Frontend Developer",
    description: "Explore the portfolio of Sandip Ghosh, a Frontend Developer specializing in modern web technologies.",
    url: "https://sandip-ghosh-portfolio.vercel.app/",
    siteName: "Sandip Ghosh Portfolio",
    images: [
      {
        url: "https://sandip-ghosh-portfolio.vercel.app/public/image/ogimg.png",
        width: 1200,
        height: 630,
        alt: "Sandip Ghosh Portfolio Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sandipghosh10",
    title: "Sandip Ghosh | Frontend Developer",
    description: "Explore the portfolio of Sandip Ghosh, a Frontend Developer specializing in modern web technologies.",
    images: ["https://sandip-ghosh-portfolio.vercel.app/public/image/ogimg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sandip Ghosh" />
        <meta name="theme-color" content="#1E1E2F" />

        {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sandip Ghosh",
              url: "https://sandipghosh.com",
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self Employed",
              },
              sameAs: [
                "https://github.com/SANDIP-GHOSH-10",
                "https://www.linkedin.com/in/sandip-ghosh-6174801a7/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
