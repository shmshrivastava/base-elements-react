import * as React from 'react';
import './styles.css';
import { setThemeVariables } from './ThemeWrapper';
export { default as Button } from './Button';
export { default as TextField, Input, TextArea } from './TextField';
export { default as FormField } from './FormField';
export { default as ThemeWrapper } from './ThemeWrapper';
export { default as Checkbox, CheckboxField } from './Checkbox';
export { default as Select, SelectOption } from './Select';
export { default as Card, CardHeader, CardFooter } from './Card';
export { default as Modal, ModalHeader, ModalFooter } from './Modal';
export { default as Popover } from './Popover';
export {
  default as Text,
  InlineText,
  PageTitle,
  SectionHeading,
  SubSectionHeading,
  ComponentTitle,
  InlineCode
} from './Text';
export {
  default as Stack,
  HorizontalStack,
  VerticalStack,
  CenteredContainer
} from './Stack';
export {
  default as Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableDataCell,
  TableHeaderCell,
  HeaderTable,
  TableHeadRow
} from './Table';

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
