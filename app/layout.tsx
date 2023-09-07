import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Inspire",
  description: "Share your ideas to the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
