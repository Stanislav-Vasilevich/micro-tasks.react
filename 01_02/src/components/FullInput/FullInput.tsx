import {FC, useState} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

type PropsType = {
  addTask: (title: string) => void
}

const FullInput: FC<PropsType> = (props) => {
  const [value, setValue] = useState('');

  const onChange = (title: string) => {
    setValue(title);
  }

  const addTask = () => {
    props.addTask(value);
    setValue('');
  }

  return (
    <div>
      <Input onChange={onChange} value={value}/>
      <Button onClick={addTask} name={"+"}/>
    </div>
  );
};

export default FullInput;
