import type { Metadata } from "next";
import { RoleArticle } from "@/components/role-article";
import { managerRole } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Manager roles",
  description: managerRole.lede,
};

export default function ManagerRolesPage() {
  return <RoleArticle role={managerRole} />;
}
