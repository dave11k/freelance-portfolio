import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Kiely",
  description: "Full Stack Developer Building Scalable Web Applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
