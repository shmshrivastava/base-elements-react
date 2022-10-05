import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import Popover from '../Popover';
import { ReactComponent as ExpandMoreIcon } from '../icons/ExpandMore.svg';
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
  value?: string;
  selected?: boolean;
  onOptionSelect?: (value: string | undefined) => void;
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
  const handleKeyPress = (
    event: React.SyntheticEvent<HTMLDivElement, KeyboardEvent>
  ) => {
    var code = event['keyCode'];
    if (code === 13) {
      if (props.onOptionSelect) {
        props.onOptionSelect(props.value);
      }
      return;
    }
    if (code === 40) {
      // Down key pressed
      const nextTarget = event?.target && event?.target['nextSibling'];
      nextTarget && nextTarget.focus();
      event.stopPropagation();
      return;
    }
    if (code === 38) {
      // Up key pressed
      const previousTarget = event?.target && event?.target['previousSibling'];
      previousTarget && previousTarget.focus();
      event.stopPropagation();
      return;
    }
    event.persist();
    if (props.onKeyDown) {
      props.onKeyDown(event as any);
    }
  };

  const renderProps = { ...props };
  delete renderProps.onOptionSelect;
  return (
    <div
      {...renderProps}
      tabIndex={0}
      ref={ref}
      className={classNames}
      data-value={props.value}
      onKeyDown={handleKeyPress}
      onClick={() => {
        if (props.onOptionSelect) {
          props.onOptionSelect(props.value);
        }
      }}
    >
      <div className='SelectOption-Content'>{props.children}</div>
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
  const expandIconRef = React.useRef<HTMLDivElement>(null);
  const firstOptionRef = React.useRef<HTMLDivElement>(null);

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

  let cardElement: Element | null = null;
  let expandIconWidth: number = 0;
  let cardElementWidth: number = 0;

  if (popoverRef.current) {
    cardElement = popoverRef.current.children[1].children[0].children[0];
    cardElementWidth = cardElement.getClientRects()[0].width;
    if (expandIconRef) {
      expandIconWidth = expandIconRef.current?.offsetWidth || 0;
    }
  }

  React.useEffect(() => {
    setWidth(cardElementWidth);
  }, [children, cardElementWidth]);

  const handleAnchorKeyPress = (event: {
    keyCode: any;
    which: any;
    target: any;
  }) => {
    var code = event.keyCode || event.which;
    if (code === 13 || code === 40) {
      setShowOptions(!showOptions);

      setTimeout(() => {
        if (code === 40 && firstOptionRef?.current) {
          firstOptionRef.current.focus();
        }
      }, 50);
    }
  };

  const handleOptionKeyPress = (event: {
    keyCode: any;
    which: any;
    target: any;
  }) => {
    var code = event.keyCode || event.which;
    if (code === 27) {
      // escape pressed
      setShowOptions(false);
    }
  };

  return (
    <div ref={ref} className={classNames}>
      <Popover
        anchor={
          <div
            className={
              'SelectAnchor' +
              (props.placeholder && !props.value
                ? ' SelectAnchor--placeholder'
                : '')
            }
            style={{ minWidth: width }}
            tabIndex={0}
            onClick={() => setShowOptions(!showOptions)}
            onKeyDown={handleAnchorKeyPress}
          >
            <div className='SelectAnchor-Value'>{value}</div>
            <div className='SelectAnchor-ExpandIcon' ref={expandIconRef}>
              <ExpandMoreIcon />
            </div>
          </div>
        }
        open={showOptions}
        onOutsideClick={() => setShowOptions(false)}
        xLocation='snap_left_edge'
        yLocation='bottom_cover_anchor'
        ref={popoverRef}
      >
        <div
          style={{
            width: popoverRef.current?.offsetWidth || 0 + expandIconWidth
          }}
        >
          {props.placeholder && (
            <SelectOption
              className='SelectOption--placeholder'
              onOptionSelect={() => handleValueChange(null)}
              onKeyDown={handleOptionKeyPress}
            >
              {props.placeholder}
            </SelectOption>
          )}
          {options.map((option, index) => (
            <SelectOption
              onOptionSelect={() => handleValueChange(option.value)}
              value={option.value}
              key={option.value}
              selected={option.value === props.value}
              ref={index === 0 ? firstOptionRef : null}
              onKeyDown={handleOptionKeyPress}
            >
              {option.label}
            </SelectOption>
          ))}
        </div>
      </Popover>
    </div>
  );
});

export default Select;

Select.displayName = 'Select';
