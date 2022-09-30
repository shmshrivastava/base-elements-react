import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Checkbox.css';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
  label?: string;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    disabled: { type: 'boolean', default: false }
  }
};

export const Checkbox = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CheckboxProps>
>((props, ref) => {
  const classNames = getClassName('Checkbox', componentConfig, props);
  return (
    <div ref={ref} className={classNames}>
      <input {...props} type='checkbox'>
        {props.children}
      </input>
    </div>
  );
});

export default Checkbox;

Checkbox.displayName = 'Checkbox';
