import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Link.css';

// interface RenderComponent extends HTMLAnchorElement {}

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  className?: string;
  appearance?: 'primary' | 'secondary' | 'danger';
  variation?: 'plain' | 'outline' | 'plainWithPadding' | 'filled';
  disableMaxContentWidth?: boolean;
  underline?: boolean;
  underlineOnHover?: boolean;
  component?: (props: any) => React.ReactElement<HTMLAnchorElement>;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    appearance: { type: 'value', default: 'primary' },
    variation: { type: 'value', default: 'plain' },
    underline: { type: 'boolean', default: false },
    underlineOnHover: { type: 'boolean', default: false },
    disableMaxContentWidth: { type: 'boolean', default: true }
  }
};

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>((props, ref) => {
  const classNames = getClassName('Link', componentConfig, props);
  const renderProps = { ...props };
  delete renderProps.variation;
  delete renderProps.appearance;
  delete renderProps.disableMaxContentWidth;
  const RenderComponent = props.component || 'a';
  return (
    <RenderComponent ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </RenderComponent>
  );
});

export default Link;

Link.displayName = 'Link';
