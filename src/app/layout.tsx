import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chinmareno | Software Engineer",
  description:
    "Fullstack JavaScript developer passionate about building modern web apps.",
  openGraph: {
    title: "chinmareno | Software Engineer",
    description:
      "Fullstack JavaScript developer passionate about building modern web apps.",
    url: "https://chinmareno.vercel.app",
    siteName: "chinmareno",
    images: [
      {
        url: "/myself.jpg",
        width: 1200,
        height: 630,
        alt: "chinmareno's personal site",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "chinmareno | Software Engineer",
    description:
      "Fullstack JavaScript developer passionate about building modern web apps.",
    images: ["/myself.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
