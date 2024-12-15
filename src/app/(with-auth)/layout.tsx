import type { Metadata } from "next";
import "../globals.css";
import Side from "./Side";
import { UserStoreProvider } from "@/providers/UserProvider";

export const metadata: Metadata = {
  title: "Task Demo",
  description: "Task Demo By Roles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserStoreProvider>
      <Side />
      {children}
    </UserStoreProvider>
  );
}
