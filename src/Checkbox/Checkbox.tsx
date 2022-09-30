import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Checkbox.css';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    appearance: { type: 'value', default: 'primary' },
    loading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false }
  }
};

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<CheckboxProps>
>((props, ref) => {
  const classNames = getClassName('Checkbox', componentConfig, props, 'dumb');
  return (
    <input ref={ref} {...props} className={classNames} type='checkbox'>
      {props.children}
    </input>
  );
});

export default Checkbox;

Checkbox.displayName = 'Checkbox';
