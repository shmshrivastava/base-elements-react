import * as React from 'react';
import './styles.css';
import { setThemeVariables } from './ThemeWrapper';
export { default as Button } from './Button';
export { default as TextField, Input, TextArea } from './TextField';
export { default as FormField } from './FormField';
export { default as ThemeWrapper } from './ThemeWrapper';
export { default as Checkbox, CheckboxField } from './Checkbox';
export { default as Select, SelectOption } from './Select';
export { default as Card } from './Card';
export { default as Popover } from './Popover';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className='test'>Example Component: {text}</div>;
};

function getInitialRootVars() {
  const root =
    document.querySelector<HTMLElement>(':root') || document.documentElement;
  const rootVars: string[] = [];
  for (let i = 0; i < root.style.length; i++) {
    rootVars.push(root.style[i]);
  }
  return rootVars;
}

function init() {
  window.BaseElementsReact = {
    initialRootVars: getInitialRootVars()
  };

  setThemeVariables([], 'default');
}

init();
