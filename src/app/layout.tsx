import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anup Solanki | Frontend Developer & React Specialist",
  description:
    "Portfolio of Anup Solanki — Frontend Developer from Ahmedabad, India specializing in React, Next.js, and AI-powered web experiences. 3+ years building scalable, interactive applications. Awarded Rising Star for leading impactful UI revamps.",
  keywords: [
    "Anup Solanki",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "AI Integration Developer",
    "Interactive Web Developer",
    "Web Application Developer",
    "Ahmedabad Developer",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  authors: [{ name: "Anup Solanki", url: "https://anupsolanki.com" }],
  creator: "Anup Solanki",
  openGraph: {
    title: "Anup Solanki | Frontend Developer & React Specialist",
    description:
      "Explore the notebook of Anup Solanki — a creative engineer who builds digital experiences with React, Next.js, and AI integrations.",
    url: "https://anupsolanki.com",
    siteName: "Anup Solanki",
    images: [
      {
        url: "https://anupsolanki.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anup Solanki — Frontend Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Solanki | Frontend Developer",
    description:
      "Frontend Developer from India specialising in React, Next.js, and modern interactive web engineering.",
    images: ["https://anupsolanki.com/og-image.jpg"],
  },
  themeColor: "#F7F2E8",
  metadataBase: new URL("https://anupsolanki.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="antialiased graph-bg paper-grain min-h-screen">
        {children}
      </body>
    </html>
  );
}
