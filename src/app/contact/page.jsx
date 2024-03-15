"use client";

import style from "../../app/styles/page.module.css";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();

  return (
    <div className="backgroundRoot">
      <div className={style.container}>
        <Navbar route={pathname}></Navbar>

        <div className={style.content}>
          <Form></Form>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
