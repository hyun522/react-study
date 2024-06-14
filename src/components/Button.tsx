import React from 'react';
import cs from 'classnames/bind';
import style from '../scss/Button.module.scss';

interface ButtonProps {
  text: string;
  color: 'gray' | 'purple' | 'green' | 'orange' | 'red';
  type: 'button' | 'submit';
  decline?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const cx = cs.bind(style);

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  decline,
  type,
  onClick,
}) => {
  return (
    <button
      className={cx(`btn-${color}`, { 'btn-decline': decline })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
