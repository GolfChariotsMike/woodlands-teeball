import type { Metadata } from "next";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { SponsorGrid } from "@/components/sponsor-grid";
import { EMAIL, namedSponsors, sponsors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Businesses supporting Woodlands Teeball Club, including White Chalk Road, Woodlands Wolves, Fielders, Little Giant and Capita Finance.",
};

export default function SponsorsPage() {
  return (
    <SiteFrame>
      <Article
        kicker="Thank you"
        title="Sponsors"
        lede="Woodlands Teeball is a not-for-profit club. Sponsor support goes back into the kids and keeping the season running."
      >
        <SponsorGrid sponsors={sponsors} />
        <h2 className="font-display text-2xl font-bold text-club">
          Also supporting the club
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {namedSponsors.map((sponsor) => (
            <li key={sponsor.name}>
              {sponsor.href ? (
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-club underline decoration-clay/70 decoration-2 underline-offset-4"
                >
                  {sponsor.name}
                </a>
              ) : (
                <span>{sponsor.name}</span>
              )}
            </li>
          ))}
        </ul>
        <p>
          Sponsorship enquiries can go to{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
          . The sponsorship coordinator is listed on the contact page.
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
