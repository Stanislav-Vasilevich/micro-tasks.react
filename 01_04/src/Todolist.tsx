import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
  onChangeStatus: (taskId: string, isDone: boolean) => void
}

export const Todolist = (props: PropsType) => {
  let [title, setTitle] = useState('')

  const addTask = () => {
    props.addTask(title);
    setTitle('');
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addTask();
    }
  }

  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');

  return <div>
    <h3>{props.title}</h3>
    <div>
      <input value={title}
             onChange={onChangeHandler}
             onKeyUp={onKeyPressHandler}
      />
      <button onClick={addTask}>+</button>
    </div>
    <ul>
      {
        props.tasks.map(t => {

          const onClickHandler = () => props.removeTask(t.id)

          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeStatus(t.id, e.currentTarget.checked)
          }

          return (
            <li key={t.id}>
              <input type="checkbox" checked={t.isDone} onChange={onChangeStatusHandler}/>
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          )
        })
      }
    </ul>
    <div>
      <button onClick={onAllClickHandler}>All</button>
      <button onClick={onActiveClickHandler}>Active</button>
      <button onClick={onCompletedClickHandler}>Completed</button>
    </div>
  </div>
}
