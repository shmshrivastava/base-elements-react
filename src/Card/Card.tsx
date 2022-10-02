import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Card.css';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  elevation?: 'normal' | 'low' | 'high';
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    elevation: { type: 'value', default: 'normal' }
  }
};

export const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
>((props, ref) => {
  const classNames = getClassName('Card', componentConfig, props);
  return (
    <div ref={ref} className={classNames}>
      {props.children}
    </div>
  );
});

export default Card;

Card.displayName = 'Card';
