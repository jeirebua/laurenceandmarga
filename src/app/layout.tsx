import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "Laurence and Margarette",
  description:
    "Join us in celebrating the wedding of Laurence and Margarette on December 17, 2025, at Teodore's Events Place. A love story that began at the gym and led to forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
