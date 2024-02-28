import React from "react";
import style from "../styles/Navbar.module.css";
import search from "../assets/search-svgrepo-com.svg";
import logo from "../assets/logo.png";

import Image from "next/image";
export default function Navbar() {
  return (
    <div className={style.navbarContainer}>
        <Image src={logo} alt={"logo"} height={85} width={145} />
      <div className={style.searchContainer}>
        <input className={style.searchInput} />
        <button className={style.searchBtn}>
          {" "}
          <Image src={search} alt={""} height={25} width={25} />
        </button>
      </div>
      <div className={style.linkContainer}>
        <div>About Us</div>
        <div>Contact</div>
        <div>Services</div>
      </div>
    </div>
  );
}
