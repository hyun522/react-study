import React from 'react';
import cs from 'classnames/bind';
import style from '../scss/Button.module.scss';
//리액트쿼리 issuccess로  prop을 받아 loading이 작동되도록 할수 있다.

interface ButtonProps {
  text: string;
  color?: 'gray' | 'purple' | 'green' | 'orange' | 'red';
  type: 'button' | 'submit';
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const cx = cs.bind(style);

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'gray',
  loading = false,
  type,
  onClick,
}) => {
  return (
    <button
      className={cx(`btn-${color}`, {
        'btn-loading': loading,
      })}
      type={type}
      disabled={loading}
    >
      {loading ? <span className={cx('spinner')}></span> : children}
    </button>
  );
};

export default Button;