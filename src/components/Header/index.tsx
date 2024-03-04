import { Link, useLocation } from "react-router-dom";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { RoutesEnum } from "@/App.tsx";

const cx = classNames.bind(s);

const Header = () => {
  const location = useLocation();

  return (
    <div className={cx("header")}>
      <Link className={cx("logo")} to="/">
        Placemate
      </Link>
      <Link
        className={cx("link", {
          active: location.pathname === RoutesEnum.COWORKERS,
        })}
        to={RoutesEnum.COWORKERS}
      >
        For coworkers
      </Link>
      <Link
        className={cx("link", {
          active: location.pathname === RoutesEnum.BUSINESSES,
        })}
        to={RoutesEnum.BUSINESSES}
      >
        For businesses
      </Link>
      <Link
        className={cx("link", {
          active: location.pathname === RoutesEnum.COWORKINGS,
        })}
        to={RoutesEnum.COWORKINGS}
      >
        For coworkings
      </Link>

      <button className={cx("headerBtn")}>
        Support Ukraine <span className={cx("headerFlag")}>🇺🇦</span>
      </button>
      <p className={cx("currency")}>USD</p>
      <img
        className={cx("headerLang")}
        src="/images/flag.png"
        alt="language"
      ></img>
      <div className={cx("vertical-line")}></div>
      <img
        className={cx("headerAva")}
        src="/images/avatar.png"
        alt="avatar"
      ></img>

      <img className={cx("arrow-down")} src="/images/arrow.png"></img>
    </div>
  );
};

export default Header;
