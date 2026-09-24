import type { Metadata } from "next";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { downloads } from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Woodlands Teeball Club documents: rule book, managers booklet, by-laws, handbook, constitution and scorecard.",
};

export default function DownloadsPage() {
  return (
    <SiteFrame>
      <Article
        kicker="Information"
        title="Downloads"
        lede="Club and association documents, linked from the current Woodlands Teeball site."
      >
        <ul className="grid gap-3">
          {downloads.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-3xl bg-paper px-5 py-4 font-semibold text-club ring-1 ring-club/10 hover:ring-clay"
              >
                <span>{item.title}</span>
                <span className="font-display text-[0.68rem] uppercase tracking-[0.16em] text-clay">
                  PDF
                </span>
              </a>
            </li>
          ))}
        </ul>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
