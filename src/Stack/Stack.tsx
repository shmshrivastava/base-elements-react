import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Stack.css';

export interface StackProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  vertical?: boolean;
  wrapItems?: 'wrap' | 'nowrap' | 'wrap-reverse';
  itemsVerticalAlignment?:
    | 'top'
    | 'center'
    | 'bottom'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  itemsHorizontalAlignment?:
    | 'left'
    | 'center'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: 'normal' | 'small' | 'smaller' | 'large' | 'larger' | 'nogap' | true;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    vertical: { type: 'boolean', default: false },
    itemsVerticalAlignment: { type: 'value' },
    itemsHorizontalAlignment: { type: 'value' },
    wrapItems: { type: 'value' },
    gap: { type: 'value', default: 'nogap' }
  }
};

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StackProps>
>((props, ref) => {
  const classNames = getClassName('Stack', componentConfig, props);
  const renderProps = { ...props };
  delete renderProps.vertical;
  delete renderProps.gap;
  delete renderProps.wrapItems;
  delete renderProps.itemsHorizontalAlignment;
  delete renderProps.itemsVerticalAlignment;
  return (
    <div {...renderProps} ref={ref} className={classNames}>
      {props.children}
    </div>
  );
});

export default Stack;

Stack.displayName = 'Stack';

export interface StackItemProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  fill?: boolean;
}

const stackItemComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    fill: { type: 'boolean', default: false }
  }
};

export const StackItem = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StackItemProps>
>((props, ref) => {
  const classNames = getClassName('StackItem', stackItemComponentConfig, props);
  const renderProps = { ...props };
  delete renderProps.fill;
  return (
    <div {...renderProps} ref={ref} className={classNames}>
      {props.children}
    </div>
  );
});

StackItem.displayName = 'StackItem';

function customStackClassName(props: StackProps, customComponentName: string) {
  return `${props.className || ''} Stack-${customComponentName}`;
}

export const VerticalStack = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StackProps>
>((props, ref) => {
  return (
    <Stack
      {...props}
      ref={ref}
      className={customStackClassName(props, 'VerticalStack')}
      vertical
    >
      {props.children}
    </Stack>
  );
});

VerticalStack.displayName = 'VerticalStack';

export const HorizontalStack = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StackProps>
>((props, ref) => {
  return (
    <Stack
      {...props}
      ref={ref}
      className={customStackClassName(props, 'HorizontalStack')}
      vertical={false}
    >
      {props.children}
    </Stack>
  );
});

HorizontalStack.displayName = 'HorizontalStack';

export const CenteredContainer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StackProps>
>((props, ref) => {
  return (
    <Stack
      {...props}
      ref={ref}
      className={customStackClassName(props, 'CenteredContainer')}
      vertical={false}
      itemsHorizontalAlignment='center'
      itemsVerticalAlignment='center'
    >
      {props.children}
    </Stack>
  );
});

CenteredContainer.displayName = 'CenteredContainer';
