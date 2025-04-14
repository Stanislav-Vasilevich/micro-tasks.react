import {KeyboardEvent, ChangeEvent, useRef} from 'react';
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
  changeTaskStatus: (taskId: string, isDone: boolean) => void
  children: React.ReactNode
}

export const Todolist = (props: PropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addTask = () => {
    if (inputRef.current) {
      props.addTask(inputRef.current!.value);
      inputRef.current!.value = '';
    }
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input ref={inputRef}
               onKeyPress={onKeyPressHandler}/>
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {
          props.tasks.map(t => {
            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked);
            }

            const onClickHandler = () => props.removeTask(t.id)

            return <li key={t.id}>
              <input type="checkbox" checked={t.isDone} onChange={(e) => changeTaskStatusHandler(e)}/>
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
      {props.children}
    </div>
  )
}
