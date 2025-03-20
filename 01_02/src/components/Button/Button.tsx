import s from './Button.module.css';

type PropsType = {
  onClick: () => void
  name: string
  value: string
  error: string
  maxLength: number
  minLength: number
  setError: (error: string) => void
}

const Button = (props: PropsType) => {
  const onClickHandler = () => {
    if(props.value.length < props.minLength) {
      props.setError(`мин ${props.minLength} символов`);
    } else if(props.value.length > props.maxLength) {
      props.setError(`макс ${props.maxLength} символов, вы ввели ${props.value.length}`);
    } else {
      props.onClick();
      props.setError('');
    }
  }

  return (
    <button
      className={props.value.length < 1 ? `${s.button} ${s.button_disabled}` : s.button}
      onClick={onClickHandler}
      disabled={props.value.length < 1}
    >
      {props.name}
    </button>
  )
};

export default Button;
