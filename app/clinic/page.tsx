import type { Metadata } from "next";
import { ClinicForm } from "@/components/clinic-form";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  title: "After school clinic",
  description:
    "After school clinic registration for Woodlands Teeball Club. Separate from Saturday season registration.",
};

export default function ClinicPage() {
  return (
    <SiteFrame>
      <div className="bg-cream px-4 py-10 sm:py-14">
        <ClinicForm />
      </div>
    </SiteFrame>
  );
}
