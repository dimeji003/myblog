import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white md:w-[85%] m-auto">
      <body className={inter.className}>
        <Navbar />
      <div>
        {children}

      </div>
      </body>
      <Footer />
    </html>
  );
}