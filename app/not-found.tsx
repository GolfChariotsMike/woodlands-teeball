import Link from "next/link";
import { SiteFrame } from "@/components/site-frame";

export default function NotFound() {
  return (
    <SiteFrame>
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold text-club">
          That page is not on the diamond
        </h1>
        <p className="mt-4 text-ink/80">
          Try the club home, registration details, or the contact page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full bg-club px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-cream"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-club px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-club"
          >
            Contact
          </Link>
        </div>
      </div>
    </SiteFrame>
  );
}
