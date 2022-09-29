import * as React from 'react';
import './styles.module.css';
import { setThemeVariables } from './ThemeWrapper';
export { default as Button } from './Button';
export { default as TextField } from './TextField';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className='test'>Example Component: {text}</div>;
};

setThemeVariables([], 'default');
