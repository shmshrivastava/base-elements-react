import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import { StackProps, Stack, StackItem } from '../Stack/Stack';
import Text, { ComponentTitle, TextHeadingOrParaProps } from '../Text/Text';
import { ReactComponent as CloseIcon } from '../icons/Close.svg';
import './Modal.css';
import { ClickableIcon } from '../Button';

export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  noPadding?: boolean;
  title?: string;
  titleElement?: TextHeadingOrParaProps['element'];
  open?: boolean;
  onClose?: () => void;
  disallowCloseOnOutsideClick?: boolean;
  disallowCloseOnEscape?: boolean;
  addFloatingCloseAction?: boolean;
  floatingCloseActionLocation?: 'left' | 'right';
  floatingCloseActionXOffset?: number;
  floatingCloseActionYOffset?: number;
  addCloseActionInHeader?: boolean;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    noPadding: { type: 'boolean', default: false },
    floatingCloseActionLocation: { type: 'value', default: 'right' }
  }
};

export const Modal = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ModalProps>
>((props, ref) => {
  const containerComponentConfig = { styleKeys: [], classGenerator: {} };
  const containerClassNames = getClassName(
    'ModalContainer',
    containerComponentConfig,
    props
  );

  const closeActionRef = React.useRef<HTMLDivElement | null>(null);
  const modalClassNames = getClassName('Modal', componentConfig, {});
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const handleContainerClick = (e: React.SyntheticEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as HTMLElement) &&
      props?.onClose &&
      !props.disallowCloseOnOutsideClick
    ) {
      props.onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        !props.disallowCloseOnEscape &&
        props.onClose
      ) {
        props.onClose();
        return;
      }
      if (props.onKeyDown) {
        props.onKeyDown(event as any);
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  if (!props.open) {
    return <React.Fragment />;
  }
  return (
    <div
      ref={ref}
      onClick={handleContainerClick}
      className={containerClassNames}
    >
      <div ref={modalRef} className={modalClassNames}>
        {props.addFloatingCloseAction ? (
          <div
            ref={closeActionRef}
            className='Modal-close-action'
            style={{
              transform: `translate(${
                props.floatingCloseActionXOffset || 0
              }px, ${props.floatingCloseActionYOffset || 0}px)`
            }}
          >
            <ClickableIcon onClick={props.onClose}>
              <CloseIcon />
            </ClickableIcon>
          </div>
        ) : (
          ''
        )}

        {props.title ? (
          <ModalHeader
            title={props.title}
            addCloseAction={props.addCloseActionInHeader}
            titleElement={props.titleElement}
            onClose={props.onClose}
          />
        ) : (
          ''
        )}
        {props.children}
      </div>
    </div>
  );
});

export default Modal;

Modal.displayName = 'Modal';

export interface ModalHeaderProps
  extends React.ComponentPropsWithoutRef<'div'>,
    StackProps {
  className?: string;
  title?: string;
  titleElement?: TextHeadingOrParaProps['element'];
  addCloseAction?: boolean;
  onClose?: () => void;
}

const ModalHeaderComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    titleElement: { type: 'value' }
  }
};

export const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ModalHeaderProps>
>((props, ref) => {
  const classNames = getClassName(
    'Modal-Header',
    ModalHeaderComponentConfig,
    props
  );
  const stackProps = { vertical: false, ...props };
  delete stackProps.className;
  delete stackProps.title;
  delete stackProps.titleElement;
  delete stackProps.addCloseAction;

  return (
    <div ref={ref} className={classNames}>
      <Stack
        gap
        itemsVerticalAlignment='center'
        {...stackProps}
        className='Modal-Header-content'
      >
        <StackItem fill>
          {' '}
          {props.title ? (
            props.titleElement ? (
              <Text element={props.titleElement}>{props.title}</Text>
            ) : (
              <ComponentTitle>{props.title}</ComponentTitle>
            )
          ) : (
            ''
          )}
        </StackItem>

        {props.children}

        {props.addCloseAction && (
          <ClickableIcon onClick={props.onClose}>
            <CloseIcon />
          </ClickableIcon>
        )}
      </Stack>
    </div>
  );
});

ModalHeader.displayName = 'ModalHeader';

export interface ModalFooterProps
  extends React.ComponentPropsWithoutRef<'div'>,
    StackProps {
  className?: string;
}

const ModalFooterComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {}
};

export const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ModalFooterProps>
>((props, ref) => {
  const classNames = getClassName(
    'Modal-Footer',
    ModalFooterComponentConfig,
    props
  );
  const stackProps = { vertical: false, ...props };
  delete stackProps.className;

  return (
    <div ref={ref} className={classNames}>
      <Stack {...stackProps} className='Modal-Footer-content'>
        {props.children}
      </Stack>
    </div>
  );
});

ModalFooter.displayName = 'ModalFooter';
