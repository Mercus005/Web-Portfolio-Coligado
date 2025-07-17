import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClientLayout from "../components/ClientLayout"; // This contains your LandingIntro logic

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coligado, Cliff Marvic - Portfolio",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-950 text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
