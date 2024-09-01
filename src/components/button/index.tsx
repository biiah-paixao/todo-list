import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
}
export default Button;