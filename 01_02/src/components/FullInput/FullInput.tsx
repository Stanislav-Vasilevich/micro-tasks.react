import {useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './FullInput.module.css';

type PropsType = {
  minLength: number
  maxLength: number
  addTask: (title: string) => void
}

const FullInput = ({minLength, maxLength, addTask}: PropsType) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChange = (title: string) => {
    setValue(title);
  }

  const addTaskHandler = () => {
    addTask(value);
    setValue('');
  }

  return (
    <div className={s.fullInput}>
      <Input onChange={onChange}
             value={value}
             error={error}
             label={'макс 30 символов'}
             setError={setError}
             placeholder={'макс 30 символов'}
             addTask={addTaskHandler}
      />
      <Button onClick={addTaskHandler}
              name={"+"}
              value={value}
              error={error}
              setError={setError}
              maxLength={maxLength}
              minLength={minLength}
      />
    </div>
  );
};

export default FullInput;
