"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { aboutLinks, infoLinks } from "@/lib/site";

function itemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = itemActive(pathname, href);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition ${
        active ? "text-clay" : "text-cream/90 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MenuLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/"
        onClick={onNavigate}
        className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-club"
      >
        Home
      </Link>
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-clay">
          About
        </p>
        <ul className="mt-3 space-y-2">
          {aboutLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-club hover:text-clay"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/register"
        onClick={onNavigate}
        className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-club"
      >
        Register
      </Link>
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-clay">
          Information
        </p>
        <ul className="mt-3 space-y-2">
          {infoLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-club hover:text-clay"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/contact"
        onClick={onNavigate}
        className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-club"
      >
        Contact
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const aboutActive = pathname.startsWith("/about");
  const infoActive = pathname.startsWith("/information");

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--site-header)] border-b border-white/10 bg-club text-cream">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-club"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="Woodlands Teeball Club"
            width={600}
            height={613}
            priority
            className="h-12 w-auto"
          />
          <span className="font-display text-sm font-bold uppercase leading-tight tracking-[0.12em] sm:text-[0.95rem]">
            Woodlands
            <span className="block text-[0.68rem] font-semibold tracking-[0.22em] text-clay">
              Teeball
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <DesktopLink href="/">Home</DesktopLink>
          <div className="group relative">
            <DesktopLink href="/about">
              <span className={aboutActive ? "text-clay" : undefined}>About</span>
            </DesktopLink>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-2xl bg-paper p-2 text-club shadow-xl ring-1 ring-club/10">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DesktopLink href="/register">Register</DesktopLink>
          <div className="group relative">
            <DesktopLink href="/information">
              <span className={infoActive ? "text-clay" : undefined}>
                Information
              </span>
            </DesktopLink>
            <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="rounded-2xl bg-paper p-2 text-club shadow-xl ring-1 ring-club/10">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DesktopLink href="/contact">Contact</DesktopLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/register"
            className="hidden rounded-full bg-clay px-4 py-2 font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white hover:bg-[#c45618] sm:inline-flex"
          >
            Register
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className="h-0.5 w-full bg-cream" />
              <span className="h-0.5 w-full bg-cream" />
              <span className="h-0.5 w-full bg-clay" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[var(--site-header)] overflow-y-auto bg-paper px-6 py-8 lg:hidden"
        >
          <MenuLinks onNavigate={() => setOpenPath(null)} />
          <Link
            href="/register"
            onClick={() => setOpenPath(null)}
            className="mt-8 inline-flex rounded-full bg-clay px-5 py-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-white"
          >
            Register
          </Link>
        </div>
      ) : null}
    </header>
  );
}
