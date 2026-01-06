import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SLTC GPA Calculator | Faculty of Computing & IT",
  description: "The unofficial academic strategist for SLTC students. Track GPA, predict degree class, and generate transcripts.",
  icons: {
    icon: '/icon',      // Automatically uses icon.tsx
    apple: '/apple-icon', // Automatically uses apple-icon.tsx
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
        
        {/* Main Content Area */}
        <main className="flex-grow relative z-0">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}