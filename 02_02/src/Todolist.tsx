import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';

type PropsType = {
  id: string
  title: string
  tasks: TasksType[]
  removeTask: (payload: {todolistId: string, taskId: string}) => void
  changeFilter: (payload: { todolistId: string, filter: FilterValuesType }) => void
  addTask: (payload: {todolistId: string, title: string}) => void
  changeTaskStatus: (payload: {todolistId: string, taskId: string, isDone: boolean}) => void
  removeTodolist: (todolistId: string) => void
  filter: FilterValuesType
}

export const Todolist = (props: PropsType) => {
  let [title, setTitle] = useState('')
  let [error, setError] = useState<string | null>(null)

  const addTask = () => {
    let newTitle = title.trim();
    if (newTitle !== '') {
      props.addTask({todolistId: props.id, title: newTitle});
      setTitle('');
    } else {
      setError('Title is required');
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.code === 'Enter') {
      addTask();
    }
  }

  const removeTodolist = () => props.removeTodolist(props.id)

  const onAllClickHandler = () => props.changeFilter({todolistId: props.id, filter: 'all'});
  const onActiveClickHandler = () => props.changeFilter({todolistId: props.id, filter: 'active'});
  const onCompletedClickHandler = () => props.changeFilter({todolistId: props.id, filter: 'completed'});

  return <div>
    <h3> {props.title}
      <button onClick={removeTodolist}>x</button>
    </h3>
    <div>
      <input value={title}
             onChange={onChangeHandler}
             onKeyUp={onKeyPressHandler}
             className={error ? 'error' : ''}
      />
      <button onClick={addTask}>+</button>
      {error && <div className="error-message">{error}</div>}
    </div>
    <ul>
      {
        props.tasks.map(t => {
          const onClickHandler = () => props.removeTask({todolistId: props.id, taskId: t.taskId})
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;

            props.changeTaskStatus({todolistId: props.id, taskId: t.taskId, isDone: newIsDoneValue});
          }

          return (
            <li key={t.taskId} className={t.isDone ? 'is-done' : ''}>
              <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          )
        })
      }
    </ul>
    <div>
      <button className={props.filter === 'all' ? 'active-filter' : ''}
              onClick={onAllClickHandler}>All
      </button>
      <button className={props.filter === 'active' ? 'active-filter' : ''}
              onClick={onActiveClickHandler}>Active
      </button>
      <button className={props.filter === 'completed' ? 'active-filter' : ''}
              onClick={onCompletedClickHandler}>Completed
      </button>
    </div>
  </div>
}
