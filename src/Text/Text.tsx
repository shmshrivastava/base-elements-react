import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Text.css';

export interface TextHeadingOrParaProps
  extends React.ComponentPropsWithoutRef<'h1'>,
    React.ComponentPropsWithoutRef<'h2'>,
    React.ComponentPropsWithoutRef<'h3'>,
    React.ComponentPropsWithoutRef<'h4'>,
    React.ComponentPropsWithoutRef<'h5'>,
    React.ComponentPropsWithoutRef<'h6'>,
    React.ComponentPropsWithoutRef<'p'> {
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

interface SpanProps extends React.ComponentPropsWithoutRef<'span'> {
  className?: string;
  variation?: 'strong' | 'emphasis' | 'subdued' | 'code';
  element?: 'span';
}

interface OtherTextProps {
  variation?: 'strong' | 'emphasis' | 'subdued' | 'code';
}

export type TextProps = (
  | TextHeadingOrParaProps
  | SpanProps
  | { className?: string; element?: 'auto' }
) &
  OtherTextProps;

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    variation: { type: 'value' }
  }
};

export const Text = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<TextProps>
>((props, ref) => {
  const classNames = getClassName('Text', componentConfig, props);
  const renderProps = { ...props };
  const element =
    !props.element || props.element === 'auto'
      ? (props.variation && 'span') || 'p'
      : props.element;
  const VariationWrapper =
    renderProps.variation === 'strong'
      ? 'strong'
      : renderProps.variation === 'emphasis'
      ? 'em'
      : renderProps.variation === 'code'
      ? 'code'
      : React.Fragment;
  delete renderProps.variation;
  delete renderProps.element;
  if (element === 'span') {
    if (props.element === 'span') {
      return (
        <span ref={ref} {...renderProps} className={classNames}>
          <VariationWrapper>{props.children}</VariationWrapper>
        </span>
      );
    }
    return (
      <VariationWrapper ref={ref} {...renderProps} className={classNames}>
        {props.children}
      </VariationWrapper>
    );
  }
  if (element === 'p') {
    return (
      <p
        ref={ref as React.LegacyRef<HTMLParagraphElement> | undefined}
        {...renderProps}
        className={classNames}
      >
        <VariationWrapper>{props.children}</VariationWrapper>
      </p>
    );
  }
  const RenderComponent = element;
  return (
    <RenderComponent
      ref={ref as React.LegacyRef<HTMLHeadingElement> | undefined}
      {...renderProps}
      className={classNames}
    >
      <VariationWrapper>{props.children}</VariationWrapper>
    </RenderComponent>
  );
});

export default Text;

Text.displayName = 'Text';

function customTextClassName(props: TextProps, customComponentName: string) {
  return `${props.className || ''} Text-${customComponentName}`;
}

type InlineTextProps = SpanProps & OtherTextProps;

export const InlineText = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<InlineTextProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      element='span'
      ref={ref}
      className={customTextClassName(props, 'InlineText')}
    >
      {props.children}
    </Text>
  );
});

InlineText.displayName = 'InlineText';

type HeadingProps = TextHeadingOrParaProps & OtherTextProps;

export const PageTitle = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<HeadingProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      element='h1'
      ref={ref}
      className={customTextClassName(props, 'PageTitle')}
    >
      {props.children}
    </Text>
  );
});

PageTitle.displayName = 'PageTitle';

export const SectionHeading = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<HeadingProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      element='h2'
      ref={ref}
      className={customTextClassName(props, 'SectionHeading')}
    >
      {props.children}
    </Text>
  );
});

SectionHeading.displayName = 'SectionHeading';

export const SubSectionHeading = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<HeadingProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      element='h3'
      ref={ref}
      className={customTextClassName(props, 'SubSectionHeading')}
    >
      {props.children}
    </Text>
  );
});

SubSectionHeading.displayName = 'SubSectionHeading';

export const ComponentTitle = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<HeadingProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      element='h3'
      ref={ref}
      className={customTextClassName(props, 'ComponentTitle')}
    >
      {props.children}
    </Text>
  );
});

ComponentTitle.displayName = 'ComponentTitle';

type InlineCodeProps = SpanProps & OtherTextProps;

export const InlineCode = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  React.PropsWithChildren<InlineCodeProps>
>((props, ref) => {
  return (
    <Text
      {...props}
      variation='code'
      ref={ref}
      className={customTextClassName(props, 'InlineCode')}
    >
      {props.children}
    </Text>
  );
});

InlineCode.displayName = 'InlineCode';
