import React, {FC} from 'react';
import {CarsType} from '../App';

type PropsType = {
  cars: CarsType[]
}

const Table: FC<PropsType> = ({cars}) => {
  return (
    <table>
      <thead></thead>
      <tbody>
      {cars.map((m, index) => {
        return (
          <tr key={index}>
            <th>{m.manufacturer}</th>
            <td>{m.model}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
};

export default Table;
