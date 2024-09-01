import style from './Empty.module.css'
export default function Empty() {
  return (
    <div className={style.container}>
      <img src="/clipboard-icon.svg" alt="clipboard-icon"  width={64} height={64}/>
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}