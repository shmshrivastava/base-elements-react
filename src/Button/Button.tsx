import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Button.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  plain?: boolean;
  appearance?: 'primary' | 'secondary' | 'danger';
  variation?: 'plain' | 'outline' | 'plainWithPadding';
  disableMaxContentWidth?: boolean;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    appearance: { type: 'value', default: 'primary' },
    variation: { type: 'value' },
    loading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
    disableMaxContentWidth: { type: 'boolean', default: false }
  }
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>((props, ref) => {
  const classNames = getClassName('Button', componentConfig, props);
  const renderProps = { ...props };
  return (
    <button ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </button>
  );
});

export default Button;

Button.displayName = 'Button';
