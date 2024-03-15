import Link from "next/link";
import logo from "../assets/images/teknetiumfirma.png";
import style from "../styles/Navbar.module.css";

import Image from "next/image";
export default function Navbar(route) {
  console.log(route.route);
  return (
    <div className={style.navbarContainer}>
      <div>
        <Image src={logo} alt="logo" className={style.teknetiumLogo} />
      </div>

      <div className={style.linkContainer}>
        {route.route === "/home" || route.route === "/" ? (
          <>
            <div className={style.styledPath}>
              <Link href="/home">Home</Link>
              <div className={style.styleLine}></div>
            </div>
          </>
        ) : (
          <Link href="/home">Home</Link>
        )}
        {route.route === "/service" ? (
          <div className={style.styledPath}>
            <Link href="/service">Services</Link>
            <div className={style.styleLine}></div>
          </div>
        ) : (
          <Link href="/service">Services</Link>
        )}
        {route.route === "/contact" ? (
          <div className={style.styledPath}>
            <Link href="/contact">Contact</Link>
            <div className={style.styleLine}></div>
          </div>
        ) : (
          <Link href="/contact">Contact</Link>
        )}
        {route.route === "/aboutus" ? (
          <div className={style.styledPath}>
            <Link href="/aboutus">About Us</Link>
            <div className={style.styleLine}></div>
          </div>
        ) : (
          <Link href="/aboutus">About Us</Link>
        )}
      </div>
    </div>
  );
}
