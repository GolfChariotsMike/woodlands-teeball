import Image from "next/image";
import Link from "next/link";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Kicker } from "@/components/article";
import { ADDRESS, EMAIL, gallery, sponsors } from "@/lib/site";

export function HomeSections() {
  return (
    <div id="content" className="bg-cream">
      <section className="border-b border-club/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
          <Kicker>Registration</Kicker>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-club sm:text-4xl">
            General registration is now closed
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            If you have any questions about enrolment, contact the club at{" "}
            <a
              className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16">
        <Kicker>Upcoming events</Kicker>
        <article className="mt-2 grid gap-6 rounded-[2rem] bg-club p-6 text-cream sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
          <div className="sm:pr-8 sm:text-center">
            <p className="font-display text-6xl font-bold leading-none text-clay">
              15
            </p>
            <p className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.18em]">
              October 2026
            </p>
          </div>
          <div className="border-t border-white/15 pt-6 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
            <h2 className="font-display text-3xl font-bold">Coaching session</h2>
            <p className="mt-2 text-lg text-cream/80">Details TBA.</p>
          </div>
        </article>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Kicker>About the club</Kicker>
            <h2 className="font-display text-3xl font-bold tracking-tight text-club sm:text-4xl">
              First tee-ball club in WA
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
              <p>
                Woodlands Tee-Ball is a family-orientated club situated in the
                heart of Woodlands and we were the first tee-ball club in WA.
              </p>
              <p>
                Tee-ball is a lot of fun, and as batters hit the ball off a tee,
                an opportunity for rapid improvement in ball skills, hand-eye
                coordination and general confidence.
              </p>
              <p>
                The club caters for boys and girls 5–10 years old. There are
                three age groups: an Under 7s division, an Under 9s division and
                an Under 11s division.
              </p>
              <p>
                The season consists of 15 games played in 3 rounds, with the
                first two rounds running from October to December and the third
                round in February and March. The club competes within the
                Wembley Tee-Ball Association and games may be played at City
                Beach, Floreat, Innaloo, Balcatta or Woodlands. Games are played
                on Saturday mornings with Under 7 and Under 9 teams scheduled
                for 8:30am and Under 11 teams playing at 10:15am.
              </p>
              <p className="font-semibold text-club">
                Parent participation is vital and teams cannot function properly
                without parental support.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex font-display text-xs font-bold uppercase tracking-[0.16em] text-clay underline decoration-clay/40 underline-offset-4"
            >
              More about the club
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-club shadow-xl">
            <Image
              src="/gallery/fielding.jpg"
              alt="A Woodlands player fields a ground ball on the diamond"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Kicker>On the diamond</Kicker>
          <h2 className="font-display text-3xl font-bold text-club">
            Saturday mornings at the club
          </h2>
        </div>
        <ul
          className="mt-8 flex gap-4 overflow-x-auto px-5 pb-2 sm:px-6"
          aria-label="Club game photos"
        >
          {gallery.map((photo) => (
            <li
              key={photo.src}
              className="relative h-56 w-72 shrink-0 overflow-hidden rounded-3xl bg-club sm:h-64 sm:w-80"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="320px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-club/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>Sponsors</Kicker>
              <h2 className="font-display text-3xl font-bold text-club">
                Proudly supported
              </h2>
            </div>
            <Link
              href="/about/sponsors"
              className="font-display text-xs font-bold uppercase tracking-[0.16em] text-clay"
            >
              All sponsors
            </Link>
          </div>
          <div className="mt-8">
            <SponsorGrid sponsors={sponsors} />
          </div>
        </div>
      </section>

      <section className="bg-clay text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Come and play.
            </h2>
            <p className="mt-2 text-white/90">{ADDRESS}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="inline-flex rounded-full bg-club px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-cream hover:bg-[#01281b]"
            >
              Register
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/70 px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
