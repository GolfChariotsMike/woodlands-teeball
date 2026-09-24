import type { Metadata } from "next";
import { Article, PageCta, PhotoBand } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { PRESIDENT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "History",
  description:
    "Tee-ball started in Western Australia in July 1974 at Woodlands Reserve. Woodlands was one of the clubs formed in 1978.",
};

export default function HistoryPage() {
  return (
    <SiteFrame>
      <PhotoBand
        src="/gallery/running.jpg"
        alt="Young players in green Woodlands uniforms running between bases"
      />
      <Article
        kicker="Since 1974"
        title="History"
        lede="Tee-ball in Western Australia began at Woodlands Reserve."
      >
        <p>
          Tee-Ball commenced in Western Australia in July 1974 when the Wembley
          Baseball Club had their first information day at Woodlands Reserve on
          Teakwood Avenue. On that day a mere 6 players turned up and it looked
          as though they would be struggling to get one team together. By the
          time the season commenced in October 1974 a total of 7 teams had
          entered the competition.
        </p>
        <p>
          Between 1975 and 1977 a lot of people worked extremely hard to promote
          the game throughout Perth and Western Australia. Thanks to the
          dedication of families, this resulted in over 30 clubs forming. By the
          mid-1990s, over 12,000 children were playing tee-ball in the
          Metropolitan Area and over 5,000 playing tee-ball in country areas.
        </p>
        <p>
          In 1978, with 46 teams registered at Woodlands Reserve and problems
          finding training areas, it was decided to form clubs and split the
          players into the areas that they lived in. From this, the following
          clubs were formed:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Woodlands</li>
          <li>Scarborough</li>
          <li>City Beach</li>
          <li>West Stirling</li>
          <li>Balcatta</li>
        </ul>
        <p>This was a good move as there were 98 teams the next year.</p>
        <p>
          In 1978, the Tee-Ball Association of Western Australia was formed to
          promote and administer the sport of tee-ball and unify coaching and
          umpiring administration procedures. The Tee-Ball Association of
          Western Australia was also formed to run the Tee-Ball State
          Championships each year.
        </p>
        <p>
          And here we are, nearly 50 years later. The Wembley Tee-Ball
          Association, the Tee-Ball Association of Western Australia and the
          Woodlands Tee-Ball Club still have their headquarters at the Warren
          Lake Hall at Woodlands Reserve.
        </p>
        <p>
          With thousands of children playing nearly every weekend throughout
          summer, teeball has become a part of how West Australian parents show
          their kids how to participate in a team sport, make new friends and
          have fun.
        </p>
        <p>
          We are a not-for-profit organisation and every dollar the club raises
          goes back into supporting the kids and keeping the club going.
        </p>
        <p>
          We’d like to say a big thank you to the Woodlands community for your
          support over the last 5 decades. We hope to continue providing kids
          with a fun and safe community sport for another 50.
        </p>
        <h2 className="font-display text-2xl font-bold text-club">
          Wondering how to get involved?
        </h2>
        <p>
          All local sporting clubs rely on volunteers and Woodlands Teeball is
          no exception. From coaches, umpires, managers and the committee, every
          little bit of help counts. Contact the club president to see how you
          can contribute:{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${PRESIDENT_EMAIL}`}
          >
            {PRESIDENT_EMAIL}
          </a>
          .
        </p>
        <PageCta />
      </Article>
    </SiteFrame>
  );
}
