import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './FormField.css';

export interface FormFieldProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  label?: string;
  error?: string;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
  required?: boolean;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    error: { type: 'boolean', default: false },
    label: { type: 'boolean', default: false },
    required: { type: 'boolean', default: false },
    labelPosition: { type: 'value', default: 'top' }
  }
};

export const FormField = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FormFieldProps>
>((props, ref) => {
  const { label, labelPosition = 'top', error, children } = props;
  const classNames = getClassName('FormField', componentConfig, props);
  return (
    <div ref={ref} className={classNames}>
      <div className='FormField-ElementContainer'>
        {['top', 'left'].includes(labelPosition) && <label>{label}</label>}
        <div className='FormField-Element'>{children}</div>
        {['bottom', 'right'].includes(labelPosition) && <label>{label}</label>}
      </div>
      {error && <span className='FormField-Error'>{error}</span>}
    </div>
  );
});

export default FormField;

FormField.displayName = 'FormField';
