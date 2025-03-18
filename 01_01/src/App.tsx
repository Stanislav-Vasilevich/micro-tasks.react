import React, {useState} from 'react';
import './App.css';
import Table from './Table/Table';
import Money from './Table/Money/Money';
import FullInput from './components/FullInput';

export type CarsType = {
  manufacturer: string
  model: string
}

export type MoneyType = {
  banknots: string
  value: number
  number: string
}

export type FilterMoneyType = 'all' | 'Dollars' | 'RUBLS';

function App() {
  const money = [
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ];

  const [filter, setFilter] = useState<FilterMoneyType>('all');

  const topCars: Array<CarsType> = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ];

  const [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ]);

  let arrMoney = money;

  if(filter === 'Dollars') {
    arrMoney = money.filter(m => m.banknots === 'Dollars');
  }

  if(filter === 'RUBLS') {
    arrMoney = money.filter(m => m.banknots === 'RUBLS')
  }

  const changeFilterMoney = (filter: FilterMoneyType) => {
    setFilter(filter);
  }

  const addTask = (title: string) => {
    setMessage([{message: title}, ...message]);
  }

  return (
    <div className="App">
      <Table cars={topCars}/>
      <Money data={arrMoney} changeFilterMoney={changeFilterMoney}/>
      <FullInput addTask={addTask}/>
      {message.map((m, index) => {
        return (
          <div key={index}>{m.message}</div>
        )
      })}
    </div>
  );
}

export default App;
