import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import { StackProps, Stack } from '../Stack/Stack';
import Text, { ComponentTitle, TextHeadingOrParaProps } from '../Text/Text';
import { ReactComponent as CloseIcon } from '../icons/Close.svg';
import './Modal.css';

export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  noPadding?: boolean;
  title?: string;
  titleElement?: TextHeadingOrParaProps['element'];
  open?: boolean;
  onClose?: () => void
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    noPadding: { type: 'boolean', default: false }
  }
};

export const Modal = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ModalProps>
>((props, ref) => {
  const containerClassNames = getClassName('ModalContainer', {styleKeys: [], classGenerator: {}}, props);
  const modalClassNames = getClassName('Modal', componentConfig, {});
  const modalRef = React.useRef<HTMLDivElement | null>(null)
  const handleContainerClick = (e: React.SyntheticEvent) => {
    if(modalRef.current && !modalRef.current.contains(e.target as HTMLElement) && props?.onClose) {
      props.onClose()
    }
  }
  return (
    <div ref={ref} onClick={handleContainerClick} className={containerClassNames}>
      <div ref={modalRef} className={modalClassNames}>
        <CloseIcon className='Modal-close-icon' />
        {props.title ? (
          <ModalHeader title={props.title} titleElement={props.titleElement} />
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

  return (
    <div ref={ref} className={classNames}>
      <Stack
        gap
        itemsVerticalAlignment='center'
        {...stackProps}
        className='Modal-Header-content'
      >
        {props.title ? (
          props.titleElement ? (
            <Text element={props.titleElement}>{props.title}</Text>
          ) : (
            <ComponentTitle>{props.title}</ComponentTitle>
          )
        ) : (
          ''
        )}
        {props.children}
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
