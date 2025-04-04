import type { Metadata } from "next";
import "../styles/globals.css";

import localFont from "next/font/local";

const courierPrime = localFont({
  src: [
    {
      path: "../../public/fonts/CourierPrime-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CourierPrime-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-courier-prime",
});

const cutiveMono = localFont({
  src: [
    {
      path: "../../public/fonts/CutiveMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cutive-mono", // CSS variable name
});

export const metadata: Metadata = {
  title: "Samy's Study Guide",
  description: "Generated by create next app",
  icons: {
    icon: "/icons/ic--baseline-school.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${cutiveMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
