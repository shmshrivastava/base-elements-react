import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import FormField, { FormFieldProps } from '../FormField';
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

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const classNames = getClassName('Checkbox', componentConfig, props);
    return (
      <input {...props} type='checkbox' ref={ref} className={classNames} />
    );
  }
);

export default Checkbox;

Checkbox.displayName = 'Checkbox';

type CheckboxFieldProps = FormFieldProps & CheckboxProps;

export const CheckboxField = React.forwardRef<
  HTMLDivElement,
  CheckboxFieldProps
>((props, ref) => {
  return (
    <FormField
      ref={ref}
      label={props.label}
      labelPosition={props.labelPosition || 'right'}
      error={props.error}
      className={props.className + ' Checkbox-Container'}
    >
      <Checkbox {...props} />
    </FormField>
  );
});
