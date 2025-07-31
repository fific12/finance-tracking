import { Inter, Roboto_Mono } from "next/font/google";

import "./globals.css";
import ClientCookiesProvider from "@/library/client-data";
import useServerDarkMode from "@/hooks/useServerDarkMode";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Finance Tracker",
  description: "Track your finances smartly",
};

export default async function RootLayout({ children }) {
  const theme = await useServerDarkMode();

  return (
    <html lang="en" className={theme}>
      <body
        className={`
          ${inter.variable} ${robotoMono.variable} 
          antialiased 
          bg-white text-black 
          dark:bg-slate-900 dark:text-slate-100 
        `}
      >
        <ClientCookiesProvider>
          <div className="container mx-auto max-w-6xl px-4">{children}</div>
        </ClientCookiesProvider>
      </body>
    </html>
  );
}
