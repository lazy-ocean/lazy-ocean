import { Metadata } from "next";
import Head from "next/head";
import { Quicksand, Raleway } from "next/font/google";
import "./global.css";
import localFont from "next/font/local";

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

/* const raleway = Raleway({
  weight: ["100", "400", "700"],
  display: "swap",
  
  variable: "--font-raleway",
}); */

const myFont = localFont({
  src: "./SandeMore-Regular.otf",
  display: "swap",
  variable: "--font-header",
});

/* const raleway = Raleway({
  weight: ["100", "400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
}); */

const quicksand = Quicksand({
  weight: ["300", "700"],
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
    <html lang="en" className={`${quicksand.variable} ${myFont.variable}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
