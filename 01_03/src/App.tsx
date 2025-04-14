import {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export const App = () => {
  let [tasks, setTasks] = useState([
    {id: v1(), title: 'HTML&CSS', isDone: true},
    {id: v1(), title: 'JS', isDone: true},
    {id: v1(), title: 'ReactJS', isDone: false},
    {id: v1(), title: 'Rest API', isDone: false},
    {id: v1(), title: 'GraphQL', isDone: false},
  ]);

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(t => t.id != id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let task = {id: v1(), title: title, isDone: false};
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  let [filter, setFilter] = useState<FilterValuesType>('all');

  function getFilteredTasks() {
    let tasksForTodolist = tasks;

    switch (filter) {
      case 'active':
        tasksForTodolist = tasks.filter(t => !t.isDone);
        break;
      case 'completed':
        tasksForTodolist = tasks.filter(t => t.isDone);
        break;
      default:
        return tasksForTodolist;
    }
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }

  const changeTaskStatus = (taskId: string, isDone: boolean) => {
    setTasks(tasks.map(t => t.id === taskId ? {...t, isDone} : t));
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={getFilteredTasks()}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}>
        <div>
          <div>Many interesting information</div>
        </div>
      </Todolist>
    </div>
  );
}
