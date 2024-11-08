import React from 'react';
import './App.css';

function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

  return (
    <div className="App">
      <table>
        <thead></thead>
        <tbody>
        {topCars.map((m, index) => {
          return (
            <tr key={index}>
              <th>{m.manufacturer}</th>
              <td>{m.model}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
