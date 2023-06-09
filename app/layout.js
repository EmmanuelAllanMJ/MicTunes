import Navbar from "@/components/UI/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MICTunes",
  description: "A way to listen songs of artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-100 dark:bg-slate-800">
        <Navbar />
      
        {children}
      </body>
    </html>
  );
}
