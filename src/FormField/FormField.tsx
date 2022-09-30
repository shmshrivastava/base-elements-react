import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './FormField.css';

export interface FormFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  label?: string;
  error?: string;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    error: { type: 'boolean', default: false },
    label: { type: 'boolean', default: false }
  }
};

export const FormField = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FormFieldProps>
>((props, ref) => {
  const { label, error, children } = props;
  const classNames = getClassName('FormField', componentConfig, props);
  return (
    <div ref={ref} className={classNames}>
      <label>{label}</label>
      <div className='FormFieldElement'>{children}</div>
      {error && <span className='FormFieldError'>{error}</span>}
    </div>
  );
});

export default FormField;

FormField.displayName = 'FormField';
