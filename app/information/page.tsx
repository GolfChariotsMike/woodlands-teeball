import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { infoLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Information",
  description:
    "Coach, umpire, manager and scorer roles, grounds, rules and downloads for Woodlands Teeball Club.",
};

const blurbs: Record<string, string> = {
  "/information/coaches": "Overall responsibility for the team, training and game day.",
  "/information/umpires": "What to wear, when to arrive, and how home and away games are covered.",
  "/information/manager-roles": "Fixtures, hats, uniforms, bases and keeping families in the loop.",
  "/information/scorer-roles": "Behind the plate with the book, from 15 minutes before the game.",
  "/information/rules": "Why the game exists, and the TBAWA rule book.",
  "/information/grounds": "Home reserve and the grounds used on Saturday mornings.",
  "/information/downloads": "Handbooks, by-laws, the constitution and scorecards.",
};

export default function InformationPage() {
  return (
    <SiteFrame>
      <Article
        kicker="For families"
        title="Information"
        lede="Teams run on parent volunteers. These pages cover the roles, the grounds, the rules and the club documents."
      >
        <ul className="grid gap-3">
          {infoLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-3xl bg-paper px-5 py-4 ring-1 ring-club/10 hover:ring-clay"
              >
                <span className="font-display text-lg font-bold text-club">
                  {link.label}
                </span>
                <span className="mt-1 block text-base text-ink/75">
                  {blurbs[link.href]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
