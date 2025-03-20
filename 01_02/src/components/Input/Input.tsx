import {ChangeEvent, KeyboardEvent} from 'react';
import s from './Input.module.css';

type PropsType = {
  value: string
  error: string
  label: string
  placeholder: string
  onChange: (title: string) => void
  setError: (error: string) => void
  addTask: () => void
}

const Input = (props: PropsType) => {
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  }

  const setErrorHandler = () => {
    props.setError('');
  }

  const onBlurHandler = () => {
    if(props.value.length > 0) {
      props.setError('Вы не отправили данные!');
    }
  }

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.addTask();
    }
  }

  return (
    <label className={s.label}>
      <input className={s.input}
             onChange={onChangeInputHandler}
             placeholder={props.placeholder}
             value={props.value}
             onInput={setErrorHandler}
             onBlur={onBlurHandler}
             onKeyPress={(e) => onKeyPress(e)}
      />
      <span className={s.error}>{props.error && props.error}</span>
      <span className={s.labelText}>{props.value.length > 0 && !props.error ? `${props.label}, вы ввели ${props.value.length}` : ''}</span>
    </label>
  );
};

export default Input;
