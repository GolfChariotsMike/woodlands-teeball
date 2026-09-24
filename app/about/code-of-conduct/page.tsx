import type { Metadata } from "next";
import { Article } from "@/components/article";
import { SiteFrame } from "@/components/site-frame";
import { codes } from "@/lib/conduct";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Code of conduct",
  description:
    "Codes of behaviour for players, parents, coaches, officials, administrators and spectators at Woodlands Teeball Club.",
};

export default function CodeOfConductPage() {
  return (
    <SiteFrame>
      <Article
        kicker="How we play"
        title="Code of conduct"
        lede="Tee-ball at Woodlands is for the children. These codes set out what the club expects of players, families, coaches, officials, administrators and spectators."
      >
        <div className="space-y-3">
          {codes.map((code, index) => (
            <details
              key={code.title}
              open={index === 0}
              className="rounded-3xl bg-paper ring-1 ring-club/10"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-display text-lg font-bold text-club">
                {code.title}
              </summary>
              <ol className="list-decimal space-y-2 px-5 pb-5 pl-10 text-base">
                {code.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </details>
          ))}
        </div>
        <p>
          Questions about the code, including video of games, can go to{" "}
          <a
            className="font-semibold text-club underline decoration-clay decoration-2 underline-offset-4"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
          .
        </p>
      </Article>
    </SiteFrame>
  );
}
