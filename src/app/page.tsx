import Image from "next/image";
import Dashboard from "./dashboard/page";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";

export default function Home() {
  return (
    <>
      <Header />
      <SideMenu />
      <Dashboard />
      <Login />
    </>
  );
}
