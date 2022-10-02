import * as React from 'react';
import Card, { CardProps } from '../Card';
import { ComponentConfig, getClassName } from '../componentConfig';
import OutsideAlerter from '../OutsideAlerter';
import './Popover.css';

interface PopoverProps extends CardProps {
  className?: string;
  anchor: React.ReactNode;
  open: boolean;
  onOutsideClick?: () => void;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {}
};

export const Popover = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PopoverProps>
>((props, ref) => {
  const classNames = getClassName('Popover', componentConfig, props);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [bodyTop, setBodyTop] = React.useState(-1);
  const [bodyLeft, setBodyLeft] = React.useState(-1);
  const [bodyDisplay, setBodyDisplay] = React.useState(false);
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (anchorRef) {
      console.log(anchorRef.current?.offsetLeft, anchorRef.current?.offsetTop);
      setBodyTop(
        (anchorRef.current?.offsetTop || -1) +
          (anchorRef.current?.offsetHeight || 0)
      );
      setBodyLeft(anchorRef.current?.offsetLeft || -1);
      setBodyDisplay(true);
    } else {
      setBodyDisplay(false);
    }
  }, [anchorRef, props.open]);

  React.useEffect(() => {}, [bodyRef, props.onOutsideClick]);

  return (
    <div ref={ref} className={classNames}>
      <div ref={anchorRef} className='PopoverAnchor'>
        {props.anchor}
      </div>
      <OutsideAlerter onOutsideClick={props.onOutsideClick}>
        <div
          style={{
            top: bodyTop,
            left: bodyLeft,
            display: bodyDisplay && props.open ? 'block' : 'none'
          }}
          className='PopoverBody'
          ref={bodyRef}
        >
          <Card>{props.children}</Card>
        </div>
      </OutsideAlerter>
    </div>
  );
});

export default Popover;

Popover.displayName = 'Popover';
