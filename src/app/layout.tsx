import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bapelitbang Kota Bandung",
  description: "Bapelitbang Kota Bandung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#3B82F6"
          showSpinner={false}
          height={3}
          speed={800}
        />
        {children}
      </body>
    </html>
  );
}
