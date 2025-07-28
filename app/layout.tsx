import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MediTrack - Hospital Management System",
    template: "%s | MediTrack",
  },
  description:
    "Comprehensive hospital management system for patient records, appointments, and medical reports. Streamline your healthcare operations with MediTrack.",
  keywords: [
    "hospital management",
    "patient records",
    "medical appointments",
    "healthcare system",
    "hospital software",
    "patient management",
    "medical records",
    "healthcare technology",
  ],
  authors: [{ name: "MediTrack Team" }],
  creator: "MediTrack",
  publisher: "MediTrack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://meditrack.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meditrack.vercel.app",
    title: "MediTrack - Hospital Management System",
    description:
      "Comprehensive hospital management system for patient records, appointments, and medical reports.",
    siteName: "MediTrack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MediTrack Hospital Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediTrack - Hospital Management System",
    description:
      "Comprehensive hospital management system for patient records, appointments, and medical reports.",
    images: ["/og-image.png"],
    creator: "@meditrack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
