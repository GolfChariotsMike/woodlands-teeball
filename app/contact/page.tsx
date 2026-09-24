import type { Metadata } from "next";
import { Article, PhotoBand } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { ADDRESS, committee, EMAIL, MAPS_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Woodlands Teeball Club at hello@woodlandsteeball.com.au. Woodlands Reserve, Teakwood Ave, Woodlands, Perth WA 6018.",
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <PhotoBand
        src="/gallery/throw.jpg"
        alt="A Woodlands player in green winds up to throw"
      />
      <Article
        kicker="Get in touch"
        title="Contact"
        lede="Questions about enrolment, teams or volunteering can come straight to the club."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-3xl bg-club px-5 py-6 text-cream"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Email
            </p>
            <p className="mt-2 text-lg font-semibold">{EMAIL}</p>
          </a>
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl bg-paper px-5 py-6 text-club ring-1 ring-club/10"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-clay">
              Ground
            </p>
            <p className="mt-2 text-lg font-semibold">{ADDRESS}</p>
          </a>
        </div>

        <h2 className="font-display text-2xl font-bold text-club">
          Your committee
        </h2>
        <div className="overflow-hidden rounded-3xl bg-paper ring-1 ring-club/10">
          <table className="w-full text-left">
            <thead className="bg-club text-cream">
              <tr>
                <th className="px-4 py-3 font-display text-xs uppercase tracking-[0.14em]">
                  Position
                </th>
                <th className="px-4 py-3 font-display text-xs uppercase tracking-[0.14em]">
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {committee.map((member) => (
                <tr
                  key={`${member.position}-${member.name}`}
                  className="border-t border-club/10"
                >
                  <td className="px-4 py-3 text-ink/70">{member.position}</td>
                  <td className="px-4 py-3 font-semibold text-club">
                    {member.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-hidden rounded-3xl bg-paper ring-1 ring-club/10">
          <table className="w-full text-left">
            <tbody>
              <tr className="border-t border-club/10">
                <td className="px-4 py-3 font-semibold text-club">
                  Tee-Ball Association of WA
                </td>
                <td className="px-4 py-3">Delegates: President & Vice-President</td>
              </tr>
              <tr className="border-t border-club/10">
                <td className="px-4 py-3 font-semibold text-club">
                  Wembley Tee-Ball Association
                </td>
                <td className="px-4 py-3">Delegates: President & Vice-President</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Article>
    </SiteFrame>
  );
}
