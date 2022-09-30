import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './FormElement.css';

interface FormElementProps extends React.ComponentPropsWithoutRef<'div'> {
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

export const FormElement = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<FormElementProps>
>((props, ref) => {
  const { label, error, children } = props;
  const classNames = getClassName('FormElement', componentConfig, props);
  return (
    <div ref={ref} className={classNames}>
      <label>{label}</label>
      <div className='FormElementContent'>{children}</div>
      {error && <span className='FormElementError'>{error}</span>}
    </div>
  );
});

export default FormElement;

FormElement.displayName = 'FormElement';
