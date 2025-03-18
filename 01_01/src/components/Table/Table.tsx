import {FC} from 'react';
import s from './Table.module.css';
import {CarsType} from '../../App';

type PropsType = {
  cars: CarsType[]
}

const Table: FC<PropsType> = ({cars}) => {
  return (
    <table className={s.table}>
      <tbody>
      {cars.map((m, index) => {
        return (
          <tr key={index}>
            <th className={s.cell}>{m.manufacturer}</th>
            <td className={s.cell}>{m.model}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
};

export default Table;
