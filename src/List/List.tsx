import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './List.css';

export interface ListProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
  direction?: 'horizontal' | 'vertical';
  data?: any;
  idKey?: string;
  component?: (props: any) => React.ReactElement<HTMLAnchorElement>;
  gap?: 'normal' | 'small' | 'smaller' | 'large' | 'larger' | 'nogap' | true;
}

const componentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
    direction: { type: 'value', default: 'vertical' },
    gap: { type: 'value', default: 'nogap' }
  }
};

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  (props, ref) => {
    const data = Array.isArray(props.data) ? props.data : [];
    const classNames = getClassName('List', componentConfig, props);
    const RenderComponent = props.component || 'div';
    return (
      <div ref={ref} className={classNames}>
        <div className='List-ListContent'>
          {data.map((item, index) => (
            <RenderComponent
              key={props.idKey ? item[props.idKey] : index}
              {...item}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default List;

List.displayName = 'List';
