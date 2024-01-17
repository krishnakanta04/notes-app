import UIProvider from "@/providers/UIProvider";
import "./globals.css";
import localFont from "next/font/local";

const chillax = localFont({
  src: "../fonts/Chillax-Variable.woff2",
  variable: "--font-chillax",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-chillax",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chillax.variable} ${satoshi.className}`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
