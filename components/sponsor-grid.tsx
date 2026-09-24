import Image from "next/image";
import type { Sponsor } from "@/lib/site";

export function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {sponsors.map((sponsor) => {
        const card = (
          <figure className="flex h-40 flex-col items-center justify-center rounded-2xl bg-white px-4 py-3 text-center shadow-sm ring-1 ring-club/5">
            <Image
              src={sponsor.src}
              alt=""
              width={sponsor.width}
              height={sponsor.height}
              className="max-h-16 w-auto max-w-full object-contain"
              style={{ width: "auto", height: "3.5rem" }}
            />
            <figcaption className="mt-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-club">
              {sponsor.name}
            </figcaption>
          </figure>
        );
        return (
          <li key={sponsor.name}>
            {sponsor.href ? (
              <a
                href={sponsor.href}
                target="_blank"
                rel="noreferrer"
                aria-label={sponsor.name}
                className="block transition hover:-translate-y-0.5"
              >
                {card}
              </a>
            ) : (
              card
            )}
          </li>
        );
      })}
    </ul>
  );
}
