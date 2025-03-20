import {FC, useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import s from './FullInput.module.css';

type PropsType = {
  addTask: (title: string) => void
}

const FullInput: FC<PropsType> = (props) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const onChange = (title: string) => {
    setValue(title);
  }

  const addTask = () => {
    props.addTask(value);
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
             addTask={addTask}
      />
      <Button onClick={addTask}
              name={"+"}
              value={value}
              setError={setError}
              maxLength={30}
              minLength={2}
      />
    </div>
  );
};

export default FullInput;
