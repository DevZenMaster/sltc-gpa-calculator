import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- UPDATED METADATA ---
export const metadata: Metadata = {
  title: "SLTC GPA Calculator | Faculty of Computing & IT",
  description: "The unofficial academic strategist for SLTC students. Track GPA, predict degree class, and generate transcripts.",
  
  // Basic Icons
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "SLTC GPA Calculator | Faculty of Computing & IT",
    description: "Master your grades. Plan your future. Calculate your SLTC GPA instantly.",
    url: 'https://sltc-gpa.vercel.app', // REPLACE WITH YOUR ACTUAL DEPLOYED URL
    siteName: 'SLTC GPA Calculator',
    images: [
      {
        url: '/opengraph-image', // Automatically links to the file we created
        width: 1200,
        height: 630,
        alt: 'SLTC GPA Calculator Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "SLTC GPA Calculator",
    description: "Master your grades. Plan your future.",
    images: ['/opengraph-image'], // Reuse the same image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}