import React from 'react';

type PropsType = {
  onClick: () => void
  name: string
}

const Button = (props: PropsType) => {
  const callBackHandler = () => {
    props.onClick();
  }

  return <button onClick={callBackHandler}>{props.name}</button>;
};

export default Button;
