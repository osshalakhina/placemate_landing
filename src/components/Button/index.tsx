import React, { PropsWithChildren } from "react";
import s from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

export enum ButtonColor {
  BLUE = "blue",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface ButtonProps {
  color: ButtonColor;
  size: ButtonSize;
  isFullRounded?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { size } = props;
  return (
    <button className={cx("Component", props.color, size)}>
      {props.children}
    </button>
  );
};

export default Button;
