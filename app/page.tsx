import type { Metadata } from "next";
import { HomeSections } from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollFilm } from "@/components/scroll-film/scroll-film";

export const metadata: Metadata = {
  description:
    "Woodlands Teeball Club for boys and girls aged 5–10. Under 7, Under 9 and Under 11 at Woodlands Reserve, Teakwood Ave, Woodlands, Perth WA 6018.",
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ScrollFilm embedded />
        <HomeSections />
      </main>
      <SiteFooter />
    </>
  );
}
