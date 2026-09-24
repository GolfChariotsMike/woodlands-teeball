import Image from "next/image";
import Link from "next/link";
import { aboutLinks, ADDRESS, EMAIL, FACEBOOK_HREF, infoLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-club text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo.png"
              alt=""
              width={600}
              height={613}
              className="h-14 w-auto"
            />
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
              Woodlands Teeball Club
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/80">
            The first tee-ball club in WA. A family club at Woodlands Reserve
            for boys and girls aged 5–10.
          </p>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-clay">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            {aboutLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/register" className="hover:text-white">
                Register
              </Link>
            </li>
            <li>
              <Link href="/information" className="hover:text-white">
                Information
              </Link>
            </li>
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/clinic" className="text-cream/80 hover:text-white">
                After school clinic
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-clay">
            Get in touch
          </p>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
            <p>
              <a className="hover:text-white" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <p>{ADDRESS}</p>
            <p>
              <a
                className="hover:text-white"
                href={FACEBOOK_HREF}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© Woodlands Teeball Club</p>
          <p>
            Powered by{" "}
            <a
              href="https://manyhandz.ai"
              className="underline decoration-white/30 underline-offset-2 hover:text-cream"
            >
              manyhandz.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
