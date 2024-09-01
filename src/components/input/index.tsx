import style from './Input.module.css'

const Input = (props: React.InputHTMLAttributes<HTMLInputElement> ) => {
  return (
    <input 
      className={style.input}
      {...props} 
    />
  );
}
export default Input;