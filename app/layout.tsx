import type { Metadata } from "next";
// import { Inter, Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./ui/footer";
import Header from "./ui/header";

const mona = localFont({ src: "/font/Mona-Sans.woff2", variable: "--font-mona" });

// const inter = Inter({ subsets: ["latin"] });
// const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OOH Amcy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-screen bg-neutral-950 text-base antialiased' style={{ scrollBehavior: "smooth" }}>
      <body className={`${mona.variable} font-sans flex min-h-full flex-col`} style={{ textRendering: "optimizeLegibility" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
