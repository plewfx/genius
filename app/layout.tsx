import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import { Navbar } from "@components/navbar";
import { ConvexClientProvider } from "@components/providers/convex-provider";

import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Genius",
  description: "Music news and song lyrics",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConvexClientProvider>
          <Navbar />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
