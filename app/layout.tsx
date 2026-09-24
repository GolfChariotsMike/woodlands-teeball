import type { Metadata } from "next";
import { Montserrat, Open_Sans, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const heading = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Woodlands Teeball Club",
    template: "%s · Woodlands Teeball Club",
  },
  description:
    "Woodlands Teeball Club, the first tee-ball club in WA. Boys and girls aged 5–10, Under 7, Under 9 and Under 11, at Woodlands Reserve, Teakwood Ave, Woodlands, Perth WA 6018.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
