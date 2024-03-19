import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] })

export default function Version2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ scrollBehavior: "smooth" }}>
      <body className={`bg-white ${inter.className}`} style={{ textRendering: "optimizeLegibility" }}>
        {children}
      </body>
    </html>
  );
}
