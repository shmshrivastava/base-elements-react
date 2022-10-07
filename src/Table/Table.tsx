import * as React from 'react';
import { ComponentConfig, getClassName } from '../componentConfig';
import './Table.css';
import TableContext from './TableContext';

interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  className?: string;
  hasRowDivider?: boolean;
  hasColumnDivider?: boolean;
  hasBodyBorder?: boolean
  headerCentered?: boolean;

}

const componentConfig: ComponentConfig = {
  styleKeys: ['padding', 'margin'],
  classGenerator: {
    hasRowDivider: { type: 'boolean', default: false },
    hasColumnDivider: { type: 'boolean', default: false },
    hasBodyBorder: { type: 'boolean', default: false },
    headerCentered: { type: 'boolean', default: false }
  }
};

export const Table = React.forwardRef<
  HTMLTableElement,
  React.PropsWithChildren<TableProps>
>((props, ref) => {
  const classNames = getClassName('Table', componentConfig, props);
  const renderProps = { ...props };
  return (
    <table ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </table>
  );
});

export default Table;

Table.displayName = 'Table';

interface TableHeadProps extends React.ComponentPropsWithoutRef<'thead'> {
  className?: string;
}

const tableHeadComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
  }
};

export function TableHead(props: TableHeadProps){
  const classNames = getClassName('TableHead', tableHeadComponentConfig, props);
  const renderProps = { ...props };
  return (
    <TableContext.Provider value={{ variant: 'head' }}>
      <thead {...renderProps} className={classNames}>
        {props.children}
      </thead>
    </TableContext.Provider>
  );
};

TableHead.displayName = 'TableHead';

interface TableBodyProps extends React.ComponentPropsWithoutRef<'tbody'> {
  className?: string;
}

const tableBodyComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
  }
};

export function TableBody(props: TableBodyProps){
  const classNames = getClassName('TableBody', tableBodyComponentConfig, props);
  const renderProps = { ...props };
  return (
    <TableContext.Provider value={{ variant: 'body' }}>
      <tbody {...renderProps} className={classNames}>
        {props.children}
      </tbody>
    </TableContext.Provider>
  );
};

TableBody.displayName = 'TableBody';

interface TableFooterProps extends React.ComponentPropsWithoutRef<'tfoot'> {
  className?: string;
}

const tableFooterComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
  }
};

export function TableFooter(props: TableFooterProps){
  const classNames = getClassName('TableFooter', tableFooterComponentConfig, props);
  const renderProps = { ...props };
  return (
    <TableContext.Provider value={{ variant: 'footer' }}>
      <tfoot {...renderProps} className={classNames}>
        {props.children}
      </tfoot>
    </TableContext.Provider>
  );
};

TableBody.displayName = 'TableFooter';

interface TableRowProps extends React.ComponentPropsWithoutRef<'tr'> {
  className?: string;
}

const tableRowComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
  }
};

export function TableRow(props: TableRowProps){
  const classNames = getClassName('TableRow', tableRowComponentConfig, props);
  const renderProps = { ...props };
  return (
    <tr {...renderProps} className={classNames}>
      {props.children}
    </tr>
  );
};

TableBody.displayName = 'TableRow';

interface TableHeaderCellProps extends React.ComponentPropsWithoutRef<'th'> {
  className?: string;
  element?: 'th';
}

interface TableDataCellProps extends React.ComponentPropsWithoutRef<'td'> {
  className?: string;
  element?: 'td';
}

type TableCellProps = TableHeaderCellProps | TableDataCellProps;

const tableCellComponentConfig: ComponentConfig = {
  styleKeys: [],
  classGenerator: {
  }
};

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.PropsWithChildren<TableCellProps>
>((props, ref) => {
  const tableContext = React.useContext(TableContext)
  const renderProps = { ...props };
  const RenderComponent = props.element || tableContext.variant === 'head' ? 'th' : 'tr';
  const classNames = getClassName(
    'TableCell',
    tableCellComponentConfig,
    props,
    `TableCell--${RenderComponent === 'th' ? 'Head' : 'Data'}`
  );
  if (RenderComponent === 'th') {
    return <th ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </th>
  } else {
   return <td ref={ref} {...renderProps} className={classNames}>
      {props.children}
    </td>
  }
});

TableBody.displayName = 'TableCell';

export const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.PropsWithChildren<TableCellProps>
  >((props, ref) => {
  return <TableCell ref={ref} {...props} element='th' />
})

TableHeaderCell.displayName = 'TableHeaderCell';

export const TableDataCell = React.forwardRef<
  HTMLTableCellElement,
  React.PropsWithChildren<TableCellProps>
  >((props, ref) => {
  return <TableCell ref={ref} {...props} element='td' />
})

TableDataCell.displayName = 'TableDataCell';