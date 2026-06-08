import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vercel Auto Deploy Starter",
  description: "Next.js, GitHub, Vercel automatic deployment starter."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
