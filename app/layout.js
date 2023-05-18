import Navbar from "@/components/UI/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description: "A way to listen songs o of artist",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className="dark">
      <body className="bg-slate-100 dark:bg-slate-800">
        <Navbar />

        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
