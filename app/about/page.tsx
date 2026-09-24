import type { Metadata } from "next";
import Link from "next/link";
import { Article, PageCta, PhotoBand } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Woodlands Tee-Ball was the first teeball club in WA. Boys and girls aged 5–10 play Under 7, Under 9 and Under 11.",
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <PhotoBand
        src="/gallery/fielding.jpg"
        alt="A Woodlands player fields a ground ball on the diamond"
      />
      <Article
        kicker="The club"
        title="About"
        lede="A small family-orientated club in the heart of Woodlands, and the first teeball club in WA."
      >
        <p>
          Woodlands Tee-Ball club was the first teeball club in WA and has been
          established for over 40 years. It is a small family-orientated club
          situated in the heart of Woodlands.
        </p>
        <p>
          The club caters for boys and girls from 5 to 10 years of age. There
          are three age groups: under 7, under 9 and under 11.
        </p>
        <p>
          Online registrations open in early August with a registration day for
          new members on the second Saturday of August at the Warren Lake Hall.
        </p>
        <p>
          Team notification is in September. The club conducts a development
          clinic for new under 7 players prior to the season commencing in
          October.
        </p>
        <p>
          The season consists of 15 games played in three rounds. The first two
          rounds are played from October to December and the third round is in
          January/February.
        </p>
        <p>
          Training sessions are on Woodlands Reserve. The day and time are
          dependent on the availability of the coach.
        </p>
        <p>
          Games are played at Richard Guelfi Reserve in Balcatta, City Beach
          Oval, Alderbury Reserve, Birralee Oval and Woodlands Reserve.
        </p>
        <p>
          The Woodlands Teeball Club is part of the Wembley Teeball Association
          (WTBA).
        </p>

        <h2 className="font-display text-2xl font-bold text-club">
          What is teeball?
        </h2>
        <p>
          Teeball is a sport based on a modification of baseball where there is
          no pitching, the ball is placed on an adjustable tee at home plate at
          a height suitable for the batter and the diamond is 2/3 of a baseball
          diamond. The game is limited to one hour. An innings is considered
          complete once three batters are out or nine batters have batted,
          whichever comes first.
        </p>
        <p>
          The game provides a lot of fun, with the opportunity to develop ball
          skills, hand-eye coordination and general confidence, in a jam-packed
          hour of fun.
        </p>
        <p>
          Parents assist during the game by coaching players, umpiring the
          games, scoring, managing the players and cheering on their team.
          Parents also kindly volunteer to ensure the smooth management of
          teeball.
        </p>

        <h2 className="font-display text-2xl font-bold text-club">
          Parent involvement
        </h2>
        <p>
          Our club is run entirely by volunteers; therefore, parental assistance
          is always important.
        </p>
        <p>
          On Team Allocation day your team will require nominations for a coach,
          manager, umpire and scorers, so please come prepared to sign up for
          one of these crucial roles.
        </p>
        <p>
          Coaching and umpiring courses are provided free of charge by the club
          and we encourage all coaches and umpires to take advantage of this
          resource.
        </p>
        <p>
          As always we need more helpers on the committee and we encourage you
          to give us a call and offer your services. Assistance from parents (or
          grandparents, aunties and uncles) will ensure an enjoyable competition
          for our children.
        </p>
        <p>
          Read the{" "}
          <Link
            href="/about/history"
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
          >
            club history
          </Link>{" "}
          or see{" "}
          <Link
            href="/information/coaches"
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
          >
            how teams are run
          </Link>
          .
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
