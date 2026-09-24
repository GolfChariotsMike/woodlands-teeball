import type { Metadata } from "next";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { ADDRESS, downloads, grounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grounds",
  description:
    "Woodlands Teeball plays at Woodlands Reserve and association grounds including Balcatta, City Beach, Alderbury Reserve and Birralee Oval.",
};

export default function GroundsPage() {
  const allocation = downloads.find((item) =>
    item.title.toLowerCase().includes("diamond"),
  );
  return (
    <SiteFrame>
      <Article
        kicker="Information"
        title="Grounds"
        lede="Training is at Woodlands Reserve. Saturday games move around the Wembley association."
      >
        <p>
          The club’s home is {ADDRESS}. Training day and time depend on the
          coach.
        </p>
        <p>Games are played at:</p>
        <ul className="list-disc space-y-1 pl-5">
          {grounds.map((ground) => (
            <li key={ground}>{ground}</li>
          ))}
        </ul>
        <p>
          Games may be at City Beach, Floreat, Innaloo, Balcatta or Woodlands.
          Under 7 and Under 9 teams play at 8:30am. Under 11 teams play at
          10:15am.
        </p>
        {allocation ? (
          <p>
            <a
              href={allocation.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            >
              {allocation.title} (PDF)
            </a>
          </p>
        ) : null}
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
