import style from './Header-Tasks.module.css'

interface HeaderTasksProps {
  tasksCount: number;
  checkedTasks: number;
}

const HeaderTasks = ({tasksCount, checkedTasks}: HeaderTasksProps) => {
  return (
    <header className={style.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCount}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCount === 0
            ? tasksCount
            : `${checkedTasks} de ${tasksCount}`}
        </span>
      </aside>
    </header>
  );
};
export default HeaderTasks;