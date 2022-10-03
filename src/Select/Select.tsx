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

interface SelectOptionProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
}

const selectOptionComponentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    selected: { type: 'boolean', default: false },
    value: { type: 'value' }
  }
};

export const SelectOption = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectOptionProps>
>((props, ref) => {
  const classNames = getClassName(
    'SelectOption',
    selectOptionComponentConfig,
    props
  );
  return (
    <div ref={ref} className={classNames} data-value={props.value} {...props}>
      {props.children}
    </div>
  );
});

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    loading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false }
  }
};

export const Select = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SelectProps>
>((props, ref) => {
  const classNames = getClassName('Select', componentConfig, props);
  const options = props.options ? [...props.options] : [];
  const [showOptions, setShowOptions] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const popoverRef = React.useRef<HTMLDivElement>(null);

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
    (props.value &&
      options &&
      options.length > 0 &&
      options.filter((op) => op.value === props.value)[0].label) ||
    props.placeholder ||
    (options && options.length > 0 ? options[0].label : '');

  const renderProps = { ...props };
  delete renderProps.options;

  const handleValueChange = (value: SelectProps['value']) => {
    if (props.onValueChange) {
      props.onValueChange(value);
    }
    setShowOptions(false);
  };

  React.useEffect(() => {
    if (popoverRef.current) {
      const cardElement =
        popoverRef.current.children[1].children[0].children[0];
      setWidth(cardElement.getClientRects()[0].width + 4); //  4 is added to account for border. Consider using border var later
    }
  }, [children]);

  return (
    <div ref={ref} className={classNames}>
      <Popover
        anchor={
          <div
            className='SelectAnchor'
            style={{ width }}
            onClick={() => setShowOptions(!showOptions)}
          >
            {value}
          </div>
        }
        open={showOptions}
        onOutsideClick={() => setShowOptions(false)}
        xLocation='snap_left_edge'
        yLocation='bottom_cover_anchor'
        ref={popoverRef}
      >
        {options.map((option) => (
          <SelectOption
            onClick={() => handleValueChange(option.value)}
            value={option.value}
            key={option.value}
            selected={option.value === props.value}
          >
            {option.label}
          </SelectOption>
        ))}
      </Popover>
    </div>
  );
});

export default Select;

Select.displayName = 'Select';
