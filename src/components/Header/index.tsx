import { Link, useLocation } from "react-router-dom";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { RoutesEnum } from "@/App.tsx";

const cx = classNames.bind(s);

const Header = () => {
  const location = useLocation();

  return (
    <header className={cx("Component")}>
      <div className={cx("container", "Header")}>
        <Link className={cx("logo")} to="/">
          Placemate
        </Link>
        <div className={cx("List")}>
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
        </div>

        <button className={cx("headerBtn")}>
          <div className={cx("headerBtnInner")}>
            Support Ukraine <span className={cx("headerFlag")}>🇺🇦</span>
          </div>
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
    </header>
  );
};

export default Header;
