import {useState} from 'react';
import FullInput from '../FullInput/FullInput';
import './App.css';
import s from './App.module.css';

function App() {
  const [message, setMessage] = useState([
    {message: 'Валидация на мин. и макс. кол-во символов'},
    {message: 'Предупреждение, если поле ввода заполнено, но данные не отправлены при выходе из фокуса поля ввода'},
    {message: 'Подсказка при заполнении данных по кол-ву символов'},
    {message: 'Ошибка по клику на отправку, если кол-во символов не подходит под условия и удаление ошибки по дальнейшему заполнению поля ввода'},
    {message: 'Деактивация кнопки, если в поле ввода ничего не введено'},
    {message: 'Активация кнопки, если в поле ввода введено любое кол-во символов'},
    {message: 'Наглядно показывает сколько символов уже введено'},
  ]);

  const addTask = (title: string) => {
    setMessage([...message, {message: title}]);
  }

  return (
    <div className="App">
      <h1>Умный input</h1>
      <div className="block">
        <FullInput addTask={addTask} maxLength={30} minLength={3} />
        <ul className={s.ul}>
          {message.map((m, index) => {
            return (
              <li key={index} className={s.li}>{m.message}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
