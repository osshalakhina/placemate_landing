import {Link, useLocation} from "react-router-dom";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import {RoutesEnum} from "@/App.tsx";

const cx = classNames.bind(s);

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={cx("nav")}>
      <Link className={cx("logo")} to="/">
        Placemate
      </Link>
      <Link
        className={cx("link", {active: location.pathname === RoutesEnum.COWORKERS})}
        to={RoutesEnum.COWORKERS}
      >
        For Coworkers
      </Link>
      <Link
        className={cx("link", {active: location.pathname === RoutesEnum.BUSINESSES})}
        to={RoutesEnum.BUSINESSES}
      >
        For businesses
      </Link>
      <Link
        className={cx("link", {active: location.pathname === RoutesEnum.COWORKINGS})}
        to={RoutesEnum.COWORKINGS}
      >
        For coworkings
      </Link>
      <button>Support Ukraine</button>
    </div>
  );
};

export default Navbar;
