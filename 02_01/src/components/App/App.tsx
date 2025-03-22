import {useState} from 'react';
import './App.css';
import {Todolist} from '../../Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}

function App() {
  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'completed'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ]);

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS', isDone: false},
      {id: v1(), title: 'Rest API', isDone: false},
      {id: v1(), title: 'GraphQL', isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: 'Milk', isDone: true},
      {id: v1(), title: 'Meet', isDone: false},
      {id: v1(), title: 'Bread', isDone: false},
      {id: v1(), title: 'Water', isDone: true},
    ]
  });

  function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
    const newTasks = tasks[todolistId].map(t => t.id === taskId ? {...t, isDone} : t);

    setTasks({...tasks, [todolistId]: newTasks});
  }

  function removeTask(todolistId: string, taskId: string) {
    const newTasks = tasks[todolistId].filter(t => t.id !== taskId);
    setTasks({...tasks, [todolistId]: newTasks});
  }

  function addTask(todolistId:string, title: string) {
    const newTask = {id: v1(), title, isDone: false};
    setTasks({...tasks, [todolistId]: [...tasks[todolistId], newTask]});
  }

  const changeFilter = (todolistId: string, filter: FilterValuesType) => {
    const newTodolist = todolists.map(t => t.id === todolistId ? {...t, filter} : t);

    setTodolists([...newTodolist]);
  }

  return (
    <div className="App">
      {
        todolists.map(t => {
          let tasksFilter = tasks[t.id];

          if(t.filter === 'active') {
            tasksFilter = tasks[t.id].filter(t => t.isDone);
          }

          if(t.filter === 'completed') {
            tasksFilter = tasks[t.id].filter(t => !t.isDone);
          }

          return (
            <Todolist
              key={t.id}
              todolistId={t.id}
              title={t.title}
              tasks={tasksFilter}
              removeTask={removeTask}
              filter={t.filter}
              addTask={addTask}
              changeTaskStatus={changeStatus}
              setTodolists={setTodolists}
              changeFilter={changeFilter}
            />
          )
        })
      }
    </div>
  );
}

export default App;
