import { Lexend } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] })

export default function Version2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ scrollBehavior: "smooth" }}>
      <body className={lexend.className} style={{ textRendering: "optimizeLegibility" }}>
        {children}
      </body>
    </html>
  );
}
