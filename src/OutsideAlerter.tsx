import * as React from 'react';

// Referred from https://stackoverflow.com/a/42234988/5645807

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement | null>,
  onOutsideClick: ((event: MouseEvent | TouchEvent) => void) | undefined
) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        if (onOutsideClick) {
          onOutsideClick(event);
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

interface OutsideAlerterProps extends React.ComponentPropsWithoutRef<'div'> {
  onOutsideClick?: (event: MouseEvent | TouchEvent) => void;
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(
  props: React.PropsWithChildren<OutsideAlerterProps>
) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(wrapperRef, props.onOutsideClick);

  return <div ref={wrapperRef}>{props.children}</div>;
}
