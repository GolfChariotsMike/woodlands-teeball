import type { Metadata } from "next";
import { Article, PageCta } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { SponsorGrid } from "@/components/sponsor-grid";
import { EMAIL, registerSponsors, sponsors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Businesses supporting Woodlands Teeball Club, including Woodlands Wolves, Fielders, Little Giant and Capita Finance.",
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
        <SponsorGrid sponsors={registerSponsors} />
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
