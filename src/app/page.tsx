"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Dashboard from "./dashboard/page";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      {session && (
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login />
    </>
  );
}
