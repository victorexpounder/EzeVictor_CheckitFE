import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../build.css"
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import ReduxProvider from '../ReduxProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SpaceX Capsules ",
  description: "Explore detailed information about SpaceX Capsules including status, launch date, and type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
