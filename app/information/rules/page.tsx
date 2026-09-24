import type { Metadata } from "next";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { rulebook } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rules",
  description:
    "The main objectives of teeball, and the Tee-Ball Association of Western Australia rule book.",
};

export default function RulesPage() {
  return (
    <SiteFrame>
      <Article
        kicker="Information"
        title="Rules"
        lede="The Tee-Ball Association of Western Australia publishes the official rules."
      >
        <h2 className="font-display text-2xl font-bold text-club">
          The main objectives of teeball
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Introducing children to a team sport environment where enjoyment and
            success can be achieved by participation.
          </li>
          <li>To encourage exercise and promote good health.</li>
          <li>To promote and encourage good sportsmanship.</li>
        </ol>
        <p>
          To achieve these goals, the Tee-Ball Association of Western Australia
          produces revised editions of the official rules.
        </p>
        <p>
          <a
            href={rulebook.href}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
          >
            Download the {rulebook.title}
          </a>
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
