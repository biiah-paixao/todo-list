import style from './Header.module.css'
export default function Header() {
  return (
    <header className={style.container}>
      <h1>To-do List</h1>
      {/* <img src="/vite.svg" alt="Logo"  width={64} height={64}/> */}
    </header>
  );
}