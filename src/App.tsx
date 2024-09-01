import Header from './components/header';
import Input from './components/input';
import Button from './components/button';
import style from './App.module.css';
import HeaderTasks from './components/header-tasks';
import { useEffect, useState } from 'react';
import Empty from './components/empty';
import ItemTask from './components/item-task';

{/* <img src="/src/assets/add-icon.svg" alt="add-icon" /> */ }

export interface TaskI {
  id: number;
  name: string;
  isChecked: boolean;
}
function App() {
  const [tasks, setTasks] = useState<TaskI[]>([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    const tasks = localStorage.getItem('tasks')
    const tasksJson = JSON.parse(tasks || '[]')
    if (tasksJson.length > 0) {
      setTasks(tasksJson)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const checkedTasksCount = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)


  const handleCreateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputTaskValue = event.target.value;
    setNewTask(inputTaskValue)
  }

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newTask) {
      return;
    }

    const newTaskObj = {
      id: tasks.length + 1,
      name: newTask,
      isChecked: false
    }

    setTasks([...tasks, newTaskObj])
    setNewTask('')
  }

  const handleCheckedTask = (id: number) => {
    const newTasks = tasks.map(task => {
      return task.id === id ? {
        ...task, isChecked: !task.isChecked
      } : task
    })
    setTasks(newTasks)
  }

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <main>
      <Header />
      <section className={style.content}>
        <div className={style.containerCreateTask}>
          <Input
            placeholder='Adicione uma nova tarefa'
            value={newTask}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleAddTask(event);
              }
            }}
            onChange={handleCreateTask} />
          <Button onClick={handleAddTask}>
            Criar <img src="/add-icon.svg" alt="add-icon" />
          </Button>
        </div>
        <div className={style.containerListItems}>
          <HeaderTasks tasksCount={tasks.length} checkedTasks={checkedTasksCount} />
          <div>
            {tasks.length > 0 ? (
              tasks.map((task) =>
                <ItemTask
                  key={task.id}
                  onRemove={handleRemoveTask}
                  onToggle={handleCheckedTask}
                  task={task} />
              )) : <Empty />}
          </div>
        </div>
      </section>
    </main>
  );
}
export default App