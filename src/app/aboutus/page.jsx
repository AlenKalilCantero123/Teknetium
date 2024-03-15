"use client";

import AboutInfo from "../components/AboutInfo";
import { usePathname } from "next/navigation";

import CompanyInfoBanner from "../components/CompanyInfoBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  const pathname = usePathname();

  return (
    <>
      <Navbar route={pathname}></Navbar>
      <CompanyInfoBanner></CompanyInfoBanner>
      <AboutInfo></AboutInfo>
      <Footer></Footer>
    </>
  );
}
