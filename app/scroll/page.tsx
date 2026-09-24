import type { Metadata } from "next";
import { ScrollFilm } from "@/components/scroll-film/scroll-film";

export const metadata: Metadata = {
  title: { absolute: "Woodlands Teeball" },
  description:
    "Woodlands Teeball Club for ages 5–10. U7, U9 and U11 at Woodlands Reserve, Teakwood Ave, Woodlands, Perth WA 6018.",
};

export default function ScrollPage() {
  return <ScrollFilm />;
}
