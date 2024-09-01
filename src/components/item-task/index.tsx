import { TaskI } from '../../App';
import style from './Item.module.css'

interface ItemTaskProps {
  task: TaskI
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}
const ItemTask = ({ task, onRemove, onToggle }: ItemTaskProps) => {
  const checkboxClassName = task.isChecked ? style['checkbox-checked'] : style['checkbox-unchecked']

  return (
    <div className={`${style.container} ${task.isChecked ? style.checked : ''}`}>
      <div className={style.content}>
        <div onClick={() => onToggle(task.id)}>
          <input readOnly type="checkbox" checked={task.isChecked} />
          <span className={`${style.checkbox} ${checkboxClassName}`}>
            {task.isChecked && <img src="/check-icon.svg" alt="" />}
          </span>
        </div>
        <span>
          {task.name}
        </span>
      </div>
      <button className={style.buttonRemove} onClick={() => onRemove(task.id)}>
        <img src="/trash-icon.svg" alt="" />
      </button>
    </div>
  );
}
export default ItemTask;