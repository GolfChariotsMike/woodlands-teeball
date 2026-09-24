import type { Metadata } from "next";
import { RoleArticle } from "@/components/role-article";
import { scorerRole } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Scorer roles",
  description: scorerRole.lede,
};

export default function ScorerRolesPage() {
  return <RoleArticle role={scorerRole} />;
}
