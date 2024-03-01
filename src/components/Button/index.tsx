import React, {PropsWithChildren} from 'react';
import s from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);


export enum ButtonColor {
  BLUE = 'blue',
  RED = 'red'
}


interface ButtonProps {
  color: ButtonColor
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cx('Component', props.color)}>
      {props.children}
    </button>
  );
};

export default Button;