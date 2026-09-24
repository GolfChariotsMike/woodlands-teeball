import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import type { ClubRole } from "@/lib/roles";

export function RoleArticle({ role }: { role: ClubRole }) {
  return (
    <SiteFrame>
      <Article kicker="Information" title={role.title} lede={role.lede}>
        <ul className="list-disc space-y-2 pl-5">
          {role.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
        {role.links?.map((link) => (
          <p key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            >
              {link.label}
            </a>
          </p>
        ))}
        <p>
          Current office holders are on the{" "}
          <a
            href="/contact"
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
          >
            contact page
          </a>
          . Coaching and umpiring courses are provided free of charge by the
          club.
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
