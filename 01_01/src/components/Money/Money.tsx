import {FC} from 'react';
import {FilterMoneyType, MoneyType} from '../../App';
import s from './Money.module.css';

type PropsType = {
  data: Array<MoneyType>
  changeFilterMoney: (filter: FilterMoneyType) => void
  filter: FilterMoneyType
}

const Money: FC<PropsType> = ({data, changeFilterMoney, filter}) => {
  const filterAll = filter === 'all' ? `${s.button} ${s.active}` : s.button;
  const filterDollars = filter === 'Dollars' ? `${s.button} ${s.active}` : s.button;
  const filterRUBLS = filter === 'RUBLS' ? `${s.button} ${s.active}` : s.button;
  return (
    <div>
      <table className={s.table}>
        <tbody>
        {
          data.map((i, index) => {
            return (
              <tr key={index}>
                <th>Валюта: "{i.banknots}",</th>
                <td>количество банкнот: {i.value},</td>
                <td>номер: {i.number}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <div className={s.buttons}>
        <button className={filterAll} onClick={() => changeFilterMoney('all')}>All</button>
        <button className={filterDollars} onClick={() => changeFilterMoney('Dollars')}>Dollars</button>
        <button className={filterRUBLS} onClick={() => changeFilterMoney('RUBLS')}>RUBLS</button>
      </div>
    </div>
  );
};

export default Money;
