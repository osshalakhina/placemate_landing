import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={cx("nav")}>
      <Link className={cx("logo")} to="/">
        Placemate
      </Link>
      <Link
        className={cx("link", { active: location.pathname === "/coworkers" })}
        to="/coworkers"
      >
        For Coworkers
      </Link>
      <Link
        className={cx("link", { active: location.pathname === "/businesses" })}
        to="/businesses"
      >
        For businesses
      </Link>
      <Link
        className={cx("link", { active: location.pathname === "/coworkings" })}
        to="/coworkings"
      >
        For coworkings
      </Link>
      <button>Support Ukraine</button>
    </div>
  );
};

export default Navbar;
