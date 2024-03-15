"use client";

import style from "../../app/styles/page.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import { usePathname } from "next/navigation";

export default function Service() {
  const pathname = usePathname();

  return (
    <div className="backgroundRoot">
      <div className={style.container}>
        <Navbar route={pathname}></Navbar>
        <div className={style.content}>
          <Services></Services>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
