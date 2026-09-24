import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { committeeRoles } from "@/lib/roles";
import { PRESIDENT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Committee",
  description:
    "Woodlands Teeball Club committee roles. Meetings are on the second Tuesday of the month. All positions come up at the AGM.",
};

export default function CommitteePage() {
  return (
    <SiteFrame>
      <Article
        kicker="Volunteers"
        title="Committee"
        lede="All positions on the committee come up for renewal at the AGM each year. If you can assist with ideas, enthusiasm and a little time, the club would love to hear from you."
      >
        <p>
          Being a committee member requires your attendance at only nine monthly
          meetings, on the second Tuesday of the month. The meetings are
          light-hearted and quite social, and they keep the season organised for
          the children. Questions can go to{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${PRESIDENT_EMAIL}`}
          >
            {PRESIDENT_EMAIL}
          </a>
          .
        </p>
        <h2 className="font-display text-2xl font-bold text-club">Why join?</h2>
        <p>
          We do it for our kids. No greater joy than seeing them play and grow
          into the game, but this needs parent help to make it as smooth as
          possible and give the kids the opportunity to enjoy a sport regardless
          of ability because they all get a fair go. The demand for your time is
          small in comparison.
        </p>
        <p>
          Current names are listed on the{" "}
          <Link
            href="/contact"
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
          >
            contact page
          </Link>
          . Feedback for the President and Vice-President can go to{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${PRESIDENT_EMAIL}`}
          >
            {PRESIDENT_EMAIL}
          </a>
          .
        </p>
        <div className="grid gap-4">
          {committeeRoles.map((role) => (
            <section
              key={role.title}
              className="rounded-3xl bg-paper p-5 ring-1 ring-club/10"
            >
              <h2 className="font-display text-xl font-bold text-club">
                {role.title}
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {role.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p>
          As part of a collegiate approach, the committee as a whole seeks to
          help each other with key events such as registration day, team
          notification day, the team officials meeting, and uniform and equipment
          busy bees. You are not alone in getting things done.
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
