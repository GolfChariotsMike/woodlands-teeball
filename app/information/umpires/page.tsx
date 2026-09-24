import type { Metadata } from "next";
import { RoleArticle } from "@/components/role-article";
import { umpireRole } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Umpire roles",
  description: umpireRole.lede,
};

export default function UmpiresPage() {
  return <RoleArticle role={umpireRole} />;
}
