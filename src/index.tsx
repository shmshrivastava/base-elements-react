import * as React from 'react';
import './styles.module.css';
import { setThemeVariables } from './ThemeWrapper';
export { default as Button } from './Button';
export { default as TextField } from './TextField';
export { default as FormElement } from './FormElement';
export { default as ThemeWrapper } from './ThemeWrapper';
export { default as Checkbox } from './Checkbox';

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
