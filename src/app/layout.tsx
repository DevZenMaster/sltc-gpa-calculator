import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

export const metadata: Metadata = {
  title: "SLTC GPA Calculator | Faculty of Computing & IT",
  description: "The unofficial academic strategist for SLTC students. Track GPA, predict degree class, and generate transcripts.",
  
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },

  openGraph: {
    title: "SLTC GPA Calculator | Faculty of Computing & IT",
    description: "Master your grades. Plan your future. Calculate your SLTC GPA instantly.",
    url: 'https://sltc-gpa.vercel.app', 
    siteName: 'SLTC GPA Calculator',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SLTC GPA Calculator Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        
        {/* Main Content */}
        <main className="flex-grow relative z-0">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}