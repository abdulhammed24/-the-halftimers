import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/rtk-query/ReduxProvider";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `The Halftimers`,
    template: "%s | The Halftimers",
  },
  description:
    "A blog web app dedicated to sports enthusiasts, providing insights, analysis, and updates.",
  metadataBase: new URL("https://the-halftimers.vercel.app/"),
  verification: {
    google: "wb59er5Yiw1Jlti3wSvBnZyY0S_JPqXKMW0zZzwv4O0",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppinsFont.variable} antialiased`}>
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
