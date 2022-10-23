import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import { StackProps, Stack } from '../Stack/Stack';
import Text, { ComponentTitle, TextHeadingOrParaProps } from '../Text/Text';
import './Card.css';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  elevation?: 'normal' | 'low' | 'high';
  noPadding?: boolean;
  title?: string;
  titleElement?: TextHeadingOrParaProps['element'];
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    elevation: { type: 'value', default: 'normal' },
    noPadding: { type: 'boolean', default: false }
  }
};

export const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardProps>
>((props, ref) => {
  const classNames = getClassName('Card', componentConfig, props);
  const renderProps = { ...props };
  delete renderProps.elevation;
  delete renderProps.className;
  delete renderProps.noPadding;
  delete renderProps.title;
  delete renderProps.titleElement;
  return (
    <div ref={ref} className={classNames} {...renderProps}>
      {props.title ? (
        <CardHeader title={props.title} titleElement={props.titleElement} />
      ) : (
        ''
      )}
      {props.children}
    </div>
  );
});

export default Card;

Card.displayName = 'Card';

export interface CardHeaderProps
  extends React.ComponentPropsWithoutRef<'div'>,
    StackProps {
  className?: string;
  title?: string;
  titleElement?: TextHeadingOrParaProps['element'];
}

const cardHeaderComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    titleElement: { type: 'value' }
  }
};

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardHeaderProps>
>((props, ref) => {
  const classNames = getClassName(
    'Card-Header',
    cardHeaderComponentConfig,
    props
  );
  const stackProps = { vertical: false, ...props };
  delete stackProps.className;
  delete stackProps.title;
  delete stackProps.titleElement;

  return (
    <div ref={ref} className={classNames}>
      <Stack
        gap
        itemsVerticalAlignment='center'
        {...stackProps}
        className='Card-Header-content'
      >
        {props.title ? (
          props.titleElement ? (
            <Text element={props.titleElement}>{props.title}</Text>
          ) : (
            <ComponentTitle>{props.title}</ComponentTitle>
          )
        ) : (
          ''
        )}
        {props.children}
      </Stack>
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

export interface CardFooterProps
  extends React.ComponentPropsWithoutRef<'div'>,
    StackProps {
  className?: string;
}

const cardFooterComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {}
};

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<CardFooterProps>
>((props, ref) => {
  const classNames = getClassName(
    'Card-Footer',
    cardFooterComponentConfig,
    props
  );
  const stackProps = { vertical: false, ...props };
  delete stackProps.className;

  return (
    <div ref={ref} className={classNames}>
      <Stack {...stackProps} className='Card-Footer-content'>
        {props.children}
      </Stack>
    </div>
  );
});

CardFooter.displayName = 'CardFooter';
