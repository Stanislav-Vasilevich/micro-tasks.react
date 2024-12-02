import React, {ChangeEvent, FC, useState} from 'react';

type PropsType = {
  addTask: (title: string) => void
}

const FullInput: FC<PropsType> = (props) => {
  const [title, setTitle] = useState('');

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const addTaskHandler = () => {
    props.addTask(title);
    setTitle('');
  }

  return (
    <div>
      <input type="text" onChange={onChangeInputHandler} value={title}/>
      <button onClick={addTaskHandler}>+</button>
    </div>
  );
};

export default FullInput;
