import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

// Load Inter for sans
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Load Fira Code for monospace
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Anup Solanki | Frontend Developer & React Specialist",
  description:
    "Portfolio of Anup Solanki — Frontend Developer from Ahmedabad, India with 2+ years of experience in building modern, scalable, and AI-powered web applications using React.js, Next.js, and Tailwind CSS. Awarded 'Rising Star' at Solguruz for leading impactful UI revamps and mentoring developers.",
  keywords: [
    "Anup Solanki",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Ahmedabad Developer",
    "Solguruz",
    "AI Integration",
    "Web Developer Portfolio",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next.js Portfolio",
    "React Projects",
  ],
  authors: [{ name: "Anup Solanki", url: "https://anupsolanki.dev" }],
  creator: "Anup Solanki",
  openGraph: {
    title: "Anup Solanki | Frontend Developer & React.js Specialist",
    description:
      "Explore the portfolio of Anup Solanki, a passionate React & Next.js developer with a knack for crafting AI-powered, performance-driven user interfaces.",
    url: "https://anupsolanki.dev",
    siteName: "Anup Solanki Portfolio",
    images: [
      {
        url: "https://anupsolanki.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anup Solanki - Frontend Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anup Solanki | Frontend Developer & React.js Specialist",
    description:
      "Frontend Developer from India specializing in React.js, Next.js, and modern UI engineering.",
    creator: "@anupsolanki",
    images: ["https://anupsolanki.dev/og-image.jpg"],
  },
  themeColor: "#0ea5e9",
  metadataBase: new URL("https://anupsolanki.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
