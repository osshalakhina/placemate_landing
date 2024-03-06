import React from "react";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { RoutesEnum } from "@/App.tsx";
import Button, { ButtonColor, ButtonSize } from "@/components/Button";

const cx = classNames.bind(s);

const Businesses = () => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("main-image")}
        src="/images/header-businesses.png"
        alt="banner"
      ></img>
      <h1 className={cx("main-text")}>
        Provide your team with a comfortable workspace anywhere in Europe!
      </h1>
      <Button color={ButtonColor.BLUE} size={ButtonSize.MEDIUM}>
        Let's start!
      </Button>
    </div>
  );
};

export default Businesses;
