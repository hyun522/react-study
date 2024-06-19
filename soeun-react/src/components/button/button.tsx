import { ReactNode } from "react";
type Color= 'red'|'blue'|'green'| 'yellow'|'purple';
import styles from"./button.module.scss";
interface ButtonProps{
  children:ReactNode;
  className?:string;
  small?:boolean;
  middle?:boolean
  color?:Color;
  disabled:boolean;
  
}
export default function Button({children,className = "",disabled=false,small=false, middle=false ,color='red'}:ButtonProps){
  return(<>
  <button color={color} disabled={disabled}className={`${styles.buttonWrapper}${className} ${styles[color]} ${small ? styles.small : ""}
  ${middle ? styles.middle:""}`}>
  {children}
  </button>

  </>)
}