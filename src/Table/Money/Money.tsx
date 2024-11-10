import React, {FC} from 'react';
import {FilterMoneyType, MoneyType} from '../../App';

type PropsType = {
  data: Array<MoneyType>
  changeFilterMoney: (filter: FilterMoneyType) => void
}

const Money: FC<PropsType> = ({data, changeFilterMoney}) => {
  return (
    <div>
      {
        data.map((i, index) => {
          return (
            <table key={index}>
              <tbody>
              <tr>
                <th>Валюта: "{i.banknots}", </th>
                <td>количество банкнот: {i.value}, </td>
                <td>номер: {i.number}</td>
              </tr>
              </tbody>
            </table>
          )
        })
      }
      <div>
        <button onClick={() => changeFilterMoney('all')}>All</button>
        <button onClick={() => changeFilterMoney('Dollars')}>Dollars</button>
        <button onClick={() => changeFilterMoney('RUBLS')}>RUBLS</button>
      </div>
    </div>
  );
};

export default Money;
