import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import Popover from '../Popover';
import './Select.css';

interface Option {
  value: string;
  label: React.ReactNode;
}

interface SelectProps {
  className?: string;
  options?: Option[];
  value?: string | null;
  placeholder?: Option['label'];
  onValueChange?:
    | ((value: string | undefined | null) => {})
    | React.Dispatch<React.SetStateAction<string | undefined | null>>;
}

interface SelectOptionProps extends React.ComponentPropsWithoutRef<'option'> {
  value: string;
}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    loading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false }
  }
};

export const SelectOption = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectOptionProps>
>((props, ref) => {
  const classNames = getClassName('SelectOption', componentConfig, props);
  return (
    <div ref={ref} className={classNames} data-value={props.value}>
      {props.children}
    </div>
  );
});

export const Select = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectProps>
>((props, ref) => {
  const classNames = getClassName('Select', componentConfig, props);
  const options = props.options ? [...props.options] : [];
  const [showOptions, setShowOptions] = React.useState(false);

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  children.forEach((element: React.ReactElement) => {
    options.push({
      value: element.props.value,
      label: element.props.children
    });
  });

  const value =
    props.value ||
    props.placeholder ||
    (options && options.length > 0 ? options[0].label : '');

  const renderProps = { ...props };
  delete renderProps.options;

  return (
    <div ref={ref} className={classNames}>
      <Popover
        anchor={<div onClick={() => setShowOptions(!showOptions)}>{value}</div>}
        open={showOptions}
        onOutsideClick={() => setShowOptions(false)}
      >
        {options.map((option) => (
          <SelectOption value={option.value} key={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </Popover>
    </div>
  );
});

export default Select;

Select.displayName = 'Select';
