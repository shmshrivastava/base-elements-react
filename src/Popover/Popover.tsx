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
  xLocation?: 'snap_left_edge' | 'center' | 'snap_right_edge';
  yLocation?:
    | 'top'
    | 'top_cover_anchor'
    | 'center'
    | 'bottom_cover_anchor'
    | 'bottom';
  xOffset?: number;
  yOffset?: number;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {}
};

function getLocationX(
  xLocation: PopoverProps['xLocation'],
  anchorOffsetLeft: number,
  anchorOffsetWidth: number,
  bodyOffsetWidth: number,
  xOffset: number
): number {
  if (xLocation === 'snap_left_edge') {
    return anchorOffsetLeft + xOffset;
  }
  if (xLocation === 'snap_right_edge') {
    return anchorOffsetLeft + anchorOffsetWidth - bodyOffsetWidth + xOffset;
  }
  return (
    anchorOffsetLeft + anchorOffsetWidth / 2 - bodyOffsetWidth / 2 + xOffset
  );
}

function getLocationY(
  yLocation: PopoverProps['yLocation'],
  anchorOffsetTop: number,
  anchorOffsetHeight: number,
  bodyOffsetHeight: number,
  yOffset: number
): number {
  if (yLocation === 'top') {
    return anchorOffsetTop - bodyOffsetHeight + yOffset;
  }
  if (yLocation === 'top_cover_anchor') {
    return anchorOffsetTop + anchorOffsetHeight - bodyOffsetHeight + yOffset;
  }
  if (yLocation === 'bottom_cover_anchor') {
    return anchorOffsetTop + yOffset;
  }
  if (yLocation === 'bottom') {
    return anchorOffsetTop + anchorOffsetHeight + yOffset;
  }
  return (
    anchorOffsetTop + anchorOffsetHeight / 2 - bodyOffsetHeight / 2 + yOffset
  );
}

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
    if (anchorRef && bodyRef) {
      setBodyTop(
        getLocationY(
          props.yLocation,
          anchorRef.current?.offsetTop || -1,
          anchorRef.current?.offsetHeight || 0,
          bodyRef.current?.offsetHeight || 0,
          props.yOffset || 0
        )
      );
      setBodyLeft(
        getLocationX(
          props.xLocation,
          anchorRef.current?.offsetLeft || -1,
          anchorRef.current?.offsetWidth || 0,
          bodyRef.current?.offsetWidth || 0,
          props.xOffset || 0
        )
      );
      setBodyDisplay(true);
    } else {
      setBodyDisplay(false);
    }
  }, [anchorRef, bodyRef]);

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
            visibility: bodyDisplay && props.open ? 'visible' : 'hidden'
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
