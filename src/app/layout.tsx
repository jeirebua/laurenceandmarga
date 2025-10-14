import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "Laurence and Margarette",
  description: "",
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
