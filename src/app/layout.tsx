import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Newsletter Sign Up Challenge - Paweł Bul",
  description: "Frontend Mentor Challenge doen by Paweł Bul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-slate`}>{children}</body>
    </html>
  );
}
