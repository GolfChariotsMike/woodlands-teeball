import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="content" className="pt-[var(--site-header)]">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
