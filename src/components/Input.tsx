import React, {ChangeEvent} from 'react';

type PropsType = {
  value: string
  onChange: (title: string) => void
}

const Input = (props: PropsType) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  }

  return <input onChange={onChangeInputHandler} value={props.value}/>;
};

export default Input;
