import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import FormField, { FormFieldProps } from '../FormField';
import './Checkbox.css';

interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
  label?: string;
  checked?: boolean;
  sizeVariant?: 'normal' | 'large' | string;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    disabled: { type: 'boolean', default: false },
    checked: { type: 'boolean', default: false },
    sizeVariant: { type: 'value' }
  }
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const classNames = getClassName('Checkbox', componentConfig, props);
    const renderProps = { ...props };
    delete renderProps.sizeVariant;
    return (
      <input
        {...renderProps}
        type='checkbox'
        ref={ref}
        className={classNames}
      />
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
      required={props.required}
      className={`${props.className || ''} Checkbox-Container`}
    >
      <Checkbox {...props} />
    </FormField>
  );
});
