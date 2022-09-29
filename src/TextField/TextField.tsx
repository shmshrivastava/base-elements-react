import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './TextField.css';

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  className?: string;
}

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    disabled: { type: 'boolean', default: false }
  }
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const classNames = getClassName('TextField', componentConfig, props);
    return (
      <input ref={ref} {...props} className={classNames}>
        {props.children}
      </input>
    );
  }
);

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const classNames = getClassName('TextField', componentConfig, props);
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

type TextFieldProps = InputFieldProps | TextAreaFieldProps;

export const TextField = (props: TextFieldProps) => {
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

export default TextField;

TextField.displayName = 'TextField';
