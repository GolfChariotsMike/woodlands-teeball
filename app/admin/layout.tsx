import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Woodlands Teeball clinic registration admin.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
