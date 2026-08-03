import "../styles/globals.css";
import type { Metadata } from "next";
import { Roboto, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ClientLayout from "../components/ClientLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Coligado, Cliff Marvic - Portfolio",
  description:
    "Portfolio of Cliff Marvic M. Coligado, a Computer Science graduate building software across web, mobile, games, and data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={`${roboto.className} bg-ink-950 text-paper`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}