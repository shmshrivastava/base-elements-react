import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import FormField, { FormFieldProps } from '../FormField';
import './TextField.css';

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    disabled: { type: 'boolean', default: false }
  }
};

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const classNames = getClassName(
      'Input',
      componentConfig,
      props,
      'TextFieldElement'
    );
    return (
      <input ref={ref} {...props} className={classNames}>
        {props.children}
      </input>
    );
  }
);

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  className?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const classNames = getClassName('TextArea', componentConfig, props);
    return (
      <textarea ref={ref} {...props} className={classNames}>
        {props.children}
      </textarea>
    );
  }
);

interface InputFieldProps extends InputProps {
  multiline?: false;
}

interface TextAreaFieldProps extends TextAreaProps {
  multiline: true;
}

interface InputFieldRenderProps extends InputProps {
  multiline?: false;
}

interface TextAreaFieldRenderProps extends TextAreaProps {
  multiline?: true;
}

type TextFieldElementProps = InputFieldProps | TextAreaFieldProps;

export const TextFieldElement = (props: TextFieldElementProps) => {
  const isMultiline = props.multiline;
  let renderProps;
  if (isMultiline) {
    renderProps = { ...props } as TextAreaFieldRenderProps;
    delete renderProps.multiline;
    return <TextArea {...renderProps} />;
  }
  renderProps = { ...props } as InputFieldRenderProps;
  delete renderProps.multiline;
  return <Input {...renderProps} />;
};

export type TextFieldProps = TextFieldElementProps & FormFieldProps;

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    const textFieldElementProps = props;
    delete textFieldElementProps.label;
    delete textFieldElementProps.error;
    return (
      <FormField ref={ref} label={props.label} error={props.error}>
        <TextFieldElement
          {...(textFieldElementProps as TextFieldElementProps)}
        />
      </FormField>
    );
  }
);

export default TextField;

TextField.displayName = 'TextField';
