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
  title: "Kashan Asdaq | Healthcare AI Portfolio",
  description:
    "Healthcare AI and machine learning portfolio of Kashan Asdaq, featuring projects in medical image analysis, predictive modelling, explainable AI, and healthcare software prototypes.",
  applicationName: "Kashan Asdaq — Healthcare AI Portfolio",
  openGraph: {
    title: "Kashan Asdaq | Healthcare AI Portfolio",
    description:
      "Selected healthcare AI, machine learning, and software engineering projects by Kashan Asdaq.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
