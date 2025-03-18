import {useState} from 'react';
import FullInput from './components/FullInput/FullInput';

function App() {
  const [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ]);

  const addTask = (title: string) => {
    setMessage([{message: title}, ...message]);
  }

  return (
    <div className="App">
      <div className="block">
        <FullInput addTask={addTask}/>
        {message.map((m, index) => {
          return (
            <div key={index}>{m.message}</div>
          )
        })}
      </div>
    </div>
  )
}

export default App
