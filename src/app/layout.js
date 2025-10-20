import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VideoCraft - Professional Video Editing Services",
  description: "Transform your vision into stunning visual stories with our expert video editing team. Professional video production, editing, motion graphics, and audio services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-new-gr-c-s-check-loaded="14.1258.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
