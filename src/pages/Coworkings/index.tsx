import s from "./index.module.scss";
import classNames from "classnames/bind";
import { RoutesEnum } from "@/App.tsx";
import Button, { ButtonColor, ButtonSize } from "@/components/Button";

const cx = classNames.bind(s);

const Coworkings = () => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("main-image")}
        src="/images/header-coworkings.png"
        alt="banner"
      ></img>
      <h1 className={cx("main-text")}>
        List your coworking and get new customers today!
      </h1>
      <Button color={ButtonColor.BLUE} size={ButtonSize.MEDIUM}>
        Let's start!
      </Button>
    </div>
  );
};

export default Coworkings;
