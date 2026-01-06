import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "SLTC GPA Intelligence | Unofficial Academic Strategist",
    template: "%s | SLTC GPA Intelligence"
  },
  description: "The definitive unofficial intelligence engine for SLTC Research University. Forecast degree classifications, track cumulative standing, and architect your academic future.",
  keywords: ["SLTC", "GPA Calculator", "Sri Lanka Technological Campus", "SLTC GPA Intelligence", "Academic Strategist"],
  authors: [{ name: "Ruwan Sanjeewa", url: "https://ruwansanjeewa.com" }],
  creator: "Ruwan Sanjeewa",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://sltc-gpa.vercel.app", // Replace with your actual domain
    siteName: "SLTC GPA Intelligence",
    title: "SLTC GPA Intelligence Hub",
    description: "Master your grades. Architect your future with the ultimate SLTC academic engine.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SLTC GPA Intelligence Hub Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLTC GPA Intelligence Hub",
    description: "Definitive unofficial academic strategist for SLTC students.",
    creator: "@DevZenMaster",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-white dark:bg-[#030303] text-slate-900 dark:text-slate-100 selection:bg-blue-600/20 antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow relative z-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}