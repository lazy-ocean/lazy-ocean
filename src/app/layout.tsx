import { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "./global.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://lazy-ocean.vercel.app/"),
  title: "Vladlena | Frontend Engineer",
  description: "I am Vladlena Panchenko and I am a frontend engineer",
  openGraph: {
    description:
      "Hello! 👋 I am Vladlena Panchenko and I am a frontend engineer",
    url: "https://lazy-ocean.vercel.app/",
    title: "Vladlena | Frontend engineer",
    type: "website",
    images: "https://lazy-ocean.vercel.app/meta-img.png",
  },
};

const myFont = localFont({
  src: "./SandeMore-Regular.otf",
  display: "swap",
  variable: "--font-header",
});

const raleway = Raleway({
  weight: ["300", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
});

const poppins = Poppins({
  weight: ["200", "400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-main",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${myFont.variable} ${raleway.variable} ${poppins.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
