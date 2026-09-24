import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "@/lib/site";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-clay">
      <span className="inline-block h-[3px] w-8 bg-club" aria-hidden />
      {children}
    </p>
  );
}

export function PhotoBand({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 w-full overflow-hidden sm:h-80">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
    </div>
  );
}

export function Article({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <Kicker>{kicker}</Kicker>
      <h1 className="font-display text-4xl font-bold tracking-tight text-club sm:text-5xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-ink/80">{lede}</p>
      ) : null}
      <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
        {children}
      </div>
    </article>
  );
}

export function PageCta() {
  return (
    <aside className="mt-12 rounded-3xl bg-club px-6 py-8 text-cream sm:px-8">
      <h2 className="font-display text-2xl font-bold">Ready to get started?</h2>
      <p className="mt-2 max-w-xl text-cream/85">
        General registration is now closed. If you have a question about
        enrolment, email the club.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/register"
          className="inline-flex rounded-full bg-clay px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#c45618]"
        >
          Registration details
        </Link>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex rounded-full border border-cream/40 px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-cream hover:bg-white/10"
        >
          {EMAIL}
        </a>
      </div>
    </aside>
  );
}
