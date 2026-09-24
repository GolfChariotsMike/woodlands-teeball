import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { ScrollFilm } from "./scroll-film";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Woodlands Teeball",
  description:
    "Woodlands Teeball Club for ages 5–10. U7, U9 and U11 at Woodlands Reserve, Teakwood Ave, Woodlands WA 6018.",
};

export default function ScrollPage() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <ScrollFilm />
    </div>
  );
}
