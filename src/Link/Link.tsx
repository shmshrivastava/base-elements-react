import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Link.css';

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  className?: string;
  appearance?: 'primary' | 'secondary' | 'danger';
  variation?: 'plain' | 'outline' | 'plainWithPadding';
  disableMaxContentWidth?: boolean;
  underline?: boolean;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    appearance: { type: 'value', default: 'primary' },
    variation: { type: 'value', default: 'plain' },
    loading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
    underline: { type: 'boolean', default: false },
    disableMaxContentWidth: { type: 'boolean', default: true }
  }
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const classNames = getClassName('Link', componentConfig, props);
    const renderProps = { ...props };
    delete renderProps.variation;
    delete renderProps.appearance;
    delete renderProps.disableMaxContentWidth;
    return (
      <a ref={ref} {...renderProps} className={classNames}>
        {props.children}
      </a>
    );
  }
);

export default Link;

Link.displayName = 'Link';
