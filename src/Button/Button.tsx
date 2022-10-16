import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Button.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  appearance?: 'primary' | 'secondary' | 'danger';
  variation?: 'plain' | 'outline' | 'plainWithPadding' | 'filled';
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
  delete renderProps.variation;
  delete renderProps.appearance;
  delete renderProps.disableMaxContentWidth;
  return (
    <button ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </button>
  );
});

export default Button;

Button.displayName = 'Button';

function customButtonClassName(
  props: ButtonProps,
  customComponentName: string
) {
  return `${props.className || ''} Button-${customComponentName}`;
}

export const ClickableIcon = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>((props, ref) => {
  const renderProps = { ...props };
  delete renderProps.variation;
  delete renderProps.appearance;
  delete renderProps.disableMaxContentWidth;
  return (
    <Button
      ref={ref}
      appearance='secondary'
      variation='plainWithPadding'
      className={customButtonClassName(props, 'ClickableIcon')}
      {...renderProps}
    >
      {props.children}
    </Button>
  );
});

ClickableIcon.displayName = 'ClickableIcon';
