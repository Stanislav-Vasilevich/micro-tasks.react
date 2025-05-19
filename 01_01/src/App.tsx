import {useState} from 'react';
import './App.css';
import Table from './components/Table/Table';
import Money from './components/Money/Money';
import {v1} from 'uuid';

export type CarsType = {
  id: string
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
  const topCars: CarsType[] = [
    {id: v1(), manufacturer:'BMW', model:'m5cs'},
    {id: v1(), manufacturer:'Mercedes', model:'e63s'},
    {id: v1(), manufacturer:'Audi', model:'rs6'}
  ];

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

  const changeFilter = () => {
    let arrMoney = money;

    if(filter === 'Dollars') {
      arrMoney = money.filter(m => m.banknots === 'Dollars');
    }

    if(filter === 'RUBLS') {
      arrMoney = money.filter(m => m.banknots === 'RUBLS')
    }

    return arrMoney;
  }

  const changeFilterMoney = (filter: FilterMoneyType) => {
    setFilter(filter);
  }

  return (
    <div className="App">
      <h1>Спринт 01, неделя 01:</h1>

      <div className="block">
        <h2>Задание №1</h2>
        <Table cars={topCars}/>
      </div>

      <div className="block">
        <h2>Задание №2</h2>
        <Money data={changeFilter()} changeFilterMoney={changeFilterMoney} filter={filter}/>
      </div>
    </div>
  );
}

export default App;
