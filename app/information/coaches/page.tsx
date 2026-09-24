import type { Metadata } from "next";
import { RoleArticle } from "@/components/role-article";
import { coachRole } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Coach roles",
  description: coachRole.lede,
};

export default function CoachesPage() {
  return <RoleArticle role={coachRole} />;
}
