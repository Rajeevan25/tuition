import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CenterHub | The Architectural Curator for Modern Education",
  description: "Enterprise management platform for tuition centers and academies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
