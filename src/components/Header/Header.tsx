import React from "react";
import style from "./Header.module.scss";
import profile from "../../assets/img/profile.svg";
import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/search.svg";
import { Link } from "react-router";

type Props = {};

function Header({}: Props) {
  return (
    <div className={style.root}>
      <img src={logo} alt="" />
      <nav className={style.nav}>
        <Link to="/" className={style.nav_item}>
          Home
        </Link>
        <Link to="/contact" className={style.nav_item}>
          Contact
        </Link>
      </nav>
      <div className={style.right}>
        <img src={search} alt="" />
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Header;
