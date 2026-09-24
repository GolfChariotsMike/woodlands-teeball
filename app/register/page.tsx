import type { Metadata } from "next";
import { Article, PhotoBand } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Woodlands Teeball season registration via GameDay. Fees are $140 plus card fees ($145 total). Age cut-offs for 2026 and Saturday game times.",
};

const inclusions = [
  "Registration",
  "Loan of a uniform for the season",
  "A hat and socks to keep",
  "Access to required equipment (except glove)",
  "Team photograph",
  "Medallion",
];

export default function RegisterPage() {
  return (
    <SiteFrame>
      <PhotoBand
        src="/gallery/batting.jpg"
        alt="A Woodlands player in a green uniform swings at a ball on the tee"
      />
      <Article kicker="Season" title="Register">
        <div className="rounded-3xl bg-clay/15 px-5 py-4 text-club ring-1 ring-clay/30">
          <p className="font-semibold">
            General registration is now closed. If you have any questions about
            enrolment, contact{" "}
            <a className="underline decoration-clay decoration-2 underline-offset-4" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold text-club">
          Registering on GameDay
        </h2>
        <p>
          Tee-Ball WA has partnered with GameDay to simplify registrations and
          co-ordinate information. As it is a new system, you need to register
          your child as New even if they have played with the club before.
        </p>
        <p>
          While every effort has been made to streamline the process, the club
          is limited in what changes it can make to the system.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            On the Basic Info tab, enter your child’s details first — name, date
            of birth and so on — as this is who is being registered.
          </li>
          <li>
            On the Questions tab, enter a few more details for your child, then
            an emergency contact, then a parent’s details. The parent email is
            the address the club will use to communicate with you, so make that
            the primary contact.
          </li>
          <li>
            Do not use the back button in your browser. It will duplicate
            information. If you need to change what you have entered, log out in
            the top right of the page and restart. It is only a couple of pages
            long.
          </li>
        </ol>
        <p>
          The club site does not publish a standing GameDay web address here.
          With registration closed, email{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>{" "}
          and the club can help with the current link.
        </p>
        <p>Registrations close on 31 August.</p>

        <h2 className="font-display text-2xl font-bold text-club">Divisions</h2>
        <p>There are 3 divisions, split by age: Under 7, Under 9 and Under 11.</p>
        <p>
          Under 7s and Under 9s play at 8:30am and Under 11s play at 10:15am
          every Saturday.
        </p>

        <h2 className="font-display text-2xl font-bold text-club">
          Age cut-offs
        </h2>
        <div className="overflow-hidden rounded-3xl bg-paper ring-1 ring-club/10">
          <table className="w-full text-left text-base">
            <thead className="bg-club text-cream">
              <tr>
                <th className="px-4 py-3 font-display text-xs uppercase tracking-[0.14em]">
                  Division
                </th>
                <th className="px-4 py-3 font-display text-xs uppercase tracking-[0.14em]">
                  Cut-off
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-club/10">
                <td className="px-4 py-3 font-semibold">Under 7</td>
                <td className="px-4 py-3">6 or under as at 30 June 2026</td>
              </tr>
              <tr className="border-t border-club/10">
                <td className="px-4 py-3 font-semibold">Under 9</td>
                <td className="px-4 py-3">8 or under as at 30 June 2026</td>
              </tr>
              <tr className="border-t border-club/10">
                <td className="px-4 py-3 font-semibold">Under 11</td>
                <td className="px-4 py-3">10 or under as at 30 June 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Minimum age: children must be attending Pre Primary.</p>

        <h2 className="font-display text-2xl font-bold text-club">
          Fees and inclusions
        </h2>
        <p>Per child: $140 plus card fees.</p>
        <p>
          Fees are not listed separately. The total payable, including fees, is
          $145.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {inclusions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="font-display text-2xl font-bold text-club">
          Payment options
        </h2>
        <p>
          Payments must be made by debit or credit card during the registration
          process. The club cannot accept cash payments, as registrations are
          online only.
        </p>

        <h2 className="font-display text-2xl font-bold text-club">
          Playing with friends
        </h2>
        <p>
          While the club tries very hard to match children with as many friends
          as possible, the number of registrations and requests means it is not
          a guarantee.
        </p>
        <p>You are welcome to contact the registrar to discuss this further, but please remember:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Teeball is a great way for kids to have fun and make new friends.</li>
          <li>
            All committee members are volunteers and are trying their best to
            make the club run smoothly.
          </li>
        </ol>
        <p>Please be respectful.</p>

        <h2 className="font-display text-2xl font-bold text-club">
          Kidsport program
        </h2>
        <p>
          For those who are eligible, download a voucher from{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href="https://www.dlgsc.wa.gov.au/"
            target="_blank"
            rel="noreferrer"
          >
            dlgsc.wa.gov.au
          </a>
          , complete it and lodge it with the City of Stirling. If you are
          applying for the Kidsport program, let the registrar know so that a
          registration form can be completed.
        </p>

        <h2 className="font-display text-2xl font-bold text-club">
          Refund policy
        </h2>
        <p>No refunds will be given after team notification day.</p>

        <p>
          Looking for the after school clinic form? It lives at{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href="/clinic"
          >
            /clinic
          </a>
          .
        </p>
      </Article>
    </SiteFrame>
  );
}
